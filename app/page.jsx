import Cursor from "@/components/cursor"; 

export default function Home() {
  return (
    <div>
    <nav className="flex gap-20 font-mono font-thin list-none justify-center items-center mt-5 ">
      <li><a href="#">Home</a></li>
      <li><a href="#">Blogs</a></li>
      <li><a href="#">My Resources</a></li>
      <li><a href="#">Contact</a></li>
    </nav>
      <Cursor />
    <main className="flex flex-col items-center justify-center bg-center mt-70 gap-10">
      <h1 className="block text-7xl subpixel-antialiased font-fancy"> 
        Rehan Blogs
      </h1>
      <span className="block antialiased font-extrabold font-fancy text-2xl">A New way of thinking</span>
    </main>
    </div>
  );
}
