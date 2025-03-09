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
      </div>
    </>
  );
}
