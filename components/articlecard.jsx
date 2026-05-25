"use client"
import { motion } from "motion/react"
export default function ArticleCard({color,text}){
    const properties = ` ${color} h-55 w-80 rounded-3xl flex shadow-xl shadow-black justify-center items-center text-6xl text-white font-bold border-black border-6 textoutline font-fancy`
    return(
        <>
        <motion.div className={properties} whileHover={{scale:1.5}}>
            {text}
        </motion.div>
        </>
    )
}