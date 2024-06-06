"use client";

import { useEffect, useRef } from "react";
import LdBook from "../LdBook";
import "./style.css";
interface LdScrollBooksProps {
  books: any[];
  className: string;
}
const LdScrollBooks: React.FC<LdScrollBooksProps> = ({ books, className }) => {
  const LdScrollBooksRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);
  const onMouseMove = (e: MouseEvent) => {
    if (!LdScrollBooksRef.current) return;
    const moveOffset = e.x - startXRef.current;
    if (moveOffset === 0) return;
    LdScrollBooksRef.current.scrollTo(
      LdScrollBooksRef.current.scrollLeft - moveOffset / 16,
      0
    );
  };
  const onMouseUp = (e: MouseEvent) => {
    document.body.removeEventListener("mousemove", onMouseMove);
  };
  // onMouseDown 监听鼠标点击的位置
  const onMouseDown = (e: MouseEvent) => {
    if (LdScrollBooksRef.current) {
      startXRef.current = e.x;
      document.body.addEventListener("mousemove", onMouseMove);
      document.body.addEventListener("mouseup", onMouseUp);
    }
  };

  useEffect(() => {
    if (!LdScrollBooksRef.current) return;
    LdScrollBooksRef.current.addEventListener("mousedown", onMouseDown);
    return () => {
      if (!LdScrollBooksRef.current) return;
      LdScrollBooksRef.current.removeEventListener("mousedown", onMouseDown);
    };
  }, []);
  return (
    <div className={className}>
      <h3 className="mb-5">📚-最近看的书</h3>
      <div
        className={`LdScrollBooks flex overflow-scroll border-b-2 border-skin-content `}
        ref={LdScrollBooksRef}
      >
        {books.map((v) => (
          <LdBook key={v.name} {...v}></LdBook>
        ))}
      </div>
    </div>
  );
};

export default LdScrollBooks;
