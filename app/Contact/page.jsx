import "../globals.css"
import Link from "next/link"
import Cursor from "@/components/cursor"

export default function Contact(){
    return(
        <>
      <Cursor />
      <nav className="flex gap-20 font-mono font-thin list-none justify-center items-center mt-5 mb-5 text-white bg-black">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/albums">Albums</Link></li>
        <li><Link href="/Contact">Contact</Link></li>
      </nav>
      <div className="flex justify-center">
        <h1 className="text-6xl font-fancy mt-5">Contact Me</h1>
      </div>
      
    </>
    )
}