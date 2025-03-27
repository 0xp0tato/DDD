import { IItems } from "@/interface/items";
import React from "react";
import ItemCard from "./ItemCard";

export default function Sauces() {
  const items: IItems[] = [
    {
      title: "Indian Fire",
      description:
        "A spicy mix of red chillies, onions, ginger, garlic & tomatoes, balanced with coriander & herbs. Ideal for dipping.",
      amount: "250 Ft",
    },
    {
      title: "Herbal Queen",
      description:
        "A zesty medley of cucumber, coriander, celery, paprika & carrots, harmoniously bathed in premium edible oil.",
      amount: "250 Ft",
    },
    {
      title: "Magic Mayo",
      description:
        "A fun fusion of traditional mayo, zesty lime, aromatic herbs & garlic. Ideal for dips & sauces!",
      amount: "250 Ft",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 grid-auto-flow: dense">
      {items?.map((item: IItems, index) => (
        <div
          key={index}
          className={`flex flex-col rounded-lg p-3 shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:-translate-y-[5px] hover:[transition:transform_0.3s_ease] hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)] ${
            items.length % 2 !== 0 && index === items.length - 1
              ? "md:col-span-2 md:justify-self-center"
              : ""
          }`}
        >
          <ItemCard item={item} />
        </div>
      ))}
    </div>
  );
}
