"use client"
import "../globals.css"
import Link from "next/link"
import Cursor from "@/components/cursor"
import { number } from "motion"
import { useEffect } from "react"
import Image from "next/image"
import InstagramIcon from '@iconify-react/line-md/instagram';
import GithubTwotoneIcon from '@iconify-react/line-md/github-twotone';
import SlackLightIcon from '@iconify-react/selfhst/slack-light';

export default function Contact(){
    useEffect(()=>{
      const interval = setInterval(() => { 
        for(let i = 0; i<=54; i++){
          let all_blocks = []
          all_blocks.push(i.toString());
          let random_blocks = []
          let number_random = (Math.floor(Math.random()*54)+1).toString();
          console.log(number_random)
          random_blocks.push(number_random)
          let div = document.getElementById(`${number_random.toString()}`)
          console.log(div.classList)
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
      <div className="bg-black text-white white-to-black" style={{height:"450vh"}}>
        <div className="flex-col flex justify-center items-center p-20 gap-20">
        <div className="flex justify-center items-center gap-15">

          {
            // This is a block of contact 
          }
            <div className="block w-200 custom-insta-bg pt-15 pb-15 rounded-2xl">
            <div className="flex-col flex justify-center items-center pr-15 pl-15">
              <div className="text-8xl text-black font-fancy">
                Instagram
              </div>
          <div>
            <Image src="/pic3.jpeg" height="500" width="500" alt="img" loading="eager" className="rounded-2xl" />
          </div>
            </div>
              <div className="flex justify-center items-center ml-20">
              <div className="text-black flex  gap-5 justify-center items-center p-20 h-50 w-120">
                <div className="font-fancy text-8xl">
                      <div>
                       @rehan_thareja
                      </div>
                </div>
              </div>
              <div className="ml-20 mr-5 flex justify-center items-center text-black">
                <div>
                <InstagramIcon height="8em"/>
                </div>
              </div>
              </div>
            </div>
          </div>
          </div>



          {
            // This is a block of contact 
          }
            <div className="block w-200 bg-white pt-15 pb-15 rounded-2xl">
            <div className="flex-col flex justify-center items-center pr-15 pl-15">
              <div className="text-8xl text-black font-fancy">
                Instagram
              </div>
          <div>
            <Image src="/pic3.jpeg" height="500" width="500" alt="img" loading="eager" className="rounded-2xl" />
          </div>
            </div>
              <div className="flex justify-center items-center ml-20">
              <div className="text-black flex  gap-5 justify-center items-center p-20 h-50 w-120">
                <div className="font-fancy text-8xl">
                      <div>
                       @rehan_thareja
                      </div>
                </div>
              </div>
              <div className="ml-20 mr-5 flex justify-center items-center text-black">
                <div>
                <InstagramIcon height="8em"/>
                </div>
              </div>
              </div>
            </div>



          {
            // This is a block of contact 
          }
            <div className="block w-200 bg-white pt-15 pb-15 rounded-2xl">
            <div className="flex-col flex justify-center items-center pr-15 pl-15">
              <div className="text-8xl text-black font-fancy">
                Instagram
              </div>
          <div>
            <Image src="/pic3.jpeg" height="500" width="500" alt="img" loading="eager" className="rounded-2xl" />
          </div>
            </div>
              <div className="flex justify-center items-center ml-20">
              <div className="text-black flex  gap-5 justify-center items-center p-20 h-50 w-120">
                <div className="font-fancy text-8xl">
                      <div>
                       @rehan_thareja
                      </div>
                </div>
              </div>
              <div className="ml-20 mr-5 flex justify-center items-center text-black">
                <div>
                <InstagramIcon height="8em"/>
                </div>
              </div>
              </div>
            </div>
            

          </div>
    </>
    )
}