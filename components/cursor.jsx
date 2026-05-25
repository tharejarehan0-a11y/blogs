"use client"

import { motion, frame, useSpring } from "motion/react";
import { useEffect, useRef } from "react";

export default function Cursor() {

    const ref = useRef(null)

    const { x, y } = useFollowPointer()

    return (
        <motion.div
            ref={ref}
            style={{
                ...ball,
                x,
                y
            }}
        />
    )
}

function useFollowPointer() {

    const x = useSpring(0)
    const y = useSpring(0)

    useEffect(() => {

        const handlePointerMove = ({ clientX, clientY }) => {

            frame.read(() => {

                x.set(clientX - 30)
                y.set(clientY - 30)

            })
        }

        window.addEventListener("pointermove", handlePointerMove)

        return () =>
            window.removeEventListener("pointermove", handlePointerMove)

    }, [])

    return { x, y }
}

const ball = {

    position: "fixed",

    top: 0,
    left: 0,

    width: "60px",
    height: "60px",

    borderRadius: "50%",
    border: "2px solid black",
    padding:"15px",
    backgroundClip:"Content-box",

    backgroundColor: "red",

    pointerEvents: "none",

    zIndex: 9999,
}