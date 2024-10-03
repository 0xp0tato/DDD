"use client";

import EasyPeasyMomos from "@/components/MenuItems/EasyPeasyMomos";
import FriedMomos from "@/components/MenuItems/FriedMomos";
import GravyMomos from "@/components/MenuItems/GravyMomos";
import Platters from "@/components/MenuItems/Platters";
import Sauces from "@/components/MenuItems/Sauces";
import SteamedMomos from "@/components/MenuItems/SteamedMomos";
import TabComponent from "@/components/TabComponent";
import { IItems } from "@/interface/items";
import { getAllMenuItems } from "@/lib/getAllMenuItems";
import { CATEGORIES } from "@/utils/constants";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [items, setItems] = useState<Array<IItems>>([]);

  useEffect(() => {
    async function fetchItems() {
      const res = await getAllMenuItems();
      setItems(res.data.menuItems);
    }

    fetchItems();
  }, []);

  const tabs = [
    {
      title: "Steamed Momos",
      content: (
        <SteamedMomos
          items={items.filter(
            (item) =>
              item.category === CATEGORIES["STEAMED MOMOS"] &&
              item.status === true
          )}
        />
      ),
      description:
        "Your Preferred Dumplings Are Served Steaming Hot With 8 Pcs",
      image:
        "https://res.cloudinary.com/dqjxjr41e/image/upload/v1722677785/Dehraduna%20Dumplings/r6274ghfisurmjepntwp.jpg",
    },
    {
      title: "Fried Momos",
      content: (
        <FriedMomos
          items={items.filter(
            (item) =>
              item.category === CATEGORIES["FRIED MOMOS"] &&
              item.status === true
          )}
        />
      ),
      description:
        "Our Frying Style : Pan Fried Or Deep Fried. Served With 8 Pcs",
      image:
        "https://res.cloudinary.com/dqjxjr41e/image/upload/v1722670674/Dehraduna%20Dumplings/qcwhmffdg4wdaj328788.jpg",
    },
    {
      title: "Gravy Momos",
      content: (
        <GravyMomos
          items={items.filter(
            (item) =>
              item.category === CATEGORIES["GRAVY MOMOS"] &&
              item.status === true
          )}
        />
      ),
      description:
        "Tomato Punch: Delicious tomato base gravy with aromatic herbs & spice! | DD Special: Smooth gravy made with roasted nuts and veggies; blended together to a mouthwatering curry. ",
      image:
        "https://res.cloudinary.com/dqjxjr41e/image/upload/v1722670676/Dehraduna%20Dumplings/ojpdcifwsaebkbxfzogr.png",
    },
    {
      title: "Easy Peasy Momos",
      content: (
        <EasyPeasyMomos
          items={items.filter(
            (item) =>
              item.category === CATEGORIES["EASY PEASY MOMOS"] &&
              item.status === true
          )}
        />
      ),
      description:
        "Small Portion With 4 Pcs Of Your Preferred Style : Steam, Pan Fried Or Deep Fried",
      image:
        "https://res.cloudinary.com/dqjxjr41e/image/upload/v1722678058/Dehraduna%20Dumplings/ktulelz7hmyq0ggqcnv0.jpg",
    },
    {
      title: "Platters",
      content: (
        <Platters
          items={items.filter(
            (item) =>
              item.category === CATEGORIES["PLATTERS"] && item.status === true
          )}
        />
      ),
      description: "Mix & Match",
      image:
        "https://res.cloudinary.com/dqjxjr41e/image/upload/v1722670675/Dehraduna%20Dumplings/qtfwgkgvziwmfdnzvfbc.jpg",
    },
    {
      title: "Sauces",
      content: (
        <Sauces
          items={items.filter(
            (item) =>
              item.category === CATEGORIES["SAUCES"] && item.status === true
          )}
        />
      ),
      description: "Our selection of delicious homemade sauces",
      image:
        "https://res.cloudinary.com/dqjxjr41e/image/upload/v1722677784/Dehraduna%20Dumplings/mdn8arjlkbrg5l8rxv63.jpg",
    },
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
