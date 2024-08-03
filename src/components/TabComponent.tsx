"use client";

import { Card, Divider } from "antd";
import { useState } from "react";

interface Tab {
  image: string;
  title: string;
  content: React.ReactNode;
  description: string;
}

interface TabComponentProps {
  tabs: Tab[];
}

const TabComponent: React.FC<TabComponentProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="max-w-[1440px] mx-auto flex flex-col justify-center px-4">
      <div className="flex justify-center gap-4 flex-wrap mb-5">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`cursor-pointer py-2 border-b-2 hover:text-primary-color md:text-xl lg:text-2xl ${
              activeTab === index
                ? "border-primary-color text-primary-color"
                : "border-transparent"
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <Card>
        <span className="block text-center text-primary-color text-3xl font-semibold mb-2">
          {tabs[activeTab].title}
        </span>
        <p className="text-xs text-center font-semibold">
          {tabs[activeTab].description}
        </p>
        <Divider className="bg-primary-color h-1" />
        <div className="max-w-2xl h-90 m-auto mb-5">
          <img
            className="w-full h-full object-cover"
            src={tabs[activeTab].image}
          />
        </div>
        {tabs[activeTab].content}
      </Card>
    </div>
  );
};

export default TabComponent;
