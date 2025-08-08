import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Intro from "./components/intro";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <Intro></Intro>
        <hr />
        <Projects></Projects>
        <hr />
        <Skills></Skills>
        <hr />
        <Contact></Contact>
      </div>
    </>
  );
}
