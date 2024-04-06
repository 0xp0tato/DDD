import { IItems } from "@/interface/items";
import React from "react";
import ItemCard from "./ItemCard";

export default function EasyPeasyMomos() {
  const items: IItems[] = [
    {
      title: "Vegetable Easy Peasy Dumpling",
      description:
        "A delightful combination of fresh vegetables enclosed in a tender steamed wrapper.",
      amount: "1390 Ft",
    },
    {
      title: "Paneer Easy Peasy Dumpling",
      description:
        "A delightful combination of fresh vegetables enclosed in a tender steamed wrapper.",
      amount: "1490 Ft",
    },
    {
      title: "Pork Easy Peasy Dumpling",
      description:
        "A delightful combination of fresh vegetables enclosed in a tender steamed wrapper.",
      amount: "1590 Ft",
    },
    {
      title: "Chicken Easy Peasy Dumpling",
      description:
        "A delightful combination of fresh vegetables enclosed in a tender steamed wrapper.",
      amount: "1590 Ft",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {items?.map((item: IItems) => (
        <div className="flex flex-col rounded-lg p-3 shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:-translate-y-[5px] hover:[transition:transform_0.3s_ease] hover:0_6px_12px_rgba(0,0,0,0.15)">
          <ItemCard item={item} />
        </div>
      ))}
    </div>
  );
}
