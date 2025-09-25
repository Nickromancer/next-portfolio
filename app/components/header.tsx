"use client";
import Avatar from "@/app/components/avatar";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        className={`text-white flex place-content-between gap-16 ease-in-out duration-300`}
      >
        <div className="col-span-2 flex flex-col">
          <a href="/ ">
            <h1 className="md:text-2xl font-semibold md:w-fit w-max">
              Nicholas Hansen
            </h1>
          </a>
        </div>
        <div className="flex items-center gap-6">
          <a href="/about">About</a>
          <a href="/Resume.pdf" download="Resume">
            Resume
          </a>
          <Link href={"/#Contact"}>
            <button className="text-black bg-white rounded-full w-20 h-8 md:block hidden">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
