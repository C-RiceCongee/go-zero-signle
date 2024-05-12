"use client"
import { RefObject, useEffect, useLayoutEffect, useState } from "react"

import { throttle } from "lodash"
const useLazy = (ref: RefObject<HTMLElement>) => {
    // 状态
    const [isIn, setIsIn] = useState<boolean>(false)
    
    const onScroll = throttle(() => {
        if (ref.current) {
            const distanceToTop = ref.current.getBoundingClientRect().top
            const domHeight = ref.current.getBoundingClientRect().height
            if (distanceToTop + domHeight <= window.innerHeight) {
                setIsIn(true)
            }
        }
    }, 500)

    useEffect(() => {
        // 首屏 先调用一次
        onScroll()

        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    })
    return {
        isIn
    }
}

export default useLazy