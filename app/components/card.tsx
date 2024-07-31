import Image from "next/image";

export default function Card(props: { path: string }) {
  return (
    <>
      <div className=" rounded-2xl group relative overflow-hidden ">
        <Image
          src={require("@/public/Profile.jpg")}
          alt=""
          width={0}
          height={300}
          className=" rounded-2xl"
        ></Image>
        <div className="ease-in-out duration-300 bg-beige absolute bottom-0 rounded-b-xl w-full group-hover:h-1/2 h-0 flex">
          <div className="p-5 text-black">
            <p>Project Name</p>
            <p>Description</p>
            <div className="flex">
              <div className=" bg-orange rounded-md px-2">
                <p>React</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
