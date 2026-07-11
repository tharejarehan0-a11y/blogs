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
                    <h1 className="text-4xl mb-5">The biggest Problem</h1>
                    <p>
                        The biggest problem that using ai gives us is that we cannot really do anything on our own if get a little too dependant onto it and that stops innovation. Innovation has been the key difference between us humans and other animals living on this earth but innovation is js not possible with the excessive use of AI and huge dependence on it as it only uses the already present data to give a prediction and does not produce new data that contradicts the given data which is essential for development and innovation
                    </p>
                </div>
                <div className='m-8 rounded-4xl p-16 border-8 border-white'>
                    <h1 className="text-4xl mb-5">The Fear</h1>
                    <p>
                        Now that so many companies have invested so much in such a technology that the companies selling things related to it or these things have grown so much that some of them have the valuation over the gdp of many contries and still they are being invested on which have created a huge fear in the investor community that if such companies fail the stock market will crash abruptly all their money will be wasted and they will go in loss. So all The investors , The founders and the consumers which are benefitting from this tool do not want it to js end but the people who are researching in it for the good of society and the people who know the consequences of using such a tool are boycotting the excessive use of it 
                    </p>
                </div>
                <div className='m-8 rounded-4xl p-16 border-8 border-white'>
                    <h1 className="text-4xl mb-5"> The Future after This</h1>
                    <p>
                        The future after this will be very unpredictable and will be totally dependant on the upcoming founders and the purpose of their companies and also on the youth and their use of such a tool and the developments that will take place in this field in the time span after this . Seeing the students of reputated universties such as harvard and stanford boycotting such tools it seems the youth is not happy with what is happening but also seeing the investors investing in it and also the youth being so dependant onto it , It seems the tool will continue to grow and no one will be able to stop the growth 
                    </p>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}