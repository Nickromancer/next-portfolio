import Image from "next/image";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function About() {
  return (
    <>
      <div className="text-white md:pt-28 pt-20   h-screen" id="about">
        <div className="flex md:px-40 px-4 justify-between">
          <div className="flex flex-col md:px-0 px-4">
            <h1 className=" text-4xl mb-5 font-bold">Hello World! 👋🌍</h1>
            <div className="[&>*]:rounded-xl [&>*]:border-solid gap-4 [&>*]:border-2 [&>*]:border-white md:hidden pb-4">
              <Image
                className=""
                src="/me.jpg"
                alt=""
                width={1000}
                height={500}
                objectFit="fill"
              ></Image>
            </div>
            <div className="md:h-96 pb-4 md:pb-0 md:w-36 md:ml-8 md:hidden md:flex-col gap-4 flex justify-center w-full">
              <a href="https://github.com/Nickromancer">
                <IoLogoGithub className="size-10 hover:text-orange duration-100 ease-in-out" />
              </a>
              <a href="https://www.linkedin.com/in/nicholas-hansen-43587924b/">
                <FaLinkedin className="size-10 hover:text-orange duration-100 ease-in-out" />
              </a>
              <a href="https://www.facebook.com/NicholasHansen01">
                <FaFacebookSquare className="size-10 hover:text-orange duration-100 ease-in-out" />
              </a>
              <a href="https://www.instagram.com/nicholas.hanzen/">
                <FaInstagram className="size-10 hover:text-orange duration-100 ease-in-out" />
              </a>
            </div>
            <p className="text-sm md:w-5/6 w-full">
              I&apos;m a 23-year-old currently studying for a MSc in Games
              Technology at the IT-University of Copenhagen. When I&apos;m not
              hitting the books at my study, you can find me helping others as a
              Teaching Assistant in web development or working as a barista in
              our local student-driven Café Analog. 📖🧑‍🏫☕
              <br /> <br />I have a degree in Software Development where I wrote
              my bachelor focusing on Computaional Storage, which essentaily
              improves performance by doing data operations directly where the
              data resides. 💻📅⚡
              <br /> <br />
              As a Software Developer, I&apos;ve &apos;developed&apos;{" "}
              <em>(pun intended) </em>
              strong communication and social skills which have benefitted me
              tremoundelsy in projects with developers and when communicating
              with stakeholders and product owners. I have a natural affinity
              for understanding the greater context of projects, and use that to
              drive up my enthusiasm and intrinsic motivation. I thrive in
              teamwork where I can exercise a balance of optimism and critical
              thinking while learning from my coworkers. 🧑‍🤝‍🧑💭🧑‍💻
            </p>
          </div>
          <div className="[&>*]:rounded-xl [&>*]:border-solid gap-4 [&>*]:border-2 [&>*]:border-white md:block hidden">
            <Image
              className=""
              src="/me.jpg"
              alt=""
              width={1000}
              height={500}
              objectFit="fill"
            ></Image>
          </div>
          <div className="h-96 w-36 ml-8 md:flex flex-col gap-4 hidden">
            <a href="https://github.com/Nickromancer">
              <IoLogoGithub className="size-10 hover:text-orange duration-100 ease-in-out" />
            </a>
            <a href="https://www.linkedin.com/in/nicholas-hansen-43587924b/">
              <FaLinkedin className="size-10 hover:text-orange duration-100 ease-in-out" />
            </a>
            <a href="https://www.facebook.com/NicholasHansen01">
              <FaFacebookSquare className="size-10 hover:text-orange duration-100 ease-in-out" />
            </a>
            <a href="https://www.instagram.com/nicholas.hanzen/">
              <FaInstagram className="size-10 hover:text-orange duration-100 ease-in-out" />
            </a>
          </div>
        </div>

        <div className="pt-4 flex flex-col items-center">
          <h1 className="md:px-40 px-4 pb-8 text-3xl">Games I like to play</h1>
          <div className="carousel md:mx-40 mx-0 relative w-screen pb-4">
            <div className="group">
              <Image
                className="card"
                src={"/Silksong.jpg"}
                alt={""}
                width={300}
                height={5}
              ></Image>
              <Image
                className="card"
                src={"/33.jpg"}
                alt={""}
                width={300}
                height={500}
              ></Image>{" "}
              <Image
                className="card"
                src={"/tunic.jpg"}
                alt={""}
                width={400}
                height={5}
              ></Image>{" "}
              <Image
                className="card"
                src={"/sekiro.jpg"}
                alt={""}
                width={400}
                height={5}
              ></Image>
              <Image
                className="card"
                src={"/elden.jpg"}
                alt={""}
                width={400}
                height={5}
              ></Image>
              <Image
                className="card"
                src={"/bl4.jpg"}
                alt={""}
                width={400}
                height={5}
              ></Image>
              <Image
                className="card"
                src={"/animal.jpg"}
                alt={""}
                width={400}
                height={5}
              ></Image>
            </div>

            <div aria-hidden className="group">
              <Image
                className="card"
                src={"/Silksong.jpg"}
                alt={""}
                width={400}
                height={5}
              ></Image>
              <Image
                className="card"
                src={"/33.jpg"}
                alt={""}
                width={400}
                height={5}
              ></Image>
              <Image
                className="card"
                src={"/tunic.jpg"}
                alt={""}
                width={400}
                height={5}
              ></Image>
              <Image
                className="card"
                src={"/sekiro.jpg"}
                alt={""}
                width={400}
                height={5}
              ></Image>
              <Image
                className="card"
                src={"/elden.jpg"}
                alt={""}
                width={400}
                height={5}
              ></Image>
              <Image
                className="card"
                src={"/bl4.jpg"}
                alt={""}
                width={400}
                height={5}
              ></Image>
              <Image
                className="card"
                src={"/animal.jpg"}
                alt={""}
                width={400}
                height={5}
              ></Image>
            </div>
            <div className="absolute flex justify-between w-[100%] md:*:w-32">
              <p className="h-96 bg-gradient-to-r from-black to-transparent"></p>
              <p className="h-96 bg-gradient-to-l from-black to-transparent"></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
