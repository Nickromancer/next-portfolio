"use client";
import Video from "@/public/Smoke.mp4";
import Skills from "./skills";
import Avatar from "./avatar";
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
        <div className="text-white flex flex-col justify-items-center *:self-center absolute md:top-36 top-40 left-0 w-full h-full gap-3 md:px-0 px-4">
          <p className="font-light md:text-xl text-lg">
            Game Programmer & Tech Lead
          </p>
          <p className="font-bold md:text-5xl text-4xl">Nicholas Hansen</p>
          <Avatar collapsed={false}></Avatar>
          <p className="md:text-lg font-medium text-pretty md:w-[690px] w-fit text-center mb-8">
            A Game Developer with a passion for furthering my craft and learning
            new things. I study at the IT-Univeristy of Copenhagen as a Master
            of Games Technology student. I&apos;m interested in Game Engines,
            Graphics & Agile Production in Games
          </p>
          <div></div>
          <div className="sm:block hidden">
            <Skills></Skills>
          </div>
        </div>
      </div>
    </>
  );
}
