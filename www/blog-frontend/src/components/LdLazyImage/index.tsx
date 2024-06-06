"use client";
import { useEffect, useRef, useState } from "react";
import _ from "lodash";
import useLazy from "@/hooks/useLazyHook";

interface LazyImageProps extends React.HTMLProps<HTMLImageElement> {}
const LazyImage: React.FC<LazyImageProps> = (props) => {
  const defaultImg =
    "https://ts1.cn.mm.bing.net/th/id/R-C.fd7cad22933db9caf2e02f2201cdacdb?rik=gJgWP1TDqA29CA&riu=http%3a%2f%2fimg.zcool.cn%2fcommunity%2f0109d25949e3baa8012193a3fb7c19.gif&ehk=pPVPiyQNUuMbzYgHC7KUMw7JBiep%2bDQKO82vNsJfX0o%3d&risl=&pid=ImgRaw&r=0";
  const imgRef = useRef<HTMLImageElement>(null);
  const { isIn } = useLazy(imgRef);
  return (
    // @ts-ignore
    <img
      alt="图片异常"
      ref={imgRef}
      {...props}
      src={isIn ? props.src : defaultImg}
    />
  );
};
export default LazyImage;
