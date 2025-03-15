import Image from "next/image";
import Profile from "@/public/Profile-removebg-preview.png";

export default function Avatar(props: { collapsed: boolean }) {
  return (
    <>
      <div className="bg-white rounded-full overflow-auto border-solid border-2 border-orange hidden md:inline-block">
        <a href="/">
          <Image
            src={Profile}
            alt=""
            width={500}
            height={500}
            className={`ease-in-out duration-300 rounded-full drop-shadow-profile w-${
              props.collapsed ? "5" : "40"
            }`}
          ></Image>
        </a>
      </div>
    </>
  );
}
