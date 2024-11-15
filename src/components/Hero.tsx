import { FaLocationArrow } from "react-icons/fa"
import BorderMagic from "./ui/BorderMagic"
import { Spotlight } from "./ui/Spotlight"
import { TextGenerateEffect } from "./ui/TextGenerateEffect"


function Hero() {
  return (

    <div className="pd-20 pt-36" id="about">
   <div>
    <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen  " fill="white"/>
    <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple"/>
    <Spotlight className="top-28 left-80 h-[80vh] w-[50vw] " fill="blue"/>
   </div>
   

   <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
    <div className="flex justify-center relative my-20 z-10">
<div className="max-w-[89vw] md:max-w-2xl lg:maw-w-[60vw] flex flex-col items-center justify-center">
<h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w80"> Dynamic Web Magic With Next.js</h2>
<TextGenerateEffect className="text-center text-[40px] md:text-5xl lg:text-5xl" words="Hello,i am Rawane  "/>
<p className="text-center md:tracking-wider mb-11 text-sm md:text-lg lg:text-2xl">
I am a web developer from Algeria currently studying. I specialize in React and enjoy building interactive web applications.  
</p>
<a href="#projects"><BorderMagic title="Show my work" icon={<FaLocationArrow/>} position="right"/></a>
</div>
    </div>
    </div>
  )
}

export default Hero
