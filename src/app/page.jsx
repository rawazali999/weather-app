"use client";
import { useEffect } from "react";
import { useState } from "react";
import { NowCard } from "./components/NowCard";
import { WeekForecast } from "./components/WeekForecast";
import TodayForecast from "./components/TodayForecast";

export default function Home() {
  const [data, setData] = useState({});
  const [search, setSearch] = useState("Hawler");
  const [isDay, setIsDay] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=d7bade734fc54553a8d10658230810&q=${search}&days=7&aqi=no&alerts=no`
      );
      const data = await res.json();
      setData(data);
      data?.current?.is_day == 1 ? setIsDay(true) : setIsDay(false);
    };
    fetchData();
  }, [search]);

  return (
    <main
      className={`bg-gradient-to-b ${
        isDay == true ? "from-sky-400 to-sky-200" : " from-blue-900 to-sky-900 "
      }  w-screen h-full md:h-screen  flex justify-center items-center py-8
      `}
    >
      <div className="space-y-4">
        <input
          className="w-full mx-auto  rounded-md p-2 border-sky-400 focus:outline-sky-400"
          placeholder="Search for a city"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
        <section
          className={`rounded-lg shadow-2xl p-4 grid grid-cols-1 sm:grid-cols-2 ${
            isDay == true
              ? "from-sky-200 to-sky-400"
              : " from-blue-900 to-sky-900 "
          } `}
        >
          <div className="flex flex-col justify-between ">
            <NowCard location={data.location} weather={data.current} />
            <TodayForecast forecast={data.forecast} />
          </div>
          <WeekForecast forecast={data.forecast} />
        </section>
      </div>
    </main>
  );
}
