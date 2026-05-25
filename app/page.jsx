
import Photobooth from "@/components/photoholder";
import Texty from "@/components/texty";
import Cursor from "@/components/cursor";
import ArticleCard from "@/components/articlecard";
import Card from '@/components/Card'
export default function Home() {
  return (
    <div>
    <nav className="flex gap-20 font-mono font-thin list-none justify-center items-center mt-5 mb-15 ">
      <li><a href="#">Home</a></li>
      <li><a href="#">Blogs</a></li>
      <li><a href="#">My Resources</a></li>
      <li><a href="#">Contact</a></li>
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
    <div className="flex justify-center items-center m-20 gap-7 "> 

    <section>
      <ArticleCard color="bg-white" text="Social"/>
    </section>
    <section>
      <ArticleCard color="bg-white" text="Travel" />
    </section>
    <section>
      <ArticleCard color="bg-white" text="Life" /> 
    </section>
    <section>
      <ArticleCard color="bg-white" text="Tech"/>
    </section>
    </div>
    <div>
      <Card />

    </div>
    </div>

  );
}
