import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const fbLink = "https://www.facebook.com/DehraDunaDumplings";
  const twitterLink = "https://twitter.com/DehraDunaDumplings";
  const instaLink = "https://www.instagram.com/DehraDunaDumplings";

  return (
    <main className="flex flex-col items-center py-8 bg-primary-color text-white">
      <h2 className="text-2xl mb-5 font-semibold">Connect With Us</h2>
      <div className="flex gap-10">
        <Link href={fbLink}>
          <FacebookOutlined className="text-4xl hover:text-black" />
        </Link>
        <Link href={twitterLink}>
          <TwitterOutlined className="text-4xl hover:text-black" />
        </Link>
        <Link href={instaLink}>
          <InstagramOutlined className="text-4xl hover:text-black" />
        </Link>
      </div>
    </main>
  );
}
