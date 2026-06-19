import Card from '@/components/Card'
import Link from 'next/link'

export default function javascript(){
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
            <Card button="1" img="/growtika-9WnjxT1NCoY-unsplash.jpg" />    
            <Card button="1" img="/florian-olivo-4hbJ-eymZ1o-unsplash.jpg" />              
        </div>
        <div className="text-white text-xl flex justify-center items-center p-16 font-article">
            <div>
                <div className='m-8 rounded-4xl p-16 border-8 border-white'>

                    <h1 className="text-4xl mb-5">Overview</h1>
                    Javascript is one of the most vast languages i have ever learned . It has so many frameworks to learn the same thing in it and each framework has its own advantages . It gives developers so many options to choose from . If you are starting to learn to code Javascript can provide you the foundations from where you can have many routes to choose from and it is one of the most demanded languages in the market. In all it is the best language to start your journey with 
                </div>
                <div className=' m-8 rounded-4xl p-16 border-8 border-white'>
                    <h1 className="text-4xl mb-5">The options Javascript gives you</h1>
                    <h2 className="text-3xl mb-5">Web Development</h2>
                    If you are looking for a career in the web Javascript is a must for you . It is the one that gives the website the superpower to interact with the user and the ease of management of data to the developer itself without it web development could have been worse than hell. It is the basic building block of web . It gives you the power to control both the frontend and backend only with one language and gives you so many frameworks to choose from that you will be stunned by how vast the language itself is 
                    <br />
                    <br />
                    <br />
                    <h2 className="text-3xl mb-5">App Development</h2>
                    Yes Javascript also provides you the power to develop apps and that too both the backend and the frontend how cool is that with one language you can develop a whole ecosystem you js need to master it and that is why I call it the king of all the languages . You js need this one language and master it both frontend and backend and you will get hired it is a whole stack of super powers
                    <br />
                    <br />
                    <br />
                    <h2 className="text-3xl mb-5">Cloud Development</h2>
                    This is in so much demand right now. Javascript gives you the foundations that you can later use in such big technologies such as cloud development . In todays era where everyone uses cloud , every company requires it . Javascript is the one that makes a developer capable of learning that technologies . It is in so much of demand that even if you learn the basics of cloud and learn the junior level concepts of cloud with a bit of hussle you can get hired easily 
                    <br />
                    <br />
                    <br />
                    <h2 className="text-3xl mb-5">Game Development</h2>
                    If you love games you are again in the right place. This is the beauty of this language you can literally do anything with this language there are so many libraries that help you with different types of things that allow you to do different types of things that will make you fall in love with this language and even the learning curve of this language is not that bad once you understand the async part of this language and the api and backend then you are good to go with this 
                </div>
                <div className="m-8 rounded-4xl p-16 border-8 border-white">
                    <h1 className="text-4xl mb-5">Frameworks</h1>
                    We will discuss about some famous frameworks and their usecase here so that u can choose your path well 
                    <br />
                    <br />
                    <br />
                    <h2 className="text-3xl mb-5">React.js</h2>
                    It is one of the most popular languages and increases the speed of the page to render and also gives the developer so many tools that makes his life easy. This is used for webpages and can also be used for applications but in a different way and that is called React Native. It helps you divide your work into different components and pages and also provides you with hooks that handle so much of work so that you dont have to code extra
                    <br />
                    <br />
                    <br />
                    <h2 className="text-3xl mb-5">Next.js</h2>
                    A framework of the full stack it helps you handle everything with js TS , React and Next and your web app looks modern, cool, SEO optimized. It has so many features like SSR - Server Side Rendering and much more . It provides you with the solution of all your problems in managing web apps . Js use it once and you will never be able to get out of it 
                    <br />
                    <br />
                    <br />
                    <h2 className="text-3xl mb-5">Three.js</h2>
                    This is the 3D bose of the Javascript world and once you understand it you enter into the third dimension of the web world and you will be in love with that and you will use that in every web app that you will build . Again it tells you how vast this language really is 
                    <br />
                    <br />
                    <br />
                    <h2 className="text-3xl mb-5">Node.js</h2>
                    The Javascript Runtime brought from the browser to your local machine and you are the one handling how your backend works. This library itself was a Revolution and this opened so many pathways for the developers developing using this language and changed the programming world forever
                    <br />
                    <br />
                    <br />
                    <br />
                    These were the most famous ones and there are much more the package manager npm is the worlds largest package manager and has so many libraries that you can use js with npm i library this like a gift by god to a programmer 
                </div>
            </div>
        </div>
        </div>
        </>
    )
}