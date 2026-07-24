"use client"
import "../globals.css"
import Link from "next/link"
import Cursor from "@/components/cursor"
import { useEffect } from "react"
import Image from "next/image"
import { time } from "motion"

export default function Contact(){
  //function for the pixel block
    useEffect(()=>{
      const interval = setInterval(() => { 
        for(let i = 0; i<=54; i++){
          let all_blocks = []
          all_blocks.push(i.toString());
          let random_blocks = []
          let number_random = (Math.floor(Math.random()*54)+1).toString();
          random_blocks.push(number_random)
          let div = document.getElementById(`${number_random.toString()}`)
          if(i%2==0){
            let classes = div.classList
            if(classes.contains("to-white")){
              div.classList.remove("to-white")
              div.classList.add("to-black")
            }
            else{
              div.classList.add("to-black")
            }
          }
          else if(i%2>0){
            let classeswhite = div.classList
            if(classeswhite.contains("to-black")){
              div.classList.remove("to-black")
              div.classList.add("to-white")
            }
            else{
              div.classList.add("to-white")
            }
          }
          }
        }, 150);
      return ()=> clearInterval(interval);
       },[])

    //function for the hover function
    useEffect(()=>{

      const insta = document.getElementById("img1");
      const github = document.getElementById("img2");
      const slack = document.getElementById("img3");
  
      const instablock1 = document.getElementById("position1");
      const instablock2 = document.getElementById("positionop1");
  
      const githubblock1 = document.getElementById("position2");
      const githubblock2 = document.getElementById("positionop2");
  
      const slackblock1 = document.getElementById("position3");
      const slackblock2 = document.getElementById("positionop3");
  
      function hover(img,block1,block2) {
        img.addEventListener("mouseenter",()=>{
          block1.classList.remove("position")
          block1.classList.add("position-alt")

          block2.classList.remove("position-opposite")
          block2.classList.add("position-opposite-alt")
        })
        img.addEventListener("mouseleave",()=>{
          block1.classList.remove("position-alt")
          block1.classList.add("position")

          block2.classList.remove("position-opposite-alt")
          block2.classList.add("position-opposite")
        })
      }
      hover(insta,instablock1,instablock2);
      hover(github,githubblock1,githubblock2);
      hover(slack,slackblock1,slackblock2);

      const timeout = setTimeout(()=>{
        let images = document.getElementsByClassName("appear")
        let array = Array.from(images)
        array.map((e)=>{
          e.classList.remove("opacity-0")
        })
      },2000)
      return ()=>clearTimeout(timeout)
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
        <div className="bg-white border-black border-2 w-20 h-20"id="1"></div>
        <div className="bg-white border-black border-2 w-20 h-20"id="2"></div>
        <div className="bg-white border-black border-2 w-20 h-20"id="3"></div>
        <div className="bg-white border-black border-2 w-20 h-20"id="4"></div>
        <div className="bg-black border-black border-2 w-20 h-20"id="5"></div>
        <div className="bg-white border-black border-2 w-20 h-20"id="6"></div>
        <div className="bg-white border-black border-2 w-20 h-20"id="7"></div>
        <div className="bg-white border-black border-2 w-20 h-20"id="8"></div>
        <div className="bg-black border-black border-2 w-20 h-20"id="9"></div>
        <div className="bg-white border-black border-2 w-20 h-20"id="10"></div>
        <div className="bg-black border-black border-2 w-20 h-20"id="11"></div>
        <div className="bg-white border-black border-2 w-20 h-20"id="12"></div>
        <div className="bg-white border-black border-2 w-20 h-20"id="13"></div>
        <div className="bg-white border-black border-2 w-20 h-20"id="14"></div>
        <div className="bg-black border-black border-2 w-20 h-20"id="15"></div>
        <div className="bg-white border-black border-2 w-20 h-20"id="16"></div>
        <div className="bg-white border-black border-2 w-20 h-20"id="17"></div>
        <div className="bg-black border-black border-2 w-20 h-20"id="18"></div>
        <div className="bg-white border-black border-2 w-20 h-20"id="19"></div>
        <div className="bg-white border-black border-2 w-20 h-20"id="20"></div>
        <div className="bg-black border-black border-2 w-20 h-20"id="21"></div>
        <div className="bg-black border-black border-2 w-20 h-20"id="22"></div>
        <div className="bg-white border-black border-2 w-20 h-20"id="23"></div>
        <div className="bg-white border-black border-2 w-20 h-20"id="24"></div>
        <div className="bg-black border-black border-2 w-20 h-20"id="25"></div>
        <div className="bg-white border-black border-2 w-20 h-20"id="26"></div>
        <div className="bg-white border-black border-2 w-20 h-20"id="27"></div>
        <div className="bg-white border-black border-2 w-20 h-20"id="28"></div>
        <div className="bg-white border-black border-2 w-20 h-20"id="29"></div>
        <div className="bg-black border-black border-2 w-20 h-20"id="30"></div>
        <div className="bg-white border-black border-2 w-20 h-20"id="31"></div>
        <div className="bg-white border-black border-2 w-20 h-20"id="32"></div>
        <div className="bg-white border-black border-2 w-20 h-20"id="33"></div>
        <div className="bg-white border-black border-2 w-20 h-20"id="34"></div>
        <div className="bg-black border-black border-2 w-20 h-20"id="35"></div>
        <div className="bg-white border-black border-2 w-20 h-20"id="36"></div>
        <div className="bg-black border-black border-2 w-20 h-20"id="37"></div>
        <div className="bg-white border-black border-2 w-20 h-20"id="38"></div>
        <div className="bg-white border-black border-2 w-20 h-20"id="39"></div>
        <div className="bg-white border-black border-2 w-20 h-20"id="40"></div>
        <div className="bg-white border-black border-2 w-20 h-20"id="41"></div>
        <div className="bg-black border-black border-2 w-20 h-20"id="42"></div>
        <div className="bg-white border-black border-2 w-20 h-20"id="43"></div>
        <div className="bg-black border-black border-2 w-20 h-20"id="44"></div>
        <div className="bg-white border-black border-2 w-20 h-20"id="45"></div>
        <div className="bg-white border-black border-2 w-20 h-20"id="46"></div>
        <div className="bg-white border-black border-2 w-20 h-20"id="47"></div>
        <div className="bg-white border-black border-2 w-20 h-20"id="48"></div>
        <div className="bg-white border-black border-2 w-20 h-20"id="49"></div>
        <div className="bg-white border-black border-2 w-20 h-20"id="50"></div>
        <div className="bg-white border-black border-2 w-20 h-20"id="51"></div>
        <div className="bg-black border-black border-2 w-20 h-20"id="52"></div>
        <div className="bg-white border-black border-2 w-20 h-20"id="53"></div>
        <div className="bg-white border-black border-2 w-20 h-20"id="54"></div>

      </div>
      <div className="bg-black flex-col flex justify-start items-center text-white white-to-black" style={{height:"100vh"}}>
        <div className="block w-500">
        <div className="flex bg-white justify-center items-center text-8xl font-fancy pt-9 pb-9 text-black appear opacity-0">
          Hover below to know
          </div>
        </div>
        <div className="flex jusify-center items-center gap-25">
        <div className="mt-20 appear opacity-0">
          <Image src="/pic1.jpeg" width="300" height="300" alt="pic" loading="eager" className="rounded-4xl w-auto h-auto zimg relative" id="img1"/>
          <div className="bg-white rounded-3xl w-70 h-100 position" id="position1"></div>
          <div className="bg-white rounded-3xl w-70 h-100 position-opposite" id="positionop1"></div>
        </div>
        <div className="mt-20 appear opacity-0">
          <Image src="/WhatsApp Image 2026-05-25 at 03.26.15.jpeg" width="300" height="300" alt="pic" loading="eager" className="rounded-4xl w-auto h-auto zimg relative" id="img2"/>
          <div className="bg-white rounded-3xl w-70 h-100 position" id="position2"></div>
          <div className="bg-white rounded-3xl w-70 h-100 position-opposite" id="positionop2"></div>
        </div>
        <div className="mt-20 appear opacity-0">
          <Image src="/amritsar1.jpeg" width="300" height="300" alt="pic" loading="eager" className="rounded-4xl w-auto h-auto zimg relative" id="img3"/>
          <div className="bg-white rounded-3xl w-70 h-100 position" id="position3"></div>
          <div className="bg-white rounded-3xl w-70 h-100 position-opposite" id="positionop3"></div>
        </div>

        </div>
        <div className="block w-500 h-50 bg-white mt-20">
        </div>
     </div>
    </>
    )
}