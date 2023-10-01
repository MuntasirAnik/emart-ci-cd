import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerList } from "@/packages/ui/components/animation/staggerList";
import UserOption from "./userOption";
import { UpTriangle } from "@/packages/ui/components/elements/uptriangle";
import Link from "next/link";

const User = () => {
  const [activeHover, setActiveHover] = useState(false);
  const { data: session } = useSession();

  const handleSignUp = () => {
    if (session?.user) {
      signOut();
    } else {
      signIn();
    }
  };

  return (
    <div
      onMouseMove={() => setActiveHover(true)}
      onMouseLeave={() => setActiveHover(false)}
      className="group inline-block"
    >
      <button
        disabled
        type="button"
        className="flex items-center justify-center px-1"
        id="user-button"
      >
        {session?.user ? (
          <>
            {session?.user.image && session.user.image !== "null" ? (
              <Image
                src={session?.user.image}
                alt="Profile-picture"
                width={32}
                height={32}
                className="mx-2 cursor-pointer rounded-full border-red-500 object-contain"
              />
            ) : (
              <div className=" cursor-pointer rounded-full border border-green-700 bg-orange-600 hover:bg-orange-800">
                <p className="mx-2 text-xl text-white">
                  {" "}
                  {session?.user?.name?.slice(0, 1)}
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="border-2 rounded-full p-1 border-cyan-900 my-1">
            <CiUser className="text-2xl" />
          </div>
        )}
      </button>
      <div className="absolute hidden rounded-lg mt-1 group-hover:block w-24 bg-black">
        <UpTriangle size={0.1} leftPosition={1} />
        <motion.ul
          animate={activeHover ? "visible" : ""}
          initial="hidden"
          variants={staggerList}
          className="rounded border border-slate-400 px-0.5 py-2 text-sm text-white"
          aria-labelledby="dropdownDefaultButton"
        >
          {session?.user ? (
            <UserOption item={"Options"} />
          ) : (
            <UserOption item={"Sign up"} />
          )}
          {/* <Link
            href="#"
            className="m-1 block rounded px-2 py-2 hover:bg-green-600 dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => handleSignUp()}
          >
            {session?.user ? "Sign Out" : "Sign In"}
          </Link> */}

          {session?.user ? (
            <UserOption item={"Sign out"} />
          ) : (
            <UserOption item={"Sign in"} />
          )}
        </motion.ul>
      </div>
    </div>
  );
};

export default User;
