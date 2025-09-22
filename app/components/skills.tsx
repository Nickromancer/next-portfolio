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
import { FaUnity } from "react-icons/fa6";
import Image from "next/image";

export default function Skills() {
  return (
    <>
      <div className="text-white" id="skills">
        <div className="flex flex-col items-center">
          {/*           <h1 className="text-3xl font-light mx-40">Skills</h1>
          <hr className="w-28 mx-40" /> */}
        </div>
        <div className="mt-4 grid grid-cols-2 grid-rows-2 gap-4 mx-40">
          <div>
            <h1 className="text-md mt-4 mb-2">Frontend</h1>
            <div className="text-black rounded-md flex flex-wrap gap-2 *:flex *:p-1 *:px-2 *:items-center *:bg-white *:rounded-md *:gap-2 [&_p]:text-[13px]">
              <div>
                <IoLogoHtml5 className="size-6"></IoLogoHtml5>
                <p>HTML</p>
              </div>
              <div>
                <DiCss3 className="size-6"></DiCss3>
                <p>CSS</p>
              </div>
              <div>
                <RiTailwindCssFill className="size-6"></RiTailwindCssFill>
                <p>Tailwind CSS</p>
              </div>
              <div>
                <IoLogoJavascript className="size-6"></IoLogoJavascript>
                <p>JavaScript</p>
              </div>
              <div>
                <SiTypescript className="size-6"></SiTypescript>
                <p>TypeScript</p>
              </div>
              <div>
                <FaReact className="size-6"></FaReact>
                <p>React</p>
              </div>
              <div>
                <SiNextdotjs className="size-6"></SiNextdotjs>
                <p>Next.js</p>
              </div>
              <div>
                <DiJqueryLogo className="size-6"></DiJqueryLogo>
                <p>JQuery</p>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-md mt-4 mb-2">Backend</h1>
            <div className="text-black rounded-md flex flex-wrap gap-4 *:flex *:p-1 *:px-2 *:items-center *:bg-white *:rounded-md *:gap-2 [&_p]:text-[13px]">
              <div>
                <FaNodeJs className="size-6"></FaNodeJs>
                <p>Node.js</p>
              </div>
              <div>
                <SiExpress className="size-6"></SiExpress>
                <p>Express.js</p>
              </div>
              <div>
                <DiPostgresql className="size-6"></DiPostgresql>
                <p>Postgres</p>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-md mt-4 mb-2">Languages</h1>
            <div className="text-black rounded-md flex flex-wrap gap-4 *:flex *:p-1 *:px-2 *:items-center *:bg-white *:rounded-md *:gap-2 [&_p]:text-[13px]  ">
              <div>
                <FaJava className="size-6"></FaJava>
                <p>Java</p>
              </div>
              <div>
                <FaC className="size-6"></FaC>
                <p>C</p>
              </div>
              <div>
                <SiCplusplus className="size-6"></SiCplusplus>
                <p>C++</p>
              </div>
              <div>
                <SiCsharp className="size-6"></SiCsharp>
                <p>C#</p>
              </div>
              <div>
                <FaGolang className="size-6"></FaGolang>
                <p>GoLang</p>
              </div>
              <div>
                <SiFsharp className="size-6"></SiFsharp>
                <p>F#</p>
              </div>
              <div>
                <BsFillTerminalFill className="size-6"></BsFillTerminalFill>
                <p>Assembly</p>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-md mt-4 mb-2">Tools</h1>
            <div className="text-black rounded-md flex flex-wrap gap-4 *:flex *:p-1 *:px-2 *:items-center *:bg-white *:rounded-md *:gap-2 [&_p]:text-[13px]">
              <div>
                <FaGitAlt className="size-6"></FaGitAlt>
                <p>Git</p>
              </div>
              <div>
                <IoLogoGithub className="size-6"></IoLogoGithub>
                <p>GitHub</p>
              </div>
              <div>
                <FaLinux className="size-6"></FaLinux>
                <p>Linux</p>
              </div>
              <div>
                <SiMicrosoftazure className="size-6"></SiMicrosoftazure>
                <p>Microsoft Azure</p>
              </div>
              <div>
                <FaDocker className="size-6"></FaDocker>
                <p>Docker</p>
              </div>
              <div>
                <SiPostman className="size-6"></SiPostman>
                <p>Postman</p>
              </div>
              <div>
                <FaUnity className="size-6"></FaUnity>
                <p>Unity</p>
              </div>
              <div>
                <Image
                  className="size-6"
                  src="/UNREAL.png"
                  width={24}
                  height={24}
                  alt="Unreal Engine logo"
                  objectFit="contain"
                />
                <p> Unreal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
