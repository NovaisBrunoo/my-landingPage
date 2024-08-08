"use client";
import MenuSidebar from "@/data/menuSidebar";
import Image from "next/image";
import { useState } from "react";
import arrow from "./up-arrow.svg";

export default function Sidebar() {
  const [itemSiderbar, setItemSiderbar] = useState<MenuSidebar[]>(MenuSidebar);
  const [teste2, setTeste2] = useState("hidden");

  const [teste, setTeste] = useState(false);

  function show() {
    setTeste(!teste);
  }

  return (
    <div className="w-1/4 h-full flex justify-center items-center flex-col border-r-[1px] border-gray-200">
      <div className="w-full flex flex-col text-left group cursor-pointer" onClick={show}>
        <div className="w-full flex justify-between items-center ">
          Dashborad
          <Image
            className={`${teste ? "rotate-180 ransition-all duration-500 ease-in-out" : "rotate-0 ransition-all duration-500 ease-in-out"}`}
            src={arrow}
            alt="arrow"
            width={20}
            height={20}
          />
        </div>
        <div
          className={`w-full flex flex-col justify-center gap-2 items-start overflow-hidden transition-all duration-500 ease-in-out ${teste ? 'h-24' : 'h-0'
            }`}
        >
          <a href="">Product</a>
          <a href="">Item</a>
        </div>
      </div>
    </div>
  );
}