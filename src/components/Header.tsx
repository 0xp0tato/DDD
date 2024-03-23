"use client";

import { MenuOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import React, { useState } from "react";

const logo =
  "https://res.cloudinary.com/dqjxjr41e/image/upload/v1709042238/Dehraduna%20Dumplings/DDD%20logo.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      <main className="flex justify-between p-3 border-b border-gray-300 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] items-center sticky top-0 z-50 bg-white h-[10vh]">
        <img src={logo} className="w-14" />
        <h1 className="text-lg md:text-2xl absolute left-1/2 transform -translate-x-1/2 font-forte">
          Dehraduna Dumplings
        </h1>
        <nav className="hidden md:block">
          <ul className="flex gap-5">
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Menu</li>
          </ul>
        </nav>
        <MenuOutlined
          className="text-2xl block md:hidden"
          onClick={() => setMenuOpen(true)}
        />

        <Drawer
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          width={"50%"}
        >
          <ul className="flex flex-col gap-5 text-xl">
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Menu</li>
          </ul>
        </Drawer>
      </main>
    </>
  );
};

export default Header;
