import Avatar from "@/app/components/avatar";

export default function StickyNavbar() {
  return (
    <>
      <div className=" flex flex-col items-center mx-8 lg:ml-24 xl:ml-44 xl:mr-12 pt-16 gap-14 md:w-1/2 md:sticky h-max top-0 ">
        <div className="text-white">
          <h1 className="text-3xl md:text-6xl font-semibold">
            Nicholas Hansen
          </h1>
          <h2 className="text-xl md:text-3xl font-extralight mb-5 md:mb-10">
            Software Developer
          </h2>
          <h3 className=" md:text-2xl font-thin">
            MSc Game Technology Student aspiring to become a full-stack IT
            wizard & Game Developer
          </h3>
        </div>
        <div>
          <Avatar></Avatar>
        </div>
        <hr className="md:hidden text-white w-80" />
        <div className="hidden md:flex text-orange gap-5 xl:text-3xl lg:text-lg font-extralight ">
          <a
            className="hover:text-beige ease-in-out hover:-translate-y-2 hover:pb-2 duration-100"
            href="#about"
          >
            About
          </a>
          -
          <a
            className="hover:text-beige ease-in-out hover:-translate-y-2 hover:pb-2 duration-100"
            href="#skills"
          >
            Skills
          </a>
          -
          <a
            className="hover:text-beige ease-in-out hover:-translate-y-2 hover:pb-2 duration-100"
            href="#projects"
          >
            Projects
          </a>
          -
          <a
            className="hover:text-beige ease-in-out hover:-translate-y-2 hover:pb-2 duration-100"
            href="#contact"
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
}
