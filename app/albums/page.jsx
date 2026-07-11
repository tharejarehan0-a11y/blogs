import Link from 'next/link'
import Cursor from '@/components/cursor'
import Photobooth from '@/components/photoholder'
import "../globals.css";

export default function Albums() {
  return (
    <>
      <Cursor />
      <nav className="flex gap-20 font-mono font-thin list-none justify-center items-center mt-5 mb-5 text-white bg-black">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/albums">Albums</Link></li>
        <li><Link href="/Contact">Contact</Link></li>
      </nav>
      <div className="flex justify-center">
        <h1 className="text-6xl font-fancy mt-5">Albums</h1>
      </div>
      <div className="flex justify-evenly items-center mt-40">
        <div className="h-100 w-50">
        <Photobooth Image="/WhatsApp Image 2026-05-25 at 20.38.04.jpeg" rotation="30deg"/>
        <Photobooth Image="/shimla2.jpeg" rotation="30deg"/>
        <Photobooth Image="/shimla3.jpeg" rotation="30deg"/>
        <h3 className="font-fancy mt-50 shadower text-6xl inline-flex border-2 border-black mb-20 rounded-2xl p-5 pl-5">Shimla</h3>
        </div>
        <div className="h-100 w-50">
        <Photobooth Image="/pic1.jpeg" rotation="30deg"/>
        <Photobooth Image="/pic2.jpeg" rotation="30deg"/>
        <Photobooth Image="/pic3.jpeg" rotation="30deg"/>
        <h3 className="font-fancy mt-50 shadower text-6xl inline-flex border-2 border-black mb-20 rounded-2xl p-5 pl-5">China</h3>
        </div>
        <div className="h-100 w-50">
        <Photobooth Image="/amritsar1.jpeg" rotation="30deg"/>
        <Photobooth Image="/amritsar2.jpeg" rotation="30deg"/>
        <Photobooth Image="/amritsar3.jpeg" rotation="30deg"/>
        <h3 className="font-fancy mt-50 shadower text-6xl inline-flex border-2 border-black mb-20 rounded-2xl p-5 pl-5">Amritsar</h3>
        </div>

      </div>
    </>
  )
}