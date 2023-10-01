import { Drawer } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { CiSearch, CiUser } from "react-icons/ci";

import { IoMdHeartEmpty } from "react-icons/io";

const UserWidgetDrawer = (props: any) => {
  const [open, setUserOpen] = useState<boolean>(false);
  const [cartOpen, setIscartOpen] = useState<boolean>(false);

  const handleCartClose = () => {
    setIscartOpen(false);
  };
  return (
    <div>
      <Drawer
        className=""
        anchor={"right"}
        open={props.open}
        onClose={() => setUserOpen(false)}
      >
        <div className="flex h-full w-[80px] flex-col items-center space-y-4 bg-slate-900 pt-12 text-lg text-white">
          <ul className="lg:flex space-x-4 ">
            <Link href={"/"}>
              <li>
                <CiSearch className="text-2xl" />
              </li>
            </Link>
            <Link href={"/login"}>
              <li>
                <CiUser className="text-2xl" />
              </li>
            </Link>
            <Link href={"/"}>
              <li>
                <IoMdHeartEmpty className="text-2xl" />
              </li>
            </Link>
            {/* <button onClick={() => setIscartOpen(!cartOpen)}>
              <li>
                <GiShoppingCart className="text-2xl" />
              </li>
              {<Cart open={cartOpen} handleCartClose={handleCartClose} />}
            </button> */}
          </ul>
        </div>
      </Drawer>
    </div>
  );
};

export default UserWidgetDrawer;
