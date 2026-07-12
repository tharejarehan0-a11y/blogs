import Cursor from '@/components/cursor'
import Link from 'next/link'
import Photobooth from '@/components/photoholder'

export default function amritsar(){
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
        <div className="mt-20 flex-3 justify-evenly items-center ">
            <div>
                <Photobooth Image="/amritsar1.jpeg" rotation="0deg"/>
                <Photobooth Image="/amritsar2.jpeg" rotation="0deg"/>
                <Photobooth Image="/amritsar3.jpeg" rotation="0deg"/>
            </div>
            <br />
            <br />
            <div>
                <Photobooth Image="/amritsar4.jpeg" rotation="0deg"/>
                <Photobooth Image="/amritsar5.jpeg" rotation="0deg"/>
                <Photobooth Image="/amritsar6.jpeg" rotation="0deg"/>
            </div>
            <br />
            <br />
            <div>
                <Photobooth Image="/amritsar7.jpeg" rotation="0deg"/>
                <Photobooth Image="/amritsar8.jpeg" rotation="0deg"/>
            </div>
        </div>
        </>
    )
}