import Image from "next/image";
import Link from "next/link";
import Profile1 from "@/public/ChillNick.jpg";
import Profile2 from "@/public/JamNick.jpg";
import Profile3 from "@/public/FoodNick.jpg";

export default function About() {
  return (
    <>
      <div className="text-white pt-28 flex gap-16 px-40" id="about">
        <div className="md:grid  grid-cols-2  [&>*]:rounded-xl [&>*]:border-solid gap-4 [&>*]:border-2 [&>*]:border-white h-0 hidden  ">
          <Image className="" src={Profile1} alt="" width={660}></Image>
          <Image className="" src={Profile3} alt="" width={660}></Image>
          <Image
            className="col-span-2"
            src={Profile2}
            alt=""
            width={660}
          ></Image>
        </div>
        <div className="flex flex-col md:px-0 px-4">
          <h1 className=" text-4xl mb-5 font-bold ">Hello World! 👋🌍</h1>
          <p>
            I&apos;m a 23-year-old currently studying for a MSc in Games
            Technology at the IT-University of Copenhagen. When I&apos;m not
            hitting the books at my study, you can find me helping others as a
            Teaching Assistant in web development or working as a barista in our
            local student-driven Café Analog. 📖🧑‍🏫☕
            <br /> <br />I have a degree in Software Development where I wrote
            my bachelor focusing on Computaional Storage, which essentaily
            improves performance by doing data operations directly where the
            data resides. 💻📅⚡
            <br /> <br />
            As a Software Developer, I&apos;ve &apos;developed&apos;{" "}
            <em>(pun intended) </em>
            strong communication and social skills which have benefitted me
            tremoundelsy in projects with developers and when communicating with
            stakeholders and product owners. I have a natural affinity for
            understanding the greater context of projects, and use that to drive
            up my enthusiasm and intrinsic motivation. I thrive in teamwork
            where I can exercise a balance of optimism and critical thinking
            while learning from my coworkers. 🧑‍🤝‍🧑💭🧑‍💻
            <br /> <br />
            As for hobbies I&apos;m heavily invested in video games and their
            technological aspects, be it the sophisticated AI used or how game
            engines are created. I like to participate in game jams where I can
            hone my creativity when coding in a team of passionate people in the
            quest of creating a mininmum viable product in the form of a
            experimental game. 👾🕹️📜
          </p>
          <div
            className={`flex p-1 px-2 mb-4 bg-white rounded-md mt-6 mr-auto `}
          >
            <a
              className="text-black m-auto font-light"
              href={"Resume.pdf"}
              rel="noopener noreferrer"
              target="_blank"
              download
            >
              My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
