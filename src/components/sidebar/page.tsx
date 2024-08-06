"use client";
import MenuSidebar from "@/data/menuSidebar";
import { useState } from "react";

export default function Sidebar() {
    const [itemSiderbar, setItemSiderbar] = useState<MenuSidebar[]>(MenuSidebar);
    return (
        <div className="w-1/4 h-full flex justify-center items-center flex-col border-r-[1px] border-gray-200">
            {itemSiderbar.map((item) => (
                <div key={item.id} className="w-full h-12 flex items-center justify-center">
                    <p>{item.title}</p>
                </div>
            ))}
        </div>
    )
}