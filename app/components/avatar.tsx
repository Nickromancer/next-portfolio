import Image from "next/image";
import Profile from "@/public/Profile-removebg-preview.png";
import Link from "next/link";

export default function Avatar(props: { collapsed: boolean }) {
  return (
    <>
      <div className="bg-white rounded-full overflow-auto border-solid border-2 border-orange sm:hidden block">
        <Link href={"/"}></Link>
        <Image
          src={Profile}
          alt=""
          width={props.collapsed ? 75 : 500}
          height={props.collapsed ? 75 : 500}
          className={`ease-in-out duration-300 rounded-full drop-shadow-profile w-${
            props.collapsed ? "5" : "40"
          }`}
        ></Image>
      </div>
    </>
  );
}
