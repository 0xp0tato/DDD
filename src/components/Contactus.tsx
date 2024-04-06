import Link from "next/link";
import React from "react";

export default function Contactus() {
  const mapLocation = (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.401330224941!2d19.067768576788048!3d47.50157489522344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dd1a867e6acd%3A0xd694c2d02e75dbb4!2sDehraduna%20Dumplings!5e0!3m2!1sen!2sin!4v1711880026393!5m2!1sen!2sin"
      width="100%"
      height="300"
      loading="lazy"
    ></iframe>
  );

  const phoneSVG = (
    <svg
      width="64px"
      height="64px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"
          fill="#ff6700"
        ></path>{" "}
      </g>
    </svg>
  );

  const locationSVG = (
    <svg
      version="1.0"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="64px"
      height="64px"
      viewBox="0 0 64 64"
      enable-background="new 0 0 64 64"
      xmlSpace="preserve"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          fill="#ff6700"
          d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
        ></path>{" "}
      </g>
    </svg>
  );

  const woltIcon = (
    <img
      src="https://asset.brandfetch.io/idrMInkLiX/idfvhQBfVU.svg"
      width="70"
      height="70"
    />
  );

  return (
    <main id="contact" className="lg:max-w-[1140px] m-auto py-8 px-8">
      <h1 className="text-center text-4xl mb-8 font-semibold">Order Now</h1>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {mapLocation}
        <section className="flex flex-col gap-8 lg:order-first justify-center">
          <div className="flex flex-col md:flex-row items-center md:justify-center lg:justify-normal gap-2 md:gap-5">
            {phoneSVG}
            <div className="md:flex">
              <p className="text-lg md:text-xl flex-grow font-semibold">
                +36206626976, +36308998460
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:justify-center lg:justify-normal gap-2 md:gap-5">
            {locationSVG}
            <div className="md:flex">
              <p className="text-lg md:text-xl font-semibold">
                1077 Budapest, Wesselényi utca 54
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:justify-center lg:justify-normal gap-2 md:gap-5">
            {woltIcon}
            <Link
              className="text-xl hover:text-primary-color font-semibold"
              href={
                "https://wolt.com/en/hun/budapest/restaurant/dehraduna-dumplings"
              }
            >
              <p className="text-lg md:text-xl font-semibold">Order Now</p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
