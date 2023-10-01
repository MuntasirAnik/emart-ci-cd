import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

import { IoMdHeartEmpty } from "react-icons/io";
import Search from "../../search/search";
import User from "./user/user";

const UserWidget = () => {
  const [cartOpen, setIscartOpen] = useState<boolean>(false);

  const handleCartClose = () => {
    setIscartOpen(false);
  };

  return (
    <div className="flex">
      <ul className="hidden lg:flex pr-2 space-x-2 py-1 place-items-center">
        <Link href={"/"}>
          <Search />
        </Link>
        <li>
          <User />
        </li>
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
