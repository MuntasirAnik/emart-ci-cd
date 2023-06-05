import Link from "next/link";
import React, { useState } from "react";
import { CiSearch, CiUser } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";

const UserWidget = () => {
  const [cartOpen, setIscartOpen] = useState<boolean>(false);

  const handleCartClose = () => {
    setIscartOpen(false);
  };

  return (
    <div className="flex">
      <ul className="hidden lg:flex pr-2 space-x-2 py-1 place-items-center">
        <Link href={"/"}>
          <li className="relative">
            <div className="px-1">
              <input
                type="text"
                placeholder="Search"
                className={`w-60 rounded-lg border-2 text-black lg:w-60 p-2`}
              />
            </div>
            <div>
              <CiSearch className="absolute top-1/2 right-3 -translate-y-1/2 rounded-md bg-blue-400 p-0.5 h-8 w-8" />
            </div>
          </li>
        </Link>
        <Link href={"/login"}>
          <li>
            <CiUser className="text-3xl" />
          </li>
        </Link>
        <Link href={"/"}>
          <li>
            <IoMdHeartEmpty className="text-3xl" />
            <span className="px-1 cart absolute top-5 right-12 bg-red-500 rounded-full">
              0
            </span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default UserWidget;
