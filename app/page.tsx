import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";

export default function Home() {
  return (
    <>
      <div className="mx-8 lg:ml-12 xl:ml-0 lg:mr-20 xl:mr-16 flex flex-col ">
        <Projects></Projects>
        <hr />
        {/*         <About></About>
        <hr /> */}
        <Skills></Skills>
        <hr />
        <Contact></Contact>
      </div>
    </>
  );
}
