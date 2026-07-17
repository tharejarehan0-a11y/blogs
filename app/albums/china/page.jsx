"use client"
import Cursor from '@/components/cursor'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function China(){
    const [hovered,sethovered]= useState(false);
    const [hovered2,sethovered2] = useState(false);
    const [hovered3,sethovered3] = useState(false);
    const [hovered4,sethovered4] = useState(false);
    const [hovered5,sethovered5] = useState(false);
    const [hovered6,sethovered6] = useState(false);
    const [hovered7,sethovered7] = useState(false);
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
            <h1 className='text-8xl'>Amritsar</h1>
            <div onMouseEnter={()=>{sethovered(true)}} onMouseLeave={()=>{sethovered(false)}} className={hovered ? "flex justify-start items-center p-20 border-black border-10 transition" : "flex justify-start items-center p-20 bg-black border-10 border-black text-white transition"}>
                <Image src="/amritsar1.jpeg" alt="" height="400" width="450" className='rounded-full border-20 border-black'/>
                <p className='font-fancy text-8xl pl-5'>
                    Hey This is Me Rehan in Amritsar 
                </p>
            </div>
            <div onMouseEnter={()=>{sethovered2(true)}} onMouseLeave={()=>{sethovered2(false)}} className={hovered2 ? "flex justify-start items-center p-20 border-black border-10 transition" : "flex justify-start items-center p-20 bg-black border-10 border-black text-white transition"}>
                <p className="font-fancy text-8xl pr-15 text-right">
                    This is The holy Golden Temple 
                </p>
                <Image src="/amritsar2.jpeg" alt="" height="400" width="450" className='rounded-full border-20 border-black '/>
            </div>
            <div onMouseEnter={()=>{sethovered3(true)}} onMouseLeave={()=>{sethovered3(false)}} className={hovered3 ? "flex justify-start items-center p-20 border-black border-10 transition" : "flex justify-start items-center p-20 bg-black border-10 border-black text-white transition"}>
                <Image src="/amritsar3.jpeg" alt="" height="800" width="850" className="rounded-full border-20 border-black" />
                <p className='font-fancy text-8xl pl-15 text-left'>
                    OOOO The Train Wohooo !!!
                </p>
            </div>
            <div  onMouseEnter={()=>{sethovered4(true)}} onMouseLeave={()=>{sethovered4(false)}} className={hovered4 ? "flex justify-start items-center p-20 border-black border-10 transition" : "flex justify-start items-center p-20 bg-black border-10 border-black text-white transition"}>
                <p className='font-fancy text-8xl pr-15 text-right'>
                    Roaarr!! at the gobindgarh Fort
                </p>
                <Image src="/amritsar4.jpeg" alt="" height="800" width="850" className="rounded-full border-20 border-black"/>
            </div>
            <div  onMouseEnter={()=>{sethovered5(true)}} onMouseLeave={()=>{sethovered5(false)}} className={hovered5 ? "flex justify-start items-center p-20 border-black border-10 transition" : "flex justify-start items-center p-20 bg-black border-10 border-black text-white transition"}>
                <Image src="/amritsar5.jpeg" alt="" height="800" width="850" className="rounded-full border-20 border-black"/>
                <p className="font-fancy text-8xl pl-15 text-left">
                    Ooo you saw my father :3
                </p>
            </div>
            <div  onMouseEnter={()=>{sethovered6(true)}} onMouseLeave={()=>{sethovered6(false)}} className={hovered6 ? "flex justify-start items-center p-20 border-black border-10 transition" : "flex justify-start items-center p-20 bg-black border-10 border-black text-white transition"}>
                <p className="font-fancy text-8xl pr-15 text-right">
                    Grrr the same place :(
                </p>
                <Image src="/amritsar6.jpeg" alt="" height="800" width="850" className="rounded-full border-20 border-black"/>
            </div>
            <div onMouseEnter={()=>{sethovered7(true)}} onMouseLeave={()=>{sethovered7(false)}} className={hovered7 ? "flex justify-start items-center p-20 border-black border-10 transition" : "flex justify-start items-center p-20 bg-black border-10 border-black text-white transition"}>
                <Image src="/amritsar7.jpeg" alt="" height="800" width="850" className="rounded-full border-20 border-black"/>
                <p className="font-fancy text-8xl pl-15 text-left">
                    My Brother !!!
                </p>
            </div>
            <div  onMouseEnter={()=>{sethovered3(true)}} onMouseLeave={()=>{sethovered3(false)}} className={hovered3 ? "flex justify-start items-center p-20 border-black border-10 transition" : "flex justify-start items-center p-20 bg-black border-10 border-black text-white transition"}>
                <p className="font-fancy text-8xl pr-15 text-right">
                    We Going Back To HOME !!    
                </p>    
                <Image src="/amritsar8.jpeg" alt="" height="800" width="850" className="rounded-full border-20 border-black" />      
            </div>
        </div>
        </>
    )
}