import { IItems } from "@/interface/items";
import React from "react";
import ItemCard from "./ItemCard";

export default function EasyPeasyMomos() {
  const items: IItems[] = [
    {
      title: "Vegetable Easy Peasy Dumpling",
      description:
        "Savor our Veg Easy Peasy dumplings (4 pcs), a delightful mix of cabbage, onion, carrot, paprika, spring onion, ginger, and garlic. Perfect for starters!",
      amount: "1590 Ft",
    },
    {
      title: "Paneer Easy Peasy Dumpling",
      description:
        "Enjoy 4 pcs of our Paneer Dumplings, filled with cottage cheese, cabbage, paprika, carrot, onion, ginger & garlic. A savory delight!",
      amount: "1690 Ft",
    },
    {
      title: "Pork Easy Peasy Dumpling",
      description:
        "Indulge in Pork Easy Peasy Dumplings (4 pcs). Bursting with pork, onion, spring onion, ginger & garlic. The ideal dumpling delight!",
      amount: "1790 Ft",
    },
    {
      title: "Chicken Easy Peasy Dumpling",
      description:
        'Enjoy the flavorful "Chicken Easy Peasy" dumplings (4 pcs) packed with tender chicken, onion, spring onion, garlic, and a hint of ginger.',
      amount: "1790 Ft",
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
