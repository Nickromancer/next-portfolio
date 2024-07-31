import Image from "next/image";
import StickyNavbar from "@/app/components/stickyNavbar";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";

export default function Home() {
  return (
    <>
      <div className="grow mt-16 lg:ml-12 xl:ml-16 lg:mr-20 xl:mr-52 flex flex-col gap-28 w-1/2 mb-12">
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
      </div>
    </>
  );
}
