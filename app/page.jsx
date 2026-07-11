
import Photobooth from "@/components/photoholder";
import Texty from "@/components/texty";
import Cursor from "@/components/cursor";
import Link from "next/link";
import Card from '@/components/Card'
export default function Home() {
  return (
    <div>
    <nav className="flex gap-20 font-mono font-thin list-none justify-center items-center mt-5 mb-15 ">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/albums">Albums</Link></li>
      <li><Link href="/Contact">Contact</Link></li>
    </nav>
    <Cursor />
    <div className="flex justify-evenly items-center gap-25">
    <div className="flex gap-5 justify-center item-center">
    <Photobooth Image="/WhatsApp Image 2026-05-25 at 03.25.44.jpeg" rotation="350deg"/>
    <Photobooth Image="/WhatsApp Image 2026-05-25 at 03.26.03.jpeg" rotation="20deg"/>
    <Photobooth Image="/WhatsApp Image 2026-05-25 at 03.26.15.jpeg" rotation="350deg"/>
  
    </div>
    <main className="flex flex-col items-center justify-center bg-center mt-70 gap-5">
      <h1 className="block text-5xl subpixel-antialiased font-fancy"> 
        Rehan Blogs
      </h1>
      <span className="block antialiased font-extrabold font-fancy text-xl">A New way of thinking</span>
    </main>
    <div className="flex gap-5 justify-center item-center">
    <Photobooth Image="/WhatsApp Image 2026-05-25 at 20.38.04.jpeg" rotation="330deg"/>
    <Photobooth Image="/WhatsApp Image 2026-05-25 at 03.26.43.jpeg" rotation="10deg"/>
    <Photobooth Image="/WhatsApp Image 2026-05-25 at 20.38.05.jpeg" rotation="20deg"/>

    </div>
    </div>
    <section className="mt-28 overflow-hidden w-full">
      <Texty />
      <Texty />
      <Texty />
    </section>
    <div className="flex justify-center items-center gap-2 flex-wrap">
      <Card img="/pexels-gunnar-hoffmann-2154527493-34220116.jpg" Heading="Germany: Affordable Study Hub" discription="Germany is one of the Best countries to be in to complete your undergrad and postgrad " link="/articles/Germany"/>
      <Card img="/pexels-markus-winkler-1430818-4578665.jpg" Heading="Javascript: The Goated Language" discription="Javascript is the best language to start your coding journey with and is one the most vast languages" link="/articles/Javascript"/>
      <Card img="/pexels-bertellifotografia-16027824.jpg" Heading="AI: Plz Stop It" discription="The AI revolution is getting much much bigger but i dont like it at all" link="/articles/AI"/>
      <Card img="/simon-hurry-W2yPIFjOcjc-unsplash.jpg" Heading="GenX: The ones who gave nothing" discription="A generation that failed to do it's job and give the next generation an enviornment to live in and to sustain for the upcoming generations" link="/articles/Generation"/>
    </div>
    </div>

  );
}
