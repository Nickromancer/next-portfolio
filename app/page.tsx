import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";

export default function Home() {
  return (
    <>
      <div className="md:mx-20 flex flex-col">
        <Projects></Projects>
        <hr />
        <Skills></Skills>
        <hr />
        <Contact></Contact>
      </div>
    </>
  );
}
