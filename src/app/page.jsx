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
        `${process.env.BASE_URL}/forecast.json?key=${process.env.API_KEY}&q=${search}&days=7&aqi=no&alerts=no`
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
      }  w-screen h-full md:h-screen  grid place-content-center py-8
      `}
    >
      <div className="space-y-4  flex flex-col items-center  ">
        <input
          className="w-2/3  rounded-md p-2 border-2 outline-sky-900"
          placeholder="Search for a city"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
        <section
          className={`rounded-xl  shadow-2xl p-2 grid grid-cols-1 sm:grid-cols-2 ${
            isDay == true
              ? "from-sky-200 to-sky-400"
              : " from-blue-800 to-sky-900 "
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
