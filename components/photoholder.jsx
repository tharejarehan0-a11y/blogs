"use client"
import { motion } from 'motion/react'
export default function Photobooth({ Image, rotation }) {
    const style = {
        transform: `rotate(${rotation})`,
        transformOrigin: 'center',
    }

    return (
        <>
        <motion.div 
        className="bg-amber-50 border-black border-2 inline-block pr-2 pl-2 pt-2 pb-6 mt-6 shadow-xl shadow-black " 
        initial={{opacity:0,scale:0}}
        animate={{ rotate:rotation,opacity:1,scale:2 }}
        transition={{duration:1}}
        whileHover={{scale:3}}
        >
            <img src={Image} alt="image" height="300px" width="120px" className="border-2 border-black" />
        </motion.div>
        </>
    )
}