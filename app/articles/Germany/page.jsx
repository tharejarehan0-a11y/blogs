import Card from '@/components/Card'
import Link from 'next/link'
import Cursor from '@/components/cursor'

export default function Germany(){
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
            <Card button="1" img="/pexels-gunnar-hoffmann-2154527493-34220116.jpg" />    
            <Card button="1" img="/pexels-omron2003-33720059.jpg" />              
        </div>
        <div className="text-white text-xl flex justify-center items-center p-16 font-article">
            <div>
                <div className='m-8 rounded-4xl p-16 border-8 border-white bg-white text-black'>

                    <h1 className="text-4xl mb-5">Overview</h1>
                    This is litterally the most under rated option a student can look upto . It has no tution fees moreover the quality of education is one of the best in the world. It is the one of the bests in engineering and medical. There are some top tier schools in germany such as RWTH Aachen , TU     Universties who are ranked high in the QS rankings and are easier to get in compared to the     universties in the other countries. Germany ranks among the global leaders in medical education, with 43 public universities offering medical courses and 32 institutions appearing in the QS     World University Rankings 2026.

                </div>
                <div className=' m-8 rounded-4xl p-16 border-8 border-white bg-white text-black'>

                <h1 className='text-4xl mt-5 mb-5'>Requirements</h1>
                <h2 className="text-3xl mt-3 mb-3 "> Undergrad </h2>
                For Undergraduate courses in germany you wont find many scholarships . Some ways that you can cover your     fees are listed below:
                <ul className='list-decimal mt-5 list-inside'>
                    <li className='list-item'>Part-time Job</li>
                    <li className='list-item'>Hiwi</li>
                    <li className="list-item">Stay and Help some Old person under a program</li>
                </ul>
                <div className="mt-5">
                    You will need a blocked account to enter in germany or to get a study visa for germany . This is the most important thing you need . This is the money that will cover your expenses throughout the year and this is compulsory . You cant even do ausbuildung and why you cant do it i will tell in the blog ahead
                </div>
                <div className="mt-5">
                    You will not directly go to a college or university if your education system has 12 years of     education or less as europe has 13 year of education . So you will have three paths to go with
                    <ul className='list-decimal mt-5 list-inside'>
                        <li className='list-item'>Study in a prepatory course in germany called a Studienkolleg</li>
                        <li className='list-item'>Do one year of bachelors in your country and then apply</li>
                        <li className="list-item">Give a test such as JEE and get a rank if it is valid to get a admission     (confirm) its validity beforehand</li>
                    </ul>
                </div>
                </div>
                <div className='m-8 rounded-4xl p-16 border-8 border-white bg-white text-black'>
                    <h1 className="text-4xl mb-5">
                        Studienkolleg
                    </h1>
                    <div>
                        if you are going to the path of a studienkolleg then you need to learn a few things before even giving the test for studinekolleg 
                        <ul className='list-decimal mt-5 list-inside'>
                        <li className='list-item'>German till B2</li>
                        <li className='list-item'>75% or above in your 12th board in the subjects you are going to take admission in</li>
                        <li className="list-item">Math and physics to their sample paper level and a lil above</li>
                    </ul>
                    after that you will be giving the test for the studienkolleg and after you clear that test you get admitted for the prepratory course and in that you need to study for one year and need to give the FSP test on the basis of which you get a university and then you can do your Undergrad
                    </div>
                </div>
                <div className='m-8 rounded-4xl p-16 border-8 border-white bg-white text-black'>
                    <h1 className="text-4xl mb-5">
                        Bachelors one year in your Country
                    </h1>
                    <p>
                        To go with this path you need to get admission in a college in your country and this only implies if your country has a 12 year education system so u do one more year in your country and good cgpa in your country in the first year on the basis of which you apply to a german college and get admitted there
                    </p>
                </div>
                <div className='m-8 rounded-4xl p-16 border-8 border-white text-black bg-white'>
                    <h1 className="text-4xl mb-5">
                        Give a test such as JEE or SAT 
                    </h1>
                    <p>
                        Some German universties accept such test as your admission critiria and you can be straight away admitted through the marks you get in that but it is quite hard and demanding as they usually ask for good enough marks which only toppers get 
                    </p>
                </div>
                <div className='m-8 rounded-4xl p-16 border-8 border-white text-black bg-white'>
                    <h1 className="text-4xl mb-5">
                        Benefits 
                    </h1>
                    <p>
                        There are quite a lot of benefits of going into such a great country and studying there 
                    </p>
                        <ul className='list-decimal mt-5 list-inside'>
                        <li className='list-item'>European Country European Benefits</li>
                        <li className='list-item'>International recoginition</li>
                        <li className="list-item">Lesser Competition</li>
                        <li className="list-item">Universities with rankings in top 100</li>
                        <li className="list-item">Better Opportunties</li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}