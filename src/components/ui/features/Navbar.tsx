import Link from "next/link";
import React, { useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import UserWidget from "./UserWidget";
import NavigationMenu from "./NavigationMenu";
import NavigationMenuDrawer from "./NavigationMenuDrawer";
import EmartIcon from "./emartIcon";
import UserWidgetDrawer from "./UserWidgetDrawer";
import { GiShoppingCart } from "react-icons/gi";
import Modal from "../../Modal/Modal";

const Navbar = () => {
  const [open, setUserOpen] = useState<boolean>(false);
  const [openNavbar, setNavbarOpen] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <div className="h-20 flex md:px-6 lg:py-6 pr-8 shadow-md sticky top-0 z-40 justify-between place-items-center bg-opacity-30 backdrop-blur-md">
        <div className="px-4 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="flex-shrink-0 md:mx-0 text-center md:text-left flex">
            <EmartIcon />
            <div className="nav flex">
              <button onClick={() => setNavbarOpen(!openNavbar)}>
                <ul className="lg:hidden px-2 pr-1">
                  <Link href={""}>
                    <li>
                      <MenuIcon />
                    </li>
                  </Link>
                </ul>
                <NavigationMenuDrawer openNavbar={openNavbar} />
              </button>
            </div>
          </div>
        </div>
        <NavigationMenu />
        <div className="flex space-x-3 place-items-center">
          <div
            onClick={() => setShowModal(true)}
            className="py-1 cursor-pointer"
          >
            <GiShoppingCart className="text-3xl" />
          </div>
          <UserWidget />
          <div className="nav flex">
            <button onClick={() => setUserOpen(!open)}>
              <ul className="lg:hidden inline">
                <Link href={"/"}>
                  <li className="">
                    <MenuIcon className="" />
                  </li>
                </Link>
              </ul>
              <UserWidgetDrawer open={open} />
            </button>
          </div>
        </div>
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default Navbar;
