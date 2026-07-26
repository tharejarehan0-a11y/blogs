"use client"
import Cursor from '@/components/cursor'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function China(){
    const [hovered,sethovered]= useState(false);
    const [hovered2,sethovered2] = useState(false);
    const [hovered4,sethovered4] = useState(false);
    const [hovered5,sethovered5] = useState(false);
    const [hovered6,sethovered6] = useState(false);
    const [hovered8,sethovered8] = useState(false);
    const [hovered9,sethovered9]= useState(false);
    const [hovered10,sethovered10] = useState(false);
    const [hovered11,sethovered11] = useState(false);
    const [hovered12,sethovered12] = useState(false);
    const [hovered13,sethovered13] = useState(false);
    const [hovered14,sethovered14] = useState(false);
    const [hovered15,sethovered15] = useState(false);
    const [hovered17,sethovered17]= useState(false);
    const [hovered18,sethovered18] = useState(false);
    const [hovered19,sethovered19] = useState(false);
    const [hovered20,sethovered20] = useState(false);
    const [hovered21,sethovered21] = useState(false);
    const [hovered22,sethovered22] = useState(false);
    const [hovered23,sethovered23] = useState(false);
    const [hovered24,sethovered24] = useState(false);
    const [hovered25,sethovered25] = useState(false);
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
            <h1 className='text-8xl'>China</h1>
            <div onMouseEnter={()=>{sethovered(true)}} onMouseLeave={()=>{sethovered(false)}} className={hovered ? "flex justify-start items-center p-20 border-black border-10 transition" : "flex justify-start items-center p-20 bg-black border-10 border-black text-white transition"}>
                <Image src="/china4.jpeg" alt="" height="400" width="450" className='rounded-full border-20 border-black'/>
                <p className='font-fancy text-8xl pl-5'>
                    Falling Out in Shenzen 
                </p>
            </div>
            <div onMouseEnter={()=>{sethovered2(true)}} onMouseLeave={()=>{sethovered2(false)}} className={hovered2 ? "flex justify-start items-center p-20 border-black border-10 transition" : "flex justify-start items-center p-20 bg-black border-10 border-black text-white transition"}>
                <p className="font-fancy text-8xl pr-15 text-right">
                    with the next amitabh bachan Anirudh 
                </p>
                <Image src="/china5.jpeg" alt="" height="400" width="450" className='rounded-full border-20 border-black '/>
            </div>
            <div  onMouseEnter={()=>{sethovered4(true)}} onMouseLeave={()=>{sethovered4(false)}} className={hovered4 ? "flex justify-start items-center p-20 border-black border-10 transition" : "flex justify-start items-center p-20 bg-black border-10 border-black text-white transition"}>
                <p className='font-fancy text-8xl pr-15 text-right'>
                    Cruissseee !!!!
                </p>
                <Image src="/china6.jpeg" alt="" height="800" width="850" className="rounded-full border-20 border-black"/>
            </div>
            <div  onMouseEnter={()=>{sethovered5(true)}} onMouseLeave={()=>{sethovered5(false)}} className={hovered5 ? "flex justify-start items-center p-20 border-black border-10 transition" : "flex justify-start items-center p-20 bg-black border-10 border-black text-white transition"}>
                <Image src="/china7.jpeg" alt="" height="800" width="850" className="rounded-full border-20 border-black"/>
                <p className="font-fancy text-8xl pl-15 text-left">
                     Sophia grateful to her help 
                </p>
            </div>
            <div  onMouseEnter={()=>{sethovered6(true)}} onMouseLeave={()=>{sethovered6(false)}} className={hovered6 ? "flex justify-start items-center p-20 border-black border-10 transition" : "flex justify-start items-center p-20 bg-black border-10 border-black text-white transition"}>
                <p className="font-fancy text-8xl pr-15 text-right">
                    Golang the best human alive
                </p>
                <Image src="/china8.jpeg" alt="" height="800" width="850" className="rounded-full border-20 border-black"/>
            </div>
            <div  onMouseEnter={()=>{sethovered8(true)}} onMouseLeave={()=>{sethovered8(false)}} className={hovered8 ? "flex justify-start items-center p-20 border-black border-10 transition" : "flex justify-start items-center p-20 bg-black border-10 border-black text-white transition"}>
                <p className="font-fancy text-8xl pr-15 text-right">
                    Our videographer   
                </p>    
                <Image src="/china9.jpeg" alt="" height="800" width="850" className="rounded-full border-20 border-black" />      
            </div>
            <div  onMouseEnter={()=>{sethovered9(true)}} onMouseLeave={()=>{sethovered9(false)}} className={hovered9 ? "flex justify-start items-center p-20 border-black border-10 transition" : "flex justify-start items-center p-20 bg-black border-10 border-black text-white transition"}>
                <Image src="/china10.jpeg" alt="" height="800" width="850" className="rounded-full border-20 border-black" />      
                <p className="font-fancy text-8xl pr-15 text-right">
                    Nathan 67 !!!   
                </p>    
            </div>
            <div  onMouseEnter={()=>{sethovered10(true)}} onMouseLeave={()=>{sethovered10(false)}} className={hovered10 ? "flex justify-start items-center p-20 border-black border-10 transition" : "flex justify-start items-center p-20 bg-black border-10 border-black text-white transition"}>
                <p className="font-fancy text-8xl pr-15 text-right">
                    SEEEDDD STUDIIOOOO !!!    
                </p>    
                <Image src="/china11.jpeg" alt="" height="800" width="850" className="rounded-full border-20 border-black" />      
            </div>
            <div  onMouseEnter={()=>{sethovered11(true)}} onMouseLeave={()=>{sethovered11(false)}} className={hovered11 ? "flex justify-start items-center p-20 border-black border-10 transition" : "flex justify-start items-center p-20 bg-black border-10 border-black text-white transition"}>
                <Image src="/china12.jpeg" alt="" height="800" width="850" className="rounded-full border-20 border-black" />      
                <p className="font-fancy text-8xl pr-15 text-right">
                    OH MY GAWD I SAW AN ALIEN OODILA    
                </p>    
            </div>
            <div  onMouseEnter={()=>{sethovered12(true)}} onMouseLeave={()=>{sethovered12(false)}} className={hovered12 ? "flex justify-start items-center p-20 border-black border-10 transition" : "flex justify-start items-center p-20 bg-black border-10 border-black text-white transition"}>
                <p className="font-fancy text-8xl pr-15 text-right">
                    How Coooooll ZACH THE GOAT 
                </p>    
                <Image src="/china13.jpeg" alt="" height="800" width="850" className="rounded-full border-20 border-black" />      
            </div>
            <div  onMouseEnter={()=>{sethovered13(true)}} onMouseLeave={()=>{sethovered13(false)}} className={hovered13 ? "flex justify-start items-center p-20 border-black border-10 transition" : "flex justify-start items-center p-20 bg-black border-10 border-black text-white transition"}>
                <Image src="/china14.jpeg" alt="" height="800" width="850" className="rounded-full border-20 border-black" />      
                <p className="font-fancy text-8xl pr-15 text-right">
                    Kaylee the best person to lockout with   
                </p>    
            </div>
            <div  onMouseEnter={()=>{sethovered14(true)}} onMouseLeave={()=>{sethovered14(false)}} className={hovered14 ? "flex justify-start items-center p-20 border-black border-10 transition" : "flex justify-start items-center p-20 bg-black border-10 border-black text-white transition"}>
                <Image src="/china15.jpeg" alt="" height="800" width="850" className="rounded-full border-20 border-black" />      
                <p className="font-fancy text-8xl pr-15 text-right">
                    Graphic Designing Wizard Herby  
                </p>    
            </div>
            <div  onMouseEnter={()=>{sethovered15(true)}} onMouseLeave={()=>{sethovered15(false)}} className={hovered15 ? "flex justify-start items-center p-20 border-black border-10 transition" : "flex justify-start items-center p-20 bg-black border-10 border-black text-white transition"}>
                <p className="font-fancy text-8xl pr-15 text-right">
                    SAMMMM Fallout org wowowowowo  
                </p>    
                <Image src="/china16.jpeg" alt="" height="800" width="850" className="rounded-full border-20 border-black" />      
            </div>
            <div  onMouseEnter={()=>{sethovered17(true)}} onMouseLeave={()=>{sethovered17(false)}} className={hovered17 ? "flex justify-start items-center p-20 border-black border-10 transition" : "flex justify-start items-center p-20 bg-black border-10 border-black text-white transition"}>
                <Image src="/china18.jpeg" alt="" height="800" width="850" className="rounded-full border-20 border-black" />      
                <p className="font-fancy text-8xl pr-15 text-right">
                    Indian Peeps I needed them so badd   
                </p>    
            </div>
            <div  onMouseEnter={()=>{sethovered18(true)}} onMouseLeave={()=>{sethovered18(false)}} className={hovered18 ? "flex justify-start items-center p-20 border-black border-10 transition" : "flex justify-start items-center p-20 bg-black border-10 border-black text-white transition"}>
                <p className="font-fancy text-8xl pr-15 text-right">
                    My Teammmmm!!!!    
                </p>    
                <Image src="/china19.jpeg" alt="" height="800" width="850" className="rounded-full border-20 border-black" />      
            </div>
            <div  onMouseEnter={()=>{sethovered19(true)}} onMouseLeave={()=>{sethovered19(false)}} className={hovered19 ? "flex justify-start items-center p-20 border-black border-10 transition" : "flex justify-start items-center p-20 bg-black border-10 border-black text-white transition"}>
                <Image src="/china20.jpeg" alt="" height="800" width="850" className="rounded-full border-20 border-black" />      
                <p className="font-fancy text-8xl pr-15 text-right flex flex-wrap">
                    August !!!! She is the coolest
                </p>    
            </div>
            <div  onMouseEnter={()=>{sethovered20(true)}} onMouseLeave={()=>{sethovered20(false)}} className={hovered20 ? "flex justify-start items-center p-20 border-black border-10 transition" : "flex justify-start items-center p-20 bg-black border-10 border-black text-white transition"}>
                <p className="font-fancy text-8xl pr-15 text-right">
                    Woah ! ERIC PANNNNNN  
                </p>    
                <Image src="/china21.jpeg" alt="" height="800" width="850" className="rounded-full border-20 border-black" />      
            </div>
            <div  onMouseEnter={()=>{sethovered21(true)}} onMouseLeave={()=>{sethovered21(false)}} className={hovered21 ? "flex justify-start items-center p-20 border-black border-10 transition" : "flex justify-start items-center p-20 bg-black border-10 border-black text-white transition"}>
                <Image src="/china22.jpeg" alt="" height="800" width="850" className="rounded-full border-20 border-black" />      
                <p className="font-fancy text-8xl pr-15 text-right">
                    Andre WTH bosnia oooooo  
                </p>    
            </div>
            <div  onMouseEnter={()=>{sethovered22(true)}} onMouseLeave={()=>{sethovered22(false)}} className={hovered22 ? "flex justify-start items-center p-20 border-black border-10 transition" : "flex justify-start items-center p-20 bg-black border-10 border-black text-white transition"}>
                <p className="font-fancy text-8xl pr-15 text-right">
                    The greatest badminton player heona    
                </p>    
                <Image src="/china23.jpeg" alt="" height="800" width="850" className="rounded-full border-20 border-black" />      
            </div>
            <div  onMouseEnter={()=>{sethovered23(true)}} onMouseLeave={()=>{sethovered23(false)}} className={hovered23 ? "flex justify-start items-center p-20 border-black border-10 transition" : "flex justify-start items-center p-20 bg-black border-10 border-black text-white transition"}>
                <Image src="/china24.jpeg" alt="" height="800" width="850" className="rounded-full border-20 border-black" />      
                <p className="font-fancy text-8xl pr-15 text-right">
                    CameraMan Anay 
                </p>    
            </div>
            <div  onMouseEnter={()=>{sethovered24(true)}} onMouseLeave={()=>{sethovered24(false)}} className={hovered24 ? "flex justify-start items-center p-20 border-black border-10 transition" : "flex justify-start items-center p-20 bg-black border-10 border-black text-white transition"}>
                <p className="font-fancy text-8xl pr-15 text-right">
                    Janani Parth with me falling out  
                </p>    
                <Image src="/china25.jpeg" alt="" height="800" width="850" className="rounded-full border-20 border-black" />      
            </div>
            <div  onMouseEnter={()=>{sethovered25(true)}} onMouseLeave={()=>{sethovered25(false)}} className={hovered25 ? "flex justify-start items-center p-20 border-black border-10 transition" : "flex justify-start items-center p-20 bg-black border-10 border-black text-white transition"}>
                <Image src="/china26.jpeg" alt="" height="800" width="850" className="rounded-full border-20 border-black" />      
                <p className="font-fancy text-8xl pr-15 text-right">
                    With love from China Signing off !
                </p>    
            </div>
        </div>
        </>
    )
}