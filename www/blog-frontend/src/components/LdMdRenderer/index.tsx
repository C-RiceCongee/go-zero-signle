"use client";
interface LdMdRendererProps {
  content: string;
}
import markdownit from "markdown-it";
// @ts-ignore
import markdownItDeflist from "markdown-it-deflist";
import { markdownItTable } from "markdown-it-table";
import markdownItContainer from "markdown-it-container";

// @ts-ignore
import footnot from "markdown-it-footnote";
// @ts-ignore
import { full as emoji } from "markdown-it-emoji";
import markdownItAnchor from "markdown-it-anchor";
import markdownItTocDoneRight from "markdown-it-toc-done-right";
// import lazy_loading from 'markdown-it-image-lazy-loading'
import hljs from "highlight.js/lib/core";
import MarkdownIt from "markdown-it";
import javascript from "highlight.js/lib/languages/javascript";
import go from "highlight.js/lib/languages/go";
import shell from "highlight.js/lib/languages/shell";
import diff from "highlight.js/lib/languages/diff.js";
import typescript from "highlight.js/lib/languages/typescript";
import css from "highlight.js/lib/languages/css.js";
import html from "highlight.js/lib/languages/haml";
import "../../styles/render/render.css";
import {
  MouseEventHandler,
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("go", go);
hljs.registerLanguage("shell", shell);
hljs.registerLanguage("sh", shell);
hljs.registerLanguage("diff", diff);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("css", css);
hljs.registerLanguage("html", html);
hljs.registerLanguage("vue", html);
hljs.registerLanguage("html5", html);

import "./styles.scss";
import LdViewImage from "./LdViewImage";
// 渲染TOC
interface ILdRenderToc {
  html: string;
}
const LdRenderToc: React.FC<ILdRenderToc> = memo(({ html }) => {
  const domRef = useRef<HTMLDivElement>(null);
  const onTocClickHandler = (e: any) => {
    const target = e.target;
    e.preventDefault();
    // 使用自定义滚动
    if (target) {
      const id = target.getAttribute("href");
      if (id) {
        document.getElementById(id.substring(1))?.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      }
    }
  };
  if (html) {
    return (
      <div className="fixed duration-75 right-0 z-1 w-68 translate-x-[90%] hover:translate-x-[0%]  r-0 z-0 bg-skin-bg  p-2 text-sm top-[64px] shadow-ld-shadow-1 backdrop-blur-xl rounded-t-lg">
        <div
          className="mdContentHtml"
          onClick={onTocClickHandler}
          ref={domRef}
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </div>
    );
  } else {
    return <></>;
  }
});
LdRenderToc.displayName = "LdRenderToc";
const LdMdRenderer: React.FC<LdMdRendererProps> = (props) => {
  const { content } = props;
  const [htmlToc, setHtmlToc] = useState("");
  const [renderContent, setRenderContent] = useState("");
  const [previewImgUrl, setPreviewImageUrl] = useState<string>("");
  const handleRender = useCallback(() => {
    const md: MarkdownIt = markdownit({
      html: true,
      linkify: true,
      typographer: true,
      highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return (
              '<pre><code class="hljs">' +
              hljs.highlight(str, { language: lang, ignoreIllegals: true })
                .value +
              "</code></pre>"
            );
          } catch (e) {
            console.log(e);
          }
        }

        return (
          '<pre><code class="hljs">' +
          md.utils.escapeHtml(str) +
          "</code></pre>"
        );
      },
    })
      .use(markdownItDeflist)
      .use(markdownItContainer)
      .use(markdownItTable)
      .use(footnot)
      .use(emoji)
      .use(markdownItAnchor, {
        permalink: true,
        permalinkBefore: true,
      })
      .use(markdownItTocDoneRight, {
        callback: (html: string) => {
          if (html !== '<nav class="table-of-contents"></nav>') {
            setHtmlToc(html);
          }
        },
      });
    setRenderContent(md.render(content));
  }, [content]);
  useEffect(() => {
    handleRender();
  }, [handleRender]);
  enum ProcessTag {
    img = "IMG",
  }
  // RenderClickHandler 点击事件
  const RenderClickHandler = (e: any) => {
    let target = e.target as HTMLElement;
    const tagName = target.tagName;
    // 事件代理处理不同元素的点击
    if (tagName === ProcessTag.img) {
      let url = target.getAttribute("src");
      setPreviewImageUrl(url || "");
    }
  };
  return (
    <div>
      {/* toc 目录组件 */}
      <LdRenderToc html={htmlToc} />
      {/* 图片预览组件 */}
      <LdViewImage url={previewImgUrl} setUrl={setPreviewImageUrl} />
      <div
        onClick={RenderClickHandler}
        className="ldMdRenderer scroll-smooth"
        dangerouslySetInnerHTML={{ __html: renderContent }}
      ></div>
    </div>
  );
};

export default memo(LdMdRenderer);
