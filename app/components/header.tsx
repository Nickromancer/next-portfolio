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
        className={`text-white flex place-content-between gap-16  ease-in-out duration-300`}
      >
        <div className="col-span-2 flex flex-col">
          <h1 className="text-2xl font-semibold">Nicholas Hansen</h1>
        </div>
        <div className="flex gap-6">
          <p>Skills</p>
          <p>Projects</p>
          <p>About</p>
          <p>Resume</p>
        </div>
      </div>
    </>
  );
}
