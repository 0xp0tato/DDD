import { IItems } from "@/interface/items";
import React from "react";
import ItemCard from "./ItemCard";

export default function FriedMomos() {
  const items: IItems[] = [
    {
      title: "Vegetable Fried Dumpling",
      description:
        "Relish 8 fried veg momos filled with a rich blend of cabbage, onion, carrot, paprika, spring onions, ginger, and garlic.",
      amount: "2490 Ft",
    },
    {
      title: "Paneer Fried Dumpling",
      description:
        "Crispy paneer momos (8pcs), filled with cottage cheese, cabbage, carrot, paprika, onion, ginger & garlic. A savory dumpling delight!",
      amount: "2690 Ft",
    },
    {
      title: "Pork Fried Dumpling",
      description:
        "Indulge in 8 pcs of our Pork fried momos, a dumpling dream filled with succulent pork, onion, spring onion, ginger, and garlic.",
      amount: "2890 Ft",
    },
    {
      title: "Chicken Fried Dumpling",
      description:
        "Indulge in our 8pc Chicken fried momos, a dumpling entrée packed with onion, spring onion, ginger, and garlic. A true delight!",
      amount: "2890 Ft",
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
