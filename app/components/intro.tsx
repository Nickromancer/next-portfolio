"use client";
import Video from "@/public/Smoke.mp4";
import Skills from "./skills";
export default function Intro() {
  return (
    <>
      <div className="bg-black/50">
        <video
          className="mix-blend-exclusion blur-[1px] relative h-screen w-screen "
          autoPlay={true}
          loop
          muted
          style={{ objectFit: "cover" }}
        >
          <source src={Video as string} />
        </video>
        <div className="text-white flex flex-col justify-items-center *:self-center absolute md:top-36 top-20 left-0 w-full h-full gap-3">
          <p className="font-light text-xl">Game Programmer & Tech Lead</p>
          <p className="font-bold text-5xl">Nicholas Hansen</p>
          <p className="md:text-lg font-medium text-pretty md:w-[690px] w-fit text-center mb-8">
            A Game Developer with a passion for furthering my craft and learning
            new things. I study at the IT-Univeristy of Copenhagen as a Master
            of Games Technology student. I&apos;m interested in Game Engines,
            Graphics & Agile Production in Games
          </p>
          <div className="">
            <Skills></Skills>
          </div>
        </div>
      </div>
    </>
  );
}
