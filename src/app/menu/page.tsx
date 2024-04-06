import EasyPeasyMomos from "@/components/MenuItems/EasyPeasyMomos";
import FriedMomos from "@/components/MenuItems/FriedMomos";
import GravyMomos from "@/components/MenuItems/GravyMomos";
import Platters from "@/components/MenuItems/Platters";
import SteamedMomos from "@/components/MenuItems/SteamedMomos";
import TabComponent from "@/components/TabComponent";
import React from "react";

export default function page() {
  const tabs = [
    { title: "Steamed Momos", content: <SteamedMomos /> },
    { title: "Fried Momos", content: <FriedMomos /> },
    { title: "Gravy Momos", content: <GravyMomos /> },
    { title: "Easy Peasy Momos", content: <EasyPeasyMomos /> },
    { title: "Platters", content: <Platters /> },
  ];

  return (
    <main className="py-8">
      <div className="lg:max-w-[1440px] m-auto">
        <h1 className="text-center text-4xl mb-5">Our Menu</h1>
        <TabComponent tabs={tabs} />
      </div>
    </main>
  );
}
