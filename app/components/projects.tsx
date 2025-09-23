import Card from "./card";

export default function Projects() {
  return (
    <>
      <h1 className="bg-white font-semibold text-4xl py-3 md:px-40 px-4 text-black">
        Other Projects & Games
      </h1>
      <div className="py-16" id="projects">
        <div className="flex md:flex-wrap md:flex-row flex-col gap-14 h-auto md:px-40 px-8 ">
          <Card
            path="Rick.png"
            title="Rick Rush: Rhythm Game"
            description="Using the SimpleRenderEngine (SRE), I extended the engine with a game loop synced with a music track and matching the BPM of a song.
            This was simulated in a rhythm game using Rick Astley's classic songs, with lanes containing nodes that the player needed to hit on time."
            tags={["C++", "SDL", "SRE", "Rhythm", "Engine"]}
            link="https://github.com/Nickromancer/GPRO_ExamProject/tree/main"
          ></Card>
          <Card
            path={"AnalogiansGif.gif"}
            title={"Analogians"}
            description={
              "A game about a time long ago, where the Analogians lived in a world filled with love, affection and community. Find the Analogians, give them affection and restore love to their world."
            }
            tags={["Unreal", "Nordic GameJam24'", "C++", "Figma"]}
            link={"https://hounsvad.itch.io/analogians"}
          ></Card>
          <Card
            path="ISEGif.gif"
            title="Green Up - Urban Cooling"
            description="Green-Up is an urban cooling tool that allows urban planners to simulate the temperature in cities based on what kind of elements are in the area, be it buildings or parks. "
            tags={["React", "Scrum", "DevOps", "Docker", "Agile"]}
            link={
              "https://www.linkedin.com/feed/update/urn:li:activity:7089525611995545600/"
            }
          ></Card>
          <Card
            path={"squash.gif"}
            title={"Godot Engine - Starter 3D Game"}
            description={
              "My first attempt at Godot, the open-source game engine where I completed a small project using the engine's own langauge and conventions"
            }
            tags={["Godot", "GDScript", "Tutorial"]}
            link={
              "https://docs.godotengine.org/en/stable/getting_started/first_2d_game/index.html"
            }
          ></Card>
          <Card
            path={"Quest.png"}
            title={"Quest for Caladrius"}
            description={
              "The game is a visual novel with mini-games where you help people along the way with their everyday problems so that you may find and obtain the caladrius' tears."
            }
            tags={["Unity", "Nordic GameJam23'", "C#", "Trello"]}
            link={"https://nickromancer1.itch.io/quest-for-caladrius"}
          ></Card>
          <Card
            path="Chirp.png"
            title="Chirp! - Twitter Clone"
            description={
              'A mock social media platform designed for microblogging, allowing users to post short messages known as "cheeps".'
            }
            tags={[
              "C#",
              "ASP.NET/.NET",
              "YAML",
              "Docker",
              "SQLite",
              "Razor",
              "Unit Test",
              "UML",
            ]}
            link={"https://github.com/ITU-BDSA23-GROUP14/Chirp"}
          ></Card>
          <Card
            path={"OldWebsite.png"}
            title={"Website - Udemy Course"}
            description={
              "This was made as part of a web development course where only HTML and CSS was allowed supported by designs made in Figma, where I afterwards used it as a personal portfolio."
            }
            tags={["HTML", "CSS", "Figma", "Learning"]}
            link={"https://nickromancer.dk/"}
          ></Card>
          <Card
            path={"bachelor.png"}
            title={"Computational Storage"}
            description={
              "My Bachelor's thesis which investigates the integration of computational storage aiming to address the challenges of data-intensive applications by embedding computational processes directly into storage devices."
            }
            tags={["Research"]}
            link={
              "https://www.researchgate.net/publication/381049864_Computational_Storage_in_the_Context_of_the_Daphne_System"
            }
          ></Card>
        </div>
      </div>
    </>
  );
}
