import Link from 'next/link'
import Cursor from '@/components/cursor'
import Photobooth from '@/components/photoholder'

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
        <div>
        <Photobooth Image="/WhatsApp Image 2026-05-25 at 20.38.04.jpeg" rotation="30deg"/>
        <Photobooth Image="/WhatsApp Image 2026-05-25 at 20.38.04.jpeg" rotation="30deg"/>
        <Photobooth Image="/WhatsApp Image 2026-05-25 at 20.38.04.jpeg" rotation="30deg"/>
        <h3 className="font-fancy flex justify-center items-baseline mt-50 text-6xl">Shimla</h3>
        </div>
        <div>
        <Photobooth Image="/WhatsApp Image 2026-05-25 at 20.38.04.jpeg" rotation="330deg"/>
        <Photobooth Image="/WhatsApp Image 2026-05-25 at 20.38.04.jpeg" rotation="330deg"/>
        <Photobooth Image="/WhatsApp Image 2026-05-25 at 20.38.04.jpeg" rotation="330deg"/>
        <h3 className="font-fancy flex justify-center items-baseline mt-50 text-6xl">China</h3>
        </div>
        <div>
        <Photobooth Image="/WhatsApp Image 2026-05-25 at 20.38.04.jpeg" rotation="20deg"/>
        <Photobooth Image="/WhatsApp Image 2026-05-25 at 20.38.04.jpeg" rotation="20deg"/>
        <Photobooth Image="/WhatsApp Image 2026-05-25 at 20.38.04.jpeg" rotation="20deg"/>
        <h3 className="font-fancy flex justify-center items-baseline mt-50 text-6xl">Amritsar</h3>
        </div>

      </div>
    </>
  )
}