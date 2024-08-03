import Image from "next/image";
import StickyNavbar from "@/app/components/stickyNavbar";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";

export default function Home() {
  return (
    <>
      <div className="grow mx-8 lg:ml-12 xl:ml-0 lg:mr-20 xl:mr-16 flex flex-col  md:w-1/2 ">
        <About></About>
        <hr />
        <Skills></Skills>
        <hr />
        <Projects></Projects>
        <hr />
        <Contact></Contact>
      </div>
    </>
  );
}
