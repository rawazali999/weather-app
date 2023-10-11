"use client";
import { useEffect } from "react";
import { useState } from "react";
import { NowCard } from "./components/NowCard";
import { Root } from "../../Types";

export default function Home() {
  const [currentData, setCurrentData] = useState<Root>();
  const [search, setSearch] = useState("Hawler");

  useEffect(() => {
    // fetch currentData
    const fetchCurrent = async () => {
      const res = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=d7bade734fc54553a8d10658230810&q=${search}`
      );
      const currentData: Root = await res.json();
      setCurrentData(currentData);
    };
    fetchCurrent();
  }, [search]);

  console.log(currentData);
  return (
    <main className="bg-gradient-to-b from-sky-400 to-sky-200 w-screen bg-contain h-screen grid place-content-center">
      <section className=" rounded-lg shadow-lg w-[450px] p-4 bg-sky-500  flex flex-col">
        <input
          className="w-full rounded-md p-2 border-sky-400 focus:outline-sky-400"
          placeholder="Search for a city"
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
        />

        <NowCard {...currentData} />
      </section>
    </main>
  );
}
