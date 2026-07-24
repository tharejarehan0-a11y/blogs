import Card from '@/components/Card'
import Link from 'next/link'
import Cursor from '@/components/cursor'

export default function Generation(){
    return(
        <>
        <Cursor />
        <nav className="flex gap-20 font-mono font-thin list-none justify-center items-center mt-5 mb-5 text-white bg-black">
           <li><Link href="/">Home</Link></li>
           <li><Link href="/albums">Albums</Link></li>
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
            <div>
             <div className='m-8 rounded-4xl p-16 border-8 border-white bg-white text-black'>
            <h1 className="text-4xl mb-5">This generation literally gave nothing</h1>
            <p>
                I am not at all kidding this generation literally gave nothing to the generation ahead how are they even supposed to live my lord please stop these genX people they Not at all care what the upcoming generation will face they only care about the fact that they and their children are getting everything and if they are not they will get onto the streets as a society 80% of the genX world has failed to work together and now are struggling with it
            </p>
            </div>
            <div className="m-8 rounded-4xl p-16 border-8 border-white bg-white text-black">
                <h1 className='text-4xl mb-5'>
                    Land | Water | Air
                </h1>
                <p>
                    They literally took all of this away from us the Land the water and the air what else do u need to survive these are all the basic comodities you need to survive . They were so selfish that they never thought of the world and only thought of themselves and had a conception in their minds that this is only their water , their land and their air but as time passed they were shown the mirror by nature itself and now we live in a world where we cannot breathe properly , the world where there is water shortage , the world where the land is full of litter and they still say us they have given us a lot only 10% of the total population has genuinely given smth to the next generation otherwise the only thing they have give to us really is geopolitics and religions
                </p>
            </div>
            <div className="m-8 rounded-4xl p-16 border-8 border-white bg-white text-black">
                <h1 className="text-4xl mb-5">
                   Education
                </h1>
                <p>
                    They introduced schools very early and it was a good system back then but now it has js become a business for the genX generation . It is so bad that people are prioritizing the homeschooling option rather than choosing a school and going there and those people are mostly doing better than the school kids on an average. Now I think orgs like hackclub code.org and many other non profits are the ones actually working but fail bcz of those greedy schools

                </p>
                
            </div>
            </div>
        </div>
        </div>
        </>
    )
}