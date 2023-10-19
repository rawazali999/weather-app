import React from "react";
import Image from "next/image";
export const WeekForecast = ({ forecast }) => {
  return (
    <div>
      <div className="flex flex-col items-center text-gray-100  bg-sky-700 rounded-lg shadow-lg ">
        <h1 className="text-center m-2">7 DAY FORECAST</h1>
        {forecast?.forecastday.map((day) => {
          return (
            <div key={day.id} className="w-72 flex justify-between  ">
              <h2>
                {new Date(day.date).toLocaleDateString("en-US", {
                  weekday: "short",
                })}
              </h2>
              <Image
                src={`https:${day.day.condition.icon}`}
                width={50}
                height={50}
                alt="weather icon"
              />
              <h3>{day.day.avgtemp_c} °C</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};
