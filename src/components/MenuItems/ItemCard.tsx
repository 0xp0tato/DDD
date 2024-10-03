import { IItems } from "@/interface/items";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import Image from "next/image";
import React from "react";

export default function ItemCard({
  item,
  editable = false,
  setInitialValues,
  setIsModalOpen,
  setFlags,
  flags,
}: any) {
  const { title, description, amount, category, _id, status } = item;

  async function handleEdit() {
    setFlags({ ...flags, editItemFlag: true });
    setInitialValues({ category, title, description, amount, _id, status });
    setIsModalOpen(true);
  }

  return (
    <div className="h-44 overflow-hidden relative flex flex-col rounded-lg p-3 shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:-translate-y-[5px] hover:[transition:transform_0.3s_ease] hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)]">
      <section
        className={`text-center text-xl lg:text-2xl font-semibold mb-2 ${
          !status && "text-gray-500"
        }`}
      >
        {title}
      </section>
      <section
        className={`text-center text-lg lg:text-xl ${
          !status && "text-gray-500"
        }`}
      >
        {description}
      </section>
      <section
        className={`text-center text-lg mt-auto font-semibold ${
          !status && "text-gray-500"
        }`}
      >
        {amount}
      </section>
      {editable && (
        <EditOutlined
          onClick={handleEdit}
          className={`absolute right-2 ${!status && "text-gray-500"}`}
        />
      )}
    </div>
  );
}
