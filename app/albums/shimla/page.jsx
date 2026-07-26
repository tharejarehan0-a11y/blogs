"use client"
import Cursor from '@/components/cursor'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function China(){
    const [hovered,sethovered]= useState(false);
    const [hovered2,sethovered2] = useState(false);
    const [hovered4,sethovered4] = useState(false);
    const [hovered6,sethovered6] = useState(false);
    const [hovered8,sethovered8] = useState(false);

    return (
        <>
        <div>
            <nav className="flex gap-20 font-mono font-thin list-none justify-center items-center mt-5 mb-15 bg-black text-white">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/albums">Albums</Link></li>
                <li><Link href="/Contact">Contact</Link></li>
            </nav>
            <Cursor />
        </div>
        <div className='flex flex-col justify-center '>
            <h1 className='text-8xl'>Shimla</h1>
            <div onMouseEnter={()=>{sethovered(true)}} onMouseLeave={()=>{sethovered(false)}} className={hovered ? "flex justify-start items-center p-20 border-black border-10 transition" : "flex justify-start items-center p-20 bg-black border-10 border-black text-white transition"}>
                <Image src="/mountains1.jpeg" alt="" height="400" width="450" className='rounded-full border-20 border-black'/>
                <p className='font-fancy text-8xl pl-5'>
                    You can feel it 
                </p>
            </div>
            <div onMouseEnter={()=>{sethovered2(true)}} onMouseLeave={()=>{sethovered2(false)}} className={hovered2 ? "flex justify-start items-center p-20 border-black border-10 transition" : "flex justify-start items-center p-20 bg-black border-10 border-black text-white transition"}>
                <p className="font-fancy text-8xl pr-15 text-right">
                    OOO with my family :3 
                </p>
                <Image src="/mountains2.jpeg" alt="" height="400" width="450" className='rounded-full border-20 border-black '/>
            </div>
            <div  onMouseEnter={()=>{sethovered4(true)}} onMouseLeave={()=>{sethovered4(false)}} className={hovered4 ? "flex justify-start items-center p-20 border-black border-10 transition" : "flex justify-start items-center p-20 bg-black border-10 border-black text-white transition"}>
                <Image src="/mountains4.jpeg" alt="" height="800" width="850" className="rounded-full border-20 border-black"/>
                <p className='font-fancy text-8xl pr-15 text-right'>
                    The Sunlight I am crine
                </p>
            </div>
            <div  onMouseEnter={()=>{sethovered6(true)}} onMouseLeave={()=>{sethovered6(false)}} className={hovered6 ? "flex justify-start items-center p-20 border-black border-10 transition" : "flex justify-start items-center p-20 bg-black border-10 border-black text-white transition"}>
                <p className="font-fancy text-8xl pr-15 text-right">
                    family again -_-
                </p>
                <Image src="/mountains5.jpeg" alt="" height="400" width="450" className="rounded-full border-20 border-black"/>
            </div>
            <div  onMouseEnter={()=>{sethovered8(true)}} onMouseLeave={()=>{sethovered8(false)}} className={hovered8 ? "flex justify-start items-center p-20 border-black border-10 transition" : "flex justify-start items-center p-20 bg-black border-10 border-black text-white transition"}>
                <Image src="/mountains6.jpeg" alt="" height="800" width="850" className="rounded-full border-20 border-black" />      
                <p className="font-fancy text-8xl pr-15 text-right">
                    Okay that is it . I dont have anymore pics 
                </p>    
            </div>
         

        </div>
        </>
    )
}