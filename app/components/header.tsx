"use client";
import Avatar from "@/app/components/avatar";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { useCallback, useEffect, useState } from "react";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);

  const onScroll = useCallback((event: any) => {
    const { pageYOffset, scrollY } = window;
    console.log("yOffset", pageYOffset, "scrollY", scrollY);
    setScrollY(window.pageYOffset);
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`text-white grid grid-cols-4 gap-16 pt-6 mx-48 ease-in-out duration-300`}
      >
        <div>
          <Avatar collapsed={scrollY > 0 ? true : false}></Avatar>
        </div>
        <div className="col-span-2 flex flex-col">
          <h1 className="text-4xl font-semibold self-center">
            Nicholas Hansen
          </h1>
          <h2 className="text-2xl font-extralight mb-5 self-center">
            Software Developer
          </h2>
          <h3
            className={`font-light text-sm self-center ${
              scrollY > 0 ? "hidden" : "visible"
            }`}
          >
            MSc Game Technology Student @ The IT University of Copenhagen
          </h3>
          <div
            className={`flex p-1 px-2 mb-4 items-center bg-white rounded-md mt-6 mx-auto animate-bounce ${
              scrollY > 0 ? "hidden" : "visible"
            } `}
          >
            <a className="text-black m-auto font-light" href="/about">
              About Me
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex justify-around text-beige   text-4xl">
            <a href="https://github.com/Nickromancer">
              <IoLogoGithub className="size-10 hover:text-white duration-100 ease-in-out" />
            </a>
            <p>|</p>
            <a href="https://www.linkedin.com/in/nicholas-hansen-43587924b/">
              <FaLinkedin className="size-10 hover:text-white duration-100 ease-in-out" />
            </a>
            <p>|</p>
            <a href="https://www.facebook.com/NicholasHansen01">
              <FaFacebookSquare className="size-10 hover:text-white duration-100 ease-in-out" />
            </a>
            <p>|</p>
            <a href="https://www.instagram.com/nicholas.hanzen/">
              <FaInstagram className="size-10 hover:text-white duration-100 ease-in-out" />
            </a>
          </div>

          <div
            className={`flex flex-row items-center mx-auto mb-4 ${
              scrollY > 0 ? "hidden" : "visible"
            }`}
          >
            <FiMail></FiMail>
            <p className={`mx-auto pl-2 text-sm`}>
              Nicholas.Hansen101@gmail.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
