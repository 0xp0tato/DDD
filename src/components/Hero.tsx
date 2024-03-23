"use client";

import { Carousel } from "antd";
import React from "react";

const heroImages = [
  "https://res.cloudinary.com/dqjxjr41e/image/upload/v1705331355/Dehraduna%20Dumplings/fadouuo7aw6rrly9f2kj.jpg",
  "https://res.cloudinary.com/dqjxjr41e/image/upload/v1705331355/Dehraduna%20Dumplings/sh5jx72kejtesmevy7rq.jpg",
  "https://res.cloudinary.com/dqjxjr41e/image/upload/v1705331351/Dehraduna%20Dumplings/xqgr2wucpnfbv0rwhwmh.jpg",
];

const Hero = () => {
  return (
    <>
      <div className="absolute top-[40%] left-5 md:left-20 z-10 text-white md:text-4xl text-2xl">
        <h1 className="font-forte">Dehraduna Dumplings</h1>
        <h1>Taste the filling. Share the feeling</h1>
      </div>
      <Carousel autoplay dots={false} infinite className="z-0">
        {heroImages.map((imageSrc: string, idx: number) => (
          <div className="h-[90vh]" key={idx}>
            <img
              src={imageSrc}
              alt="carousel image"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Hero;
