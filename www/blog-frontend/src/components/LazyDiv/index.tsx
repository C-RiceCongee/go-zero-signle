"use client";
import useLazy from "@/hooks/useLazyHook";
import { useRef } from "react";
interface LazyDivProps extends React.HTMLProps<HTMLDivElement> {}

const LazyDiv: React.FC<LazyDivProps> = ({ children }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const { isIn } = useLazy(divRef, false);
  return (
    <div
      className={`duration-500 ${isIn ? "opacity-100" : "opacity-0"}`}
      ref={divRef}
    >
      {children}
    </div>
  );
};

export default LazyDiv;
