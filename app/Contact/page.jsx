"use client"
import "../globals.css"
import Link from "next/link"
import Cursor from "@/components/cursor"
import { number } from "motion"
import { useEffect } from "react"

export default function Contact(){
   useEffect(()=>{
        let random_blocks = []
      let all_blocks = []
      for (let i = 0; i <= 60; i++) {
         all_blocks.push(i.toString());
         let number_random = (Math.floor(Math.random()*60)+1).toString();
          random_blocks.push(number_random)
        }
      console.log(random_blocks)
      console.log(all_blocks)
      },[])
    return(
        <>
      <Cursor />
      <nav className="flex gap-20 font-mono font-thin list-none justify-center items-center mt-5  text-white bg-black">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/albums">Albums</Link></li>
        <li><Link href="/Contact">Contact</Link></li>
      </nav>
      <div className="bg-black h-60 grid-cols-12 grid-rows-5 flex justify-between flex-wrap" id="pixel-block">
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="1"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="2"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="3"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="4"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="5"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="6"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="7"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="8"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="9"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="10"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="11"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="12"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="13"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="14"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="15"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="16"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="17"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="18"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="19"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="20"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="21"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="22"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="24"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="25"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="26"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="27"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="28"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="29"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="30"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="31"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="32"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="33"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="34"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="35"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="36"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="37"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="38"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="39"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="40"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="41"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="42"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="43"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="44"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="45"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="46"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="47"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="48"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="49"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="51"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="52"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="53"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="54"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="55"></div>
        <div className="bg-red-500 border-black border-2 w-20 h-20"id="56"></div>

      </div>
      <div className="flex justify-center">
        <h1 className="text-6xl font-fancy mt-5">Contact Me</h1>
      </div>

    </>
    )
}