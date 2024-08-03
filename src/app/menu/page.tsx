import EasyPeasyMomos from "@/components/MenuItems/EasyPeasyMomos";
import FriedMomos from "@/components/MenuItems/FriedMomos";
import GravyMomos from "@/components/MenuItems/GravyMomos";
import Platters from "@/components/MenuItems/Platters";
import Sauces from "@/components/MenuItems/Sauces";
import SteamedMomos from "@/components/MenuItems/SteamedMomos";
import TabComponent from "@/components/TabComponent";
import React from "react";

export default function page() {
  const tabs = [
    {
      title: "Steamed Momos",
      content: <SteamedMomos />,
      description:
        "Your Preferred Dumplings Are Served Steaming Hot With 8 Pcs",
      image:
        "https://res.cloudinary.com/dqjxjr41e/image/upload/v1722677785/Dehraduna%20Dumplings/r6274ghfisurmjepntwp.jpg",
    },
    {
      title: "Fried Momos",
      content: <FriedMomos />,
      description:
        "Our Frying Style : Pan Fried Or Deep Fried. Served With 8 Pcs",
      image:
        "https://res.cloudinary.com/dqjxjr41e/image/upload/v1722670674/Dehraduna%20Dumplings/qcwhmffdg4wdaj328788.jpg",
    },
    {
      title: "Gravy Momos",
      content: <GravyMomos />,
      description:
        "Tomato Punch: Delicious tomato base gravy with aromatic herbs & spice! | DD Special: Smooth gravy made with roasted nuts and veggies; blended together to a mouthwatering curry. ",
      image:
        "https://res.cloudinary.com/dqjxjr41e/image/upload/v1722670676/Dehraduna%20Dumplings/ojpdcifwsaebkbxfzogr.png",
    },
    {
      title: "Easy Peasy Momos",
      content: <EasyPeasyMomos />,
      description:
        "Small Portion With 4 Pcs Of Your Preferred Style : Steam, Pan Fried Or Deep Fried",
      image:
        "https://res.cloudinary.com/dqjxjr41e/image/upload/v1722678058/Dehraduna%20Dumplings/ktulelz7hmyq0ggqcnv0.jpg",
    },
    {
      title: "Platters",
      content: <Platters />,
      description: "Mix & Match",
      image:
        "https://res.cloudinary.com/dqjxjr41e/image/upload/v1722670675/Dehraduna%20Dumplings/qtfwgkgvziwmfdnzvfbc.jpg",
    },
    {
      title: "Sauces",
      content: <Sauces />,
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
