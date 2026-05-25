"use client"
import { motion, useScroll, useTransform } from "framer-motion";
export default function Texty(){

  const { scrollY } = useScroll();

  const x = useTransform(scrollY, [0, 1000], [0, 500]);
  const y = useTransform(scrollY , [0,1000], [-0,-500]);
    return(
        <motion.div style={{y}} className="flex whitespace-nowrap gap-10 text-8xl font-black">
            <span className="mr-20 text-7xl font-bold font-fancy">Rehan</span>
            <span className="mr-20 text-7xl font-bold font-fancy text-amber-50 textoutline">Thareja</span>
            <span className="mr-20 text-7xl font-bold font-fancy">Rehan</span>
            <span className="mr-20 text-7xl font-bold font-fancy text-amber-50 textoutline">Thareja</span>
            <span className="mr-20 text-7xl font-bold font-fancy">Rehan</span>
            <span className="mr-20 text-7xl font-bold font-fancy text-amber-50 textoutline">Thareja</span>
        </motion.div>
    )

}