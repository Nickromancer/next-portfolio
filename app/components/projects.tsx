import Card from "./card";

export default function Projects() {
  return (
    <>
      <div id="projects">
        <h1 className="text-3xl mb-4 text-white">Projects</h1>
        <div className=" flex">
          <Card path="@/public/profile.jpg"></Card>
        </div>
      </div>
    </>
  );
}
