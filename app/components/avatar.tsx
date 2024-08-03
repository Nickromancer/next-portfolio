import Image from "next/image";
import Profile from "@/public/Profile-removebg-preview.png";

export default function Avatar() {
  return (
    <>
      <div className="bg-orange rounded-full inline-block overflow-auto border-solid border-2 border-orange">
        <Image
          src={Profile}
          alt=""
          width={0}
          height={0}
          className=" rounded-full drop-shadow-profile w-64 lg:w-80"
        ></Image>
      </div>
    </>
  );
}
