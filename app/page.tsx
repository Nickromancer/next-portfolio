import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Intro from "./components/intro";
import Works from "./components/works";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <Intro></Intro>
        <Works></Works>
        <Projects></Projects>
        <hr />
        <Skills></Skills>
        <hr />
        <Contact></Contact>
      </div>
    </>
  );
}
