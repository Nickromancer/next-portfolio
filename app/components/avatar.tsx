import Image from "next/image";
import Profile from "@/public/Profile-removebg-preview.png";

export default function Avatar() {
  return (
    <>
      <div className="bg-orange rounded-full inline-block overflow-auto">
        <Image
          src={Profile}
          alt=""
          width={350}
          height={350}
          className=" rounded-full drop-shadow-profile"
        ></Image>
      </div>
    </>
  );
}
