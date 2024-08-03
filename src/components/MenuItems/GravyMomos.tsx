import { IItems } from "@/interface/items";
import React from "react";
import ItemCard from "./ItemCard";

export default function GravyMomos() {
  const items: IItems[] = [
    {
      title: "Vegetable Gravy Dumpling",
      description:
        "Savor 6 pcs of Vegetable Momos in the gravy of your choice, a veg entrée with a mix of cabbage, onion, carrot, paprika, spring onion, ginger & garlic. Perfect for dumpling lovers.",
      amount: "2590 Ft",
    },
    {
      title: "Paneer Gravy Dumpling",
      description:
        "Savor our Paneer Momos (6pcs) in gravy of your choice - a tantalizing mix of cottage cheese, cabbage, paprika, carrot, onion, ginger & garlic. A delightful dumpling treat!",
      amount: "2790 Ft",
    },
    {
      title: "Pork Gravy Dumpling",
      description:
        " Experience a burst of flavor with our Pork Gravy Momos (6 pcs), packed with pork, onion, ginger & garlic. Perfect entree delight!",
      amount: "2990 Ft",
    },
    {
      title: "Chicken Gravy Dumpling",
      description:
        "Indulge in our Chicken Gravy Momos (6 pcs) - luscious dumplings stuffed with succulent chicken, onion, spring onion, ginger & garlic.",
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
