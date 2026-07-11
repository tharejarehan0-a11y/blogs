import Cursor from '@/components/cursor'
import Link from 'next/link'

export default function china(){
    return (
        <>
        <div>
            <nav className="flex gap-20 font-mono font-thin list-none justify-center items-center mt-5 mb-15 bg-black text-white ">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/albums">Albums</Link></li>
                <li><Link href="/Contact">Contact</Link></li>
            </nav>
            <Cursor />
        </div>
        </>
    )
}