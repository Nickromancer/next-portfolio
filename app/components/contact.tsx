import Forms from "@/app/components/forms";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <div className="pt-16 pb-14  text-white relative" id="contact">
        <h1 className="font-bold text-3xl mb-4">Contact</h1>
        <p className=" text-md font-extralight mb-2">
          Get in touch or send me an email directly on
          Nicholas.Hansen101@gmail.com
        </p>
        <Forms></Forms>
        <div className="flex justify-center">
          <p className="text-3xl italic text-white font-extralight py-8 pt-20">
            Socials
          </p>
        </div>
        <div className="flex justify-around items-center text-beige   text-2xl">
          <a href="https://github.com/Nickromancer">
            <IoLogoGithub className="size-12 hover:text-white duration-100 ease-in-out" />
          </a>
          |
          <a href="https://www.linkedin.com/in/nicholas-hansen-43587924b/">
            <FaLinkedin className="size-12 hover:text-white duration-100 ease-in-out" />
          </a>
          |
          <a href="https://www.facebook.com/NicholasHansen01">
            <FaFacebookSquare className="size-12 hover:text-white duration-100 ease-in-out" />
          </a>
          |
          <a href="https://www.instagram.com/nicholas.hanzen/">
            <FaInstagram className="size-12 hover:text-white duration-100 ease-in-out" />
          </a>
        </div>

        <div className="hidden md:flex justify-center absolute bottom-3 right-6 text-md font-extralight">
          <p>Made with Next.js</p>
        </div>
      </div>
    </>
  );
}
