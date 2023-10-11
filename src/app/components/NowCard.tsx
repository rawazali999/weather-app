import React from "react";
import Image from "next/image";
import { Root } from "../../../Types";

export const NowCard = (current: any) => {
  return (
    <div className=" text-white w-full p-4 flex justify-between items-center">
      <div>
        <h1 className="text-4xl">{current && current?.location?.name}</h1>
        <p className="text-md">{current && current?.location?.country}</p>
        <p className="text-3xl mt-4">{current && current?.current?.temp_c}°c</p>
      </div>
      <div className="flex flex-col items-center">
        <img
          src={`${current && current?.current?.condition?.icon}`}
          alt="weather icon"
          width={100}
          height={100}
        />
        <span className="text-md">
          {current && current?.current?.condition?.text}
        </span>
      </div>
    </div>
  );
};
