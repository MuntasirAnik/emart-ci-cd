import { Drawer } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

const NavigationMenuDrawer = (props: any) => {
  const [openNavbar, setNavbarOpen] = useState<boolean>(false);
  

  return (
    <div>
      <Drawer
        className=""
        anchor={"left"}
        open={props.openNavbar}
        onClose={() => setNavbarOpen(false)}
      >
        <div className="flex h-full bg-slate-900  space-y-4 pt-12 text-lg text-white">
          <ul className="lg:flex py-2 space-x-4 p-4">
            <Link href={"/"}>
              <li >Home</li>
            </Link>
            <Link href={"/mobile"}>
              <li>Mobile</li>
            </Link>
            <Link href={"/laptop"}>
              <li>Laptop</li>
            </Link>
            <Link href={"/accessories"}>
              <li>Accessories</li>
            </Link>
            <Link href={"/camera"}>
              <li>Camera/Gimbal</li>
            </Link>
            <Link href={"/offer"}>
              <li>Offer</li>
            </Link>
            <Link href={"/about"}>
              <li>About Us</li>
            </Link>
          </ul>
        </div>
      </Drawer>
    </div>
  );
};

export default NavigationMenuDrawer;
