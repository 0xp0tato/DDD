import { IItems } from "@/interface/items";
import React from "react";
import ItemCard from "./ItemCard";

export default function Platters() {
  const items: IItems[] = [
    {
      title: "Vegan Delight",
      description:
        " Assorted 12-piece veggie dumpling platter - 4 steamed, 4 pan-fried & 4 deep-fried. Ideal for vegan diets!",
      amount: "3290 Ft",
    },
    {
      title: "Paneer Paradise",
      description:
        " A 12-piece platter featuring a trio of dumplings – 4 steamed, 4 pan-fried, 4 deep-fried. A cheese lover's delight!",
      amount: "3490 Ft",
    },
    {
      title: "Meat Lover Chicken",
      description: `Savor our Meat Lover Chicken dumpling platter: 4 steamed, 4 pan-fried, & 4 deep-fried pieces. A hearty treat for dumpling enthusiasts!`,
      amount: "3790 Ft",
    },
    {
      title: "Meat Lover Pork",
      description:
        "Feast on our Meat Lover's Dumpling Platter! 12 juicy pork dumplings, offered steamed, pan-fried & deep-fried. Perfect for sharing!",
      amount: "3790 Ft",
    },
    {
      title: "Steamed Platter",
      description:
        "An assortment of 12 steamed dumplings, with serving 3 of each: veg, paneer, chicken, and pork or of your choice ! A delightful mix for your taste buds!",
      amount: "3590 Ft",
    },
    {
      title: "Fried Platter",
      description:
        "Indulge in our Fried Platter of 12 assorted dumplings - veggie, paneer, chicken, & pork (3 each). Whether it be pan fried or deep fried, whatever you like!",
      amount: "3890 Ft",
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
