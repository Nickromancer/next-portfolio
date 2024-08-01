"use client";

import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

export default function Card(props: {
  path: string;
  title: string;
  description: string;
  tags: string[];
}) {
  const Picture = require("@/public/" + props.path);
  return (
    <>
      <div className="group relative overflow-hidden w-[45%] ">
        <Image
          src={Picture}
          alt=""
          style={{ height: "300px", width: "auto", objectFit: "cover" }}
          className="rounded-2xl"
        ></Image>
        <div className="ease-in-out duration-300 bg-beige absolute bottom-0 rounded-b-xl w-full group-hover:h-3/4 h-0 flex">
          <div className="p-4 text-white">
            <p className=" text-black font-bold text-lg">{props.title}</p>
            <p className=" text-black font-light pb-2 text-sm ">
              {props.description}
            </p>
            <div className="flex flex-wrap gap-1 text-sm">
              {props.tags.map((tag) => {
                return (
                  <div key={uuidv4()} className=" bg-black rounded-md px-2 ">
                    <p key={uuidv4()}>{tag}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
