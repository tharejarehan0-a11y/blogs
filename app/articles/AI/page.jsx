import Card from '@/components/Card'
import Link from 'next/link'

export default function AI(){
    return(
        <>
        <nav className="flex gap-20 font-mono font-thin list-none justify-center items-center mt-5 mb-5 text-white bg-black">
           <li><Link href="/">Home</Link></li>
           <li><Link href="/blog">Blogs</Link></li>
           <li><Link href="/Contact">Contact</Link></li>
        </nav>
        <div className="flex justify-center items-center turnblack bg-black text-white">
        <h1 className="text-3xl  mb-28 mt-9 font-article ">AI: Plz Stop it</h1>
        </div>
        <div className="bg-black goto-end h-full">
        <div className="w-full flex flex-wrap m-0 justify-center items-center gap-40" >
            <Card button="1" img="/immo-wegmann-vi1HXPw6hyw-unsplash.jpg" />    
            <Card button="1" img="/nahrizul-kadri-OAsF0QMRWlA-unsplash.jpg" />              
        </div>
        <div className="text-white text-xl flex justify-center items-center p-16 font-article">
            <div>
                 <div className='m-8 rounded-4xl p-16 border-8 border-white'>
                    <h1>The biggest Problem</h1>
                    <p>
                        The biggest problem that using ai gives us is that we cannot really do anything on our own if get a little too dependant onto it and that stops innovation. Innovation has been the key difference between us humans and other animals living on this earth but innovation k
                    </p>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}