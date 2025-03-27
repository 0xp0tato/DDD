import React from "react";
import ItemCard from "./ItemCard";
import { IItems } from "@/interface/items";

export default function SteamedMomos() {
  const items: IItems[] = [
    {
      title: "Vegetable Steamed Dumpling",
      description:
        "Relish 8pcs of Veg Steamed Momos, packed with a vibrant mix of cabbage, carrot, onion, paprika, ginger, garlic & spring onion.",
      amount: "2190 Ft",
    },
    {
      title: "Paneer Steamed Dumpling",
      description:
        "Savor 8 pcs of Steamed Paneer Momos, packed with cottage cheese, cabbage, paprika, carrot, onion, ginger, and garlic. A delightful bite!",
      amount: "2390 Ft",
    },
    {
      title: "Pork Steamed Dumpling",
      description:
        "Relish 8 delectable Pork Momos, steamed to perfection with a hearty filling of pork, onion, ginger, and garlic.",
      amount: "2590 Ft",
    },
    {
      title: "Chicken Steamed Dumpling",
      description:
        "Juicy chicken, onion, spring onions, ginger & garlic, wrapped in a soft dumpling shell.",
      amount: "2590 Ft",
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
