import { IItems } from "@/interface/items";
import React from "react";
import ItemCard from "./ItemCard";

export default function Platters() {
  const items: IItems[] = [
    {
      title: "Vegan Delight",
      description:
        "4 steam ed,4 pan fried,4 deep fried vegetable dum plings (4 gőzölt, 4 serpenyőben sült, 4 olajban sült zöldséges gom bóc)",
      amount: "1390 Ft",
    },
    {
      title: "Paneer Paradise",
      description:
        "4 steam ed,4 pan fried,4 deep fried (4 gőzölt,4 serpenyőben sült, 4 olajban sült)",
      amount: "1490 Ft",
    },
    {
      title: "Meat Lover Chicken",
      description:
        "4 steam ed,4 pan fried,4 deep fried (4 gőzölt,4 serpenyőben sült, 4 olajban sült)",
      amount: "1590 Ft",
    },
    {
      title: "Meat Lover Pork",
      description:
        "4 steam ed,4 pan fried,4 deep fried (4 gőzölt,4 serpenyőben sült, 4 olajban sült)",
      amount: "1590 Ft",
    },
    {
      title: "Steamed Platter",
      description:
        "3 pcs each ofveg,paneer,chicken & pork (3 darab zöldséges,paneer,csirkés és sertés -az elkészítésim ódotkedved szerintválaszthatod!)",
      amount: "1590 Ft",
    },
    {
      title: "Fried Platter",
      description:
        "3 pcs each ofveg,paneer,chicken & pork (3 darab zöldséges,paneer,csirkés és sertés -az elkészítésim ódotkedved szerintválaszthatod!)",
      amount: "1590 Ft",
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
