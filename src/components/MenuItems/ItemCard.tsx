import React from "react";

export default function ItemCard(props: any) {
  const { title, description, amount } = props.item;
  return (
    <>
      <section className="text-center text-xl font-semibold mb-2">
        {title}
      </section>
      <section className="text-center text-md">{description}</section>
      <section className="text-center text-lg mt-auto">{amount}</section>
    </>
  );
}
