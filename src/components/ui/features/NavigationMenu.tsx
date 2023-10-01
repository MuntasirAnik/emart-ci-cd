import Link from "next/link";
import React from "react";

const NavigationMenu = () => {
  return (
    <div className="flex">
      <ul className="hidden lg:flex space-x-4">
        <Link href={"/mobile"}>
          <li className="hover:bg-gray-300 p-2 rounded">Mobile</li>
        </Link>
        <Link href={"/laptop"}>
          <li className="hover:bg-gray-300 p-2 rounded">Laptop</li>
        </Link>
        <Link href={"/accessories"}>
          <li className="hover:bg-gray-300 p-2 rounded">Accessories</li>
        </Link>
        <Link href={"/camera"}>
          <li className="hover:bg-gray-300 p-2 rounded">Camera/Gimbal</li>
        </Link>
        <Link href={"/offer"}>
          <li className="hover:bg-gray-300 p-2 rounded">Offer</li>
        </Link>
        <Link href={"/about"}>
          <li className="hover:bg-gray-300 p-2 rounded">About Us</li>
        </Link>
        <Link href={"/contact"}>
          <li className="hover:bg-gray-300 p-2 rounded">Contact Us</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavigationMenu;
