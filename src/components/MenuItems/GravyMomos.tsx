import { IItems } from "@/interface/items";
import React from "react";
import ItemCard from "./ItemCard";

export default function GravyMomos() {
  const items: IItems[] = [
    {
      title: "Vegetable Gravy Dumpling",
      description:
        "A delightful combination of fresh vegetables enclosed in a tender steamed wrapper.",
      amount: "2590 Ft",
    },
    {
      title: "Paneer Gravy Dumpling",
      description:
        "A delightful combination of fresh vegetables enclosed in a tender steamed wrapper.",
      amount: "2790 Ft",
    },
    {
      title: "Pork Gravy Dumpling",
      description:
        "A delightful combination of fresh vegetables enclosed in a tender steamed wrapper.",
      amount: "2990 Ft",
    },
    {
      title: "Chicken Gravy Dumpling",
      description:
        "A delightful combination of fresh vegetables enclosed in a tender steamed wrapper.",
      amount: "2990 Ft",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {items?.map((item: IItems, index) => (
        <div
          key={index}
          className="flex flex-col rounded-lg p-3 shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:-translate-y-[5px] hover:[transition:transform_0.3s_ease] hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)]"
        >
          <ItemCard item={item} />
        </div>
      ))}
    </div>
  );
}
