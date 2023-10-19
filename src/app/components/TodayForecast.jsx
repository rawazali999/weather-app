import React from "react";
import Image from "next/image";

export default function TodayForecast({ forecast }) {
  return (
    <div className="rounded-lg shadow-lg p-2 bg-sky-600 m-1 text-white">
      <h1 className="text-center text-md">TODAY&apos;S FORECAST</h1>
      <div className="scroll  m-2 h-32 w-80 flex overflow-x-auto ">
        {forecast?.forecastday[0].hour.map((day) => {
          return (
            <div
              className="flex flex-col px-4 justify-between border-r border-slate-100"
              key={day.time_epoch}
            >
              <h1 className="text-md">{day.time.slice(11, 16)}</h1>
              <Image
                src={`https:${day.condition.icon}`}
                width={60}
                height={60}
                alt="weather icon"
              />
              <h1 className="text-sm w-12 text-center">{day.temp_c} °C</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
