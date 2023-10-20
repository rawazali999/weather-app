import React from "react";
import Image from "next/image";

export const NowCard = ({ location, weather }) => {
  if (location && weather) {
    return (
      <div className=" text-white h-auto  flex justify-around items-start">
        <div className="space-y-2 flex flex-col ">
          <h1 className="text-3xl">{location.name} </h1>
          <p className="text-md">{location.country}</p>
          <p className="text-md ">{location.localtime}</p>
          <p className="text-2xl">{weather.temp_c} °C</p>
        </div>
        <div className="flex flex-col ">
          <Image
            src={`https:${weather.condition.icon}`}
            alt="weather icon"
            width={150}
            height={150}
          />
        </div>
      </div>
    );
  }
};
