import useDragMove from "@/hooks/useDragMove"
import _ from "lodash"
import { memo, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"
interface IRenderPreview {
    url: string,
    setUrl: (url: string) => void
}
const RenderPreview: React.FC<IRenderPreview> = memo(({ url, setUrl }) => {

    const ref = useRef<HTMLDivElement>(null)

    // 缩放大小
    const [scale, setScale] = useState(1)

    // 滚轮调整缩放
    const onMouseWheel = useCallback(_.throttle((e) => {
        if (e.wheelDelta > 0) {
            setScale(v => v += 0.05)
        } else {
            setScale(v => v -= 0.05)
        }
    }, 50), [scale])
    useEffect(() => {
        document.body.style.overflow = "hidden"
        if (ref.current) {
            ref.current.addEventListener("wheel", onMouseWheel)
        }
        return () => {
            document.body.style.overflow = "scroll"
            ref.current?.removeEventListener('wheel', onMouseWheel)
        }
    }, [])
    const onExit = () => {
        setUrl('')
    }
    const imgRef = useRef<HTMLImageElement>(null)
    // const t = useDragMove(imgRef)

    return <div ref={ref} className="h-full w-full fixed left-0 top-0 z-50 flex items-center justify-center  bg-skin-menu-bg backdrop-blur drop-shadow-sm">
        <img ref={imgRef} draggable={true} className={`w-4/5 duration-100 origin-cente`} style={{ transform: `scale(${scale})` }} src={url}></img>
        <div className="bottomAction fixed bottom-10 flex items-center justify-center">
            <div className="scalePercent">
                缩放比例:{Math.floor(scale * 100)}%
            </div>
            <div className="exit cursor-pointer" onClick={onExit}>退出</div>
        </div>
    </div>
})
const LdViewImage = (props) => {
    if (props.url) {
        return <RenderPreview {...props} ></RenderPreview>
    } else {
        return <></>
    }
}
export default memo(LdViewImage)