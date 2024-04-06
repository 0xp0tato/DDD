import React from "react";

export default function ItemCard(props: any) {
  const { title, description, amount } = props.item;
  return (
    <>
      <section className="text-center text-xl lg:text-2xl font-semibold mb-2">
        {title}
      </section>
      <section className="text-center text-lg lg:text-xl">
        {description}
      </section>
      <section className="text-center text-lg mt-auto font-semibold">
        {amount}
      </section>
    </>
  );
}
