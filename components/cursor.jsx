"use client"

import { motion, frame, useSpring } from "motion/react";
import { useEffect, useRef } from "react";

export default function Cursor() {
    const ref = useRef(null)
    const { x, y } = useFollowPointer(ref)

    return <motion.div ref={ref} style={{ ...ball, x, y }} />
}

const spring = { damping: 3, stiffness: 50, restDelta: 0.001 }

function useFollowPointer(ref){
    const x = useSpring(0);
    const y = useSpring(0);

    useEffect(() => {
    if (!ref.current) return

    const handlePointerMove = ({ clientX, clientY }) => {
        const element = ref.current

        frame.read(() => {
            x.set(clientX - element.offsetLeft - element.offsetWidth / 2)
            y.set(clientY - element.offsetTop - element.offsetHeight / 2)
        })
    }

    window.addEventListener("pointermove", handlePointerMove)

    return () => window.removeEventListener("pointermove", handlePointerMove)
}, [])

    return {x,y}
}

const ball = {
    
    width: "60px",
    height: "60px",
    padding: "15px",
    border: "2px solid black",
    backgroundColor: "red",
    backgroundClip: "content-box",
    borderRadius: "50%",
    pointerEvents: "none",
}