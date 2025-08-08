import Video from "@/public/Smoke.mp4";
export default function Intro() {
  return (
    <>
      <div className="bg-black/50">
        <video
          className=" mix-blend-exclusion blur-[1px] relative"
          autoPlay={true}
          loop
          muted
        >
          <source src={Video as string} />
        </video>
        <div className="text-white  flex flex-col justify-items-center *:self-center absolute top-64 left-0 w-full h-full gap-3">
          <p className="font-light text-xl">Game Programmer & Tech Lead</p>
          <p className="font-bold text-5xl">Nicholas Hansen</p>
          <p className="text-lg font-medium text-pretty w-[690px] text-center">
            A Game Developer with a passion for furthering my craft and learning
            new things. I study at the IT-Univeristy of Copenhagen as a Master
            of Games Technology student. I'm interested in Game Engines,
            Graphics & Agile Production in Games
          </p>
        </div>
      </div>
    </>
  );
}
