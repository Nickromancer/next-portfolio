import Image from "next/image";
import Model from "./modelScene";
import Graphics from "./graphicsModel";
export default function Works() {
  return (
    <>
      <div className=" bg-white">
        <h1 className="font-semibold text-4xl py-3 px-40">Highlighted Works</h1>
      </div>
      <div className="*:px-40 *:py-14">
        <div className="bg-[url('../public/WelcomeHome.jpg')] bg-center relative">
          <div className="absolute backdrop-blur-[1px] backdrop-brightness-[60%] w-full h-full left-0 top-0"></div>
          <div className="relative flex justify-between items-center">
            <div
              className=" text-white [&_p]:text-gray-400 
        [&_h1]:text-4xl [&_h2]:text-xl *:font-bold [&_h3]:font-light *:pb-2 *:w-96"
            >
              <p>Unity | PC </p>
              <h1>Welcome Home</h1>
              <h3 className="text-wrap">
                A PSX-style psychological/stealth horror game, where the
                protagonist is in a cult, and they have to discover hidden
                secrets, find the truth behind the welcoming façade, and in the
                end, escape the cult.
              </h3>{" "}
              <h2>Role</h2>
              <h3>Tech Lead</h3>
              <h2>Size: 6</h2>
              <h3>
                Producer / Tech Lead / Gameplay Programmer / Programmer / Design
                Lead / UX Lead
              </h3>
              <h2>Duration</h2>
              <h3>2024 August - 2024 December</h3>
              <h2>Tools & Software</h2>
              <h3>Github / Kanban / Blender / FMOD</h3>
            </div>
            <div className="text-white">
              <Image
                src="/WelcomeHome.gif"
                width={500}
                height={500}
                alt="Picture of the author"
                className="rounded-2xl  border-4"
              ></Image>
            </div>
          </div>
          <div className="relative mx-auto w-max flex gap-4">
            <button className="text-black bg-white rounded-full w-32 h-12">
              View More
            </button>
            <button className="text-white bg-orange rounded-full w-32 h-12">
              Play Now
            </button>
          </div>
        </div>

        <div className="bg-[url(https://img.itch.zone/aW1nLzIxNzczNjIzLnBuZw==/original/43vDPn.png)] bg-center">
          <div className="flex justify-between items-center">
            <div
              className=" text-white [&_p]:text-gray-400 
        [&_h1]:text-4xl [&_h2]:text-xl *:font-bold [&_h3]:font-light *:pb-2 *:w-96"
            >
              <p>Unreal | PC </p>
              <h1>The Untold Story of Vísdómír</h1>
              <h3 className="text-wrap">
                A first person mystery and detective game where you as the
                player find yourself in an abandoned town. It is now your task
                to find out what has happened and uncover the mysteries of the
                previous residents.
              </h3>{" "}
              <h2>Role</h2>
              <h3>Tech Artist</h3>
              <h2>Size: 6</h2>
              <h3>
                Producer / Creative Director / Tech Artist / Narrative Designer
                / Programmer / Programmer
              </h3>
              <h2>Duration</h2>
              <h3>2025 Feburary - 2025 May</h3>
              <h2>Tools & Software</h2>
              <h3>
                Github / Kanban / Blender / FMOD / Substance Painter / Photoshop
              </h3>
            </div>
            <div>
              <Model></Model>
            </div>
          </div>
          <div className="mx-auto w-max flex gap-4">
            <button className="text-black bg-white rounded-full w-32 h-12">
              View More
            </button>
            <button className="text-white bg-orange rounded-full w-32 h-12">
              Play Now
            </button>
          </div>
        </div>

        <div className="bg-sea bg-center relative ">
          <div className="absolute backdrop-blur-[2px] backdrop-brightness-[60%] w-full h-full left-0 top-0"></div>
          <div className="relative flex justify-between items-center">
            <div
              className=" text-white [&_p]:text-gray-400 
        [&_h1]:text-4xl [&_h2]:text-xl *:font-bold [&_h3]:font-light *:pb-2 *:w-96"
            >
              <p>Solo Project | Graphics </p>
              <h1>Advanced Real-Time Rendering in OpenGL</h1>
              <h3 className="text-wrap">
                This OpenGL project implements a physically-based rendering
                system with image-based lighting, parallax occlusion mapping,
                and BRDF shading for realistic materials. Using a multi-pass
                framebuffer workflow, it generates prefiltered environment maps
                and offers real-time parameter control through an interactive
                GUI.
              </h3>{" "}
              <h2>Role</h2>
              <h3>Graphics Programmer</h3>
              <h2>Duration</h2>
              <h3>2025 Marts - 2025 May</h3>
              <h2>Tools & Software</h2>
              <h3>Github / CMake / RenderDoc / Blender</h3>
            </div>
            <div>
              <Graphics></Graphics>
            </div>
          </div>
          <div className="relative mx-auto w-max flex gap-4">
            <button className="text-black bg-white rounded-full w-32 h-12">
              View More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
