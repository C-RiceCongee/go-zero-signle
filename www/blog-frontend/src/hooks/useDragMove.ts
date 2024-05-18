import _ from "lodash";
import { RefObject, useCallback, useEffect, useLayoutEffect, useState } from "react";

const useDragMove = (ref: RefObject<HTMLElement>) => {
    const [canMove, setCanMove] = useState(false)

    // 切换canmove
    const mouseDownHandler = useCallback((e) => {
        setCanMove(!canMove)
    }, [canMove])

    // onMouseMoveHandler
    const onMouseMoveHandler = _.throttle((e: MouseEvent) => {
        if (ref.current) {
            ref.current.style.left = e.x + 'px'
            ref.current.style.top = e.y + 'px'
            ref.current.style.position = 'absolute'
        }
    }, 1)
    useLayoutEffect(() => {
        const target = ref.current
        if (!target) return
        target.draggable = false
        target.addEventListener("mousedown", mouseDownHandler)
        target.addEventListener("mouseup", mouseDownHandler)
        target.addEventListener('mouseleave', mouseDownHandler)
        console.log({ canMove })
        if (canMove) {
            target.addEventListener("mousemove", onMouseMoveHandler)
        }
        return () => {
            target.removeEventListener("mousemove", onMouseMoveHandler)
            target.removeEventListener("mousedown", mouseDownHandler)
            target.removeEventListener("mouseup", mouseDownHandler)
        }
    }, [canMove])
    useLayoutEffect(() => {
        // const target = ref.current
        // target.addEventListener("mousedown", mouseDownHandler)
        // target.addEventListener("mouseup", mouseDownHandler)
        // if (canMove) {
        //     target.addEventListener("mousemove", onMouseMoveHandler)
        // } else {
        //     target?.removeEventListener("mousemove", onMouseMoveHandler)
        // }
        // return () => {
        //     target.removeEventListener("mousedown", mouseDownHandler)
        //     target.removeEventListener("mouseup", mouseDownHandler)
        // }
    }, [])

}
export default useDragMove;