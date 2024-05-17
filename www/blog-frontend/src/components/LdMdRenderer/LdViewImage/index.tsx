import _ from "lodash"
import { memo, useEffect, useLayoutEffect, useRef, useState } from "react"
const RenderPreview = memo(({ url, setUrl }) => {
    const ref = useRef<HTMLDivElement>(null)
    const [scale, setScale] = useState(1)
    useEffect(() => {
        document.body.style.overflow = "hidden"
        const onMouseWheel = _.throttle((e) => {
            console.log(e.wheelDelta)
            if (e.wheelDelta > 0) {
                setScale(v => v += 0.05)
            } else {
                setScale(v => v -= 0.05)
            }
        }, 50)
        ref.current?.addEventListener("wheel", onMouseWheel)
    }, [])
    const onExit = () => {
        document.body.style.overflow = "scroll"
        setUrl('')
    }
    return <div ref={ref} className="h-lvh w-lvw fixed left-0 top-0 z-50 flex items-center justify-center bg-skin-bg">
        <img draggable={false} className={`w-4/5 duration-100 origin-center`} style={{ transform: `scale(${scale})` }} src={url}></img>\
        <div className="bottomAction fixed bottom-10 flex items-center justify-center">
            <div className="scalePercent">
                缩放比例:{Math.floor(scale * 100)}%
            </div>
            <div className="exit" onClick={onExit}>退出</div>
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