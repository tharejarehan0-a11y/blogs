import Card from '@/components/Card'
import Link from 'next/link'

export default function Generation(){
    return(
        <>
        <nav className="flex gap-20 font-mono font-thin list-none justify-center items-center mt-5 mb-5 text-white bg-black">
           <li><Link href="/">Home</Link></li>
           <li><Link href="/blog">Blogs</Link></li>
           <li><Link href="/Contact">Contact</Link></li>
        </nav>
        <div className="flex justify-center items-center turnblack bg-black text-white">
        <h1 className="text-3xl  mb-28 mt-9 font-article ">Germany: Affordable Study Hub</h1>
        </div>
        <div className="bg-black goto-end h-full">
        <div className="w-full flex flex-wrap m-0 justify-center items-center gap-40" >
            <Card button="1" img="/rod-long-y0OAmd_COUM-unsplash.jpg" />    
            <Card button="1" img="/ekaterina-shakharova-L4nwL3195U0-unsplash.jpg" />              
        </div>
        <div className="text-white text-xl flex justify-center items-center p-16 font-article">
            
        </div>
        </div>
        </>
    )
}