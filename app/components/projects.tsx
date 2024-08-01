import Card from "./card";

export default function Projects() {
  return (
    <>
      <div id="projects">
        <h1 className="text-3xl mb-4 text-white">Projects</h1>
        <div className=" flex flex-wrap gap-4 h-auto">
          <Card
            path="DHI.png"
            title="Green Up - Urban Cooling"
            description="Green-Up is an urban cooling tool that allows urban planners to simulate the temperature in cities based on what kind of elements are in the area, be it buildings or parks. "
            tags={["React", "Scrum", "DevOps", "Docker", "Agile"]}
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
          ></Card>
          <Card
            path={"Quest.png"}
            title={"Quest for Caladrius"}
            description={
              "The game is a visual novel with mini-games where you help people along the way with their everyday problems so that you may find and obtain the caladrius' tears."
            }
            tags={["Unity", "Nordic GameJam23'", "C#", "Trello"]}
          ></Card>
          <Card
            path={"Analogians.png"}
            title={"Analogians"}
            description={
              "A game about a time long ago, where the Analogians lived in a world filled with love, affection and community. Find the Analogians, give them affection and restore love to their world."
            }
            tags={["Unreal", "Nordic GameJam24'", "C", "Figma"]}
          ></Card>
          <Card
            path={"OldWebsite.png"}
            title={"Website - Udemy Course"}
            description={""}
            tags={[]}
          ></Card>
        </div>
      </div>
    </>
  );
}
