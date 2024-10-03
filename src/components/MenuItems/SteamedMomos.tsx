import React from "react";
import ItemCard from "./ItemCard";
import { IItems } from "@/interface/items";

export default function SteamedMomos(props: Record<string, any>) {
  const { items } = props;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {items?.map((item: IItems) => (
        <div key={item._id}>
          <ItemCard item={item} />
        </div>
      ))}
    </div>
  );
}
