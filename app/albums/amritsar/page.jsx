import Cursor from '@/components/cursor'
import Link from 'next/link'
import Image from 'next/image'

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
        <div className='flex flex-col justify-center '>
            <div className="flex justify-start items-center p-20 border-black border-10">
                <Image src="/amritsar1.jpeg" alt="" height="400" width="450" className='rounded-full border-20 border-black'/>
                <p className='font-fancy text-8xl pl-5'>
                    Hey This is Me Rehan in Amritsar 
                </p>
            </div>
            <div className="flex justify-end items-center p-20 border-10 border-black">
                <p className="font-fancy text-8xl pr-15 text-right">
                    This is The holy Golden Temple 
                </p>
                <Image src="/amritsar2.jpeg" alt="" height="400" width="450" className='rounded-full border-20 border-black '/>
            </div>
            <div className="flex justify-start items-center p-20 border-10 border-black">
                <Image src="/amritsar3.jpeg" alt="" height="800" width="850" className="rounded-full border-20 border-black" />
                <p className='font-fancy text-8xl pl-15 text-left'>
                    OOOO The Train Wohooo !!!
                </p>
            </div>
            <div className="flex justify-start items-center p-20 border-10 border-black">
                <p className='font-fancy text-8xl pr-15 text-right'>
                    Roaarr!! at the gobindgarh Fort
                </p>
                <Image src="/amritsar4.jpeg" alt="" height="800" width="850" className="rounded-full border-20 border-black"/>
            </div>
            <div className="flex justify-end items-center p-20 border-10 border-black">
                <Image src="/amritsar5.jpeg" alt="" height="800" width="850" className="rounded-full border-20 border-black"/>
                <p className="font-fancy text-8xl pl-15 text-left">
                    Ooo you saw my father :3
                </p>
            </div>
            <div className="flex justify-center items-center p-20 border-10 border-black">
                <p className="font-fancy text-8xl pr-15 text-right">
                    Grrr the same place :(
                </p>
                <Image src="/amritsar6.jpeg" alt="" height="800" width="850" className="rounded-full border-20 border-black"/>
            </div>
            <div className="flex justify-start items-center p-20 border-10 border-black">
                <Image src="/amritsar7.jpeg" alt="" height="800" width="850" className="rounded-full border-20 border-black"/>
                <p className="font-fancy text-8xl pl-15 text-left">
                    My Brother !!!
                </p>
            </div>
            <div className="flex justify-end items-center p-20 border-10 border-black">
                <p className="font-fancy text-8xl pr-15 text-right">
                    We Going Back To HOME !!    
                </p>    
                <Image src="/amritsar8.jpeg" alt="" height="800" width="850" className="rounded-full border-20 border-black" />      
            </div>
        </div>
        </>
    )
}