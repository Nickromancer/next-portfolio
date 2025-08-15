import { IoLogoHtml5 } from "react-icons/io5";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { DiJqueryLogo } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { FaC } from "react-icons/fa6";
import { SiCplusplus } from "react-icons/si";
import { SiCsharp } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { SiFsharp } from "react-icons/si";
import { BsFillTerminalFill } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { SiMicrosoftazure } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiPostman } from "react-icons/si";

export default function Skills() {
  return (
    <>
      <div className="text-white" id="skills">
        <h1 className=" text-3xl mb-4 font-bold">Skills</h1>
        <div>
          <h1 className="text-md mb-2">Frontend</h1>
          <div className="text-black rounded-md flex flex-wrap gap-4 *:flex *:p-1 *:px-2 *:items-center *:bg-white *:rounded-md *:gap-2 [&_p]:text-[13px]">
            <div className="">
              <IoLogoHtml5 className="size-6"></IoLogoHtml5>
              <p className=" ">HTML</p>
            </div>
            <div>
              <DiCss3 className="size-6"></DiCss3>
              <p className=" ">CSS</p>
            </div>
            <div>
              <RiTailwindCssFill className="size-6"></RiTailwindCssFill>
              <p className=" ">Tailwind CSS</p>
            </div>
            <div>
              <IoLogoJavascript className="size-6"></IoLogoJavascript>
              <p className=" ">JavaScript</p>
            </div>
            <div>
              <SiTypescript className="size-6"></SiTypescript>
              <p className=" ">TypeScript</p>
            </div>
            <div>
              <FaReact className="size-6"></FaReact>
              <p className=" ">React</p>
            </div>
            <div>
              <SiNextdotjs className="size-6"></SiNextdotjs>
              <p className=" ">Next.js</p>
            </div>
            <div>
              <DiJqueryLogo className="size-6"></DiJqueryLogo>
              <p className=" ">JQuery</p>
            </div>
          </div>
          <h1 className="text-md mt-8 mb-2">Backend</h1>
          <div className="text-black rounded-md flex flex-wrap gap-4 *:flex *:p-1 *:px-2 *:items-center *:bg-white *:rounded-md *:gap-2 [&_p]:text-[13px]">
            <div className="">
              <FaNodeJs className="size-6"></FaNodeJs>
              <p className=" ">Node.js</p>
            </div>
            <div className="">
              <SiExpress className="size-6"></SiExpress>
              <p className=" ">Express.js</p>
            </div>
            <div className="">
              <DiPostgresql className="size-6"></DiPostgresql>
              <p className=" ">Postgres</p>
            </div>
          </div>
          <h1 className="text-md mt-8 mb-2">Languages</h1>
          <div className="text-black rounded-md flex flex-wrap gap-4 *:flex *:p-1 *:px-2 *:items-center *:bg-white *:rounded-md *:gap-2 [&_p]:text-[13px]  ">
            <div className="">
              <FaJava className="size-6"></FaJava>
              <p className=" ">Java</p>
            </div>
            <div className="">
              <FaC className="size-6"></FaC>
              <p className=" ">C</p>
            </div>
            <div className="">
              <SiCplusplus className="size-6"></SiCplusplus>
              <p className=" ">C++</p>
            </div>
            <div className="">
              <SiCsharp className="size-6"></SiCsharp>
              <p className=" ">C#</p>
            </div>
            <div className="">
              <FaGolang className="size-6"></FaGolang>
              <p className=" ">GoLang</p>
            </div>
            <div className="">
              <SiFsharp className="size-6"></SiFsharp>
              <p className=" ">F#</p>
            </div>
            <div className="">
              <BsFillTerminalFill className="size-6"></BsFillTerminalFill>
              <p className=" ">Assembly</p>
            </div>
          </div>
          <h1 className="text-md mt-8 mb-2">Tools</h1>
          <div className="text-black rounded-md flex flex-wrap gap-4 *:flex *:p-1 *:px-2 *:items-center *:bg-white *:rounded-md *:gap-2 [&_p]:text-[13px]">
            <div className="">
              <FaGitAlt className="size-6"></FaGitAlt>
              <p className=" ">Git</p>
            </div>
            <div className="">
              <IoLogoGithub className="size-6"></IoLogoGithub>
              <p className=" ">GitHub</p>
            </div>
            <div className="">
              <FaLinux className="size-6"></FaLinux>
              <p className=" ">Linux</p>
            </div>
            <div className="">
              <SiMicrosoftazure className="size-6"></SiMicrosoftazure>
              <p className=" ">Microsoft Azure</p>
            </div>
            <div className="">
              <FaDocker className="size-6"></FaDocker>
              <p className=" ">Docker</p>
            </div>
            <div className="">
              <SiPostman className="size-6"></SiPostman>
              <p className=" ">Postman</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
