"use client"
import { useEffect, useRef, useState } from "react";
import _ from "lodash"
interface LazyImageProps extends React.HTMLProps<HTMLImageElement> {
}
const LazyImage: React.FC<LazyImageProps> = (props) => {
  const imgRef = useRef<HTMLImageElement>(null)
  const [isIn, setIsIn] = useState(false)
  const defaultImg = 'https://ts1.cn.mm.bing.net/th/id/R-C.fd7cad22933db9caf2e02f2201cdacdb?rik=gJgWP1TDqA29CA&riu=http%3a%2f%2fimg.zcool.cn%2fcommunity%2f0109d25949e3baa8012193a3fb7c19.gif&ehk=pPVPiyQNUuMbzYgHC7KUMw7JBiep%2bDQKO82vNsJfX0o%3d&risl=&pid=ImgRaw&r=0'
  useEffect(() => {
    // onImageTopPositionChange 判断图片是否进入了页面
    const onImageTopPositionChange = _.throttle(() => {
      // 1. 获取图片距离顶部的距离
      const distanceToTop = imgRef.current?.getBoundingClientRect().top || 99999
      const imgHeight = imgRef.current?.getBoundingClientRect().height || 0
      // 2. 和适口高度做对比 (剪掉图片高度 要图片完全进入才去加载)
      const browserHeight = window.innerHeight
      // distanceToTop为负数代表藏在页面上面 也不加载
      if (distanceToTop + imgHeight <= browserHeight && distanceToTop > 0) {
        console.log(distanceToTop)
        setIsIn(true)
      }
    }, 1000)
    onImageTopPositionChange()
    // 监听窗口滚动
    window.addEventListener("scroll", onImageTopPositionChange)
    return () => { window.removeEventListener("scroll", onImageTopPositionChange) }
  }, [])
  return <img ref={imgRef} {...props} src={isIn ? props.src : defaultImg}></img>
}
export default LazyImage;