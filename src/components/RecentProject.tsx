"use client";

import { FaLocationArrow } from "react-icons/fa6";
import Image from 'next/image'
import { projects } from "@/data";
import { PinContainer } from "./ui/PinContainer";
import dynamic from "next/dynamic";

const RecentProjects = () => {
  return (
    <div className="py-20 relative" id="projects" >
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map((item) => (
          <div
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-[570px] w-[80vw] "
            key={item.id}
            
          >
            <PinContainer
              title={item.href}
              href={item.link}
              
            >
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh]  mb-10 "   >
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl rounded-xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  
                </div>
                 <Image
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0 h-[100%] rounded-xl "
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};


export default dynamic (() => Promise.resolve(RecentProjects), {ssr: false})
