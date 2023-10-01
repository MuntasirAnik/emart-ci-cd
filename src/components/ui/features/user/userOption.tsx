import { signOut } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";

type props = {
  item: string;
};
const UserOption = ({ item }: props) => {
  const [route, setRoute] = useState("");

  const userClickFunction = (item: any) => {
    if (item === "Sign in") {
      setRoute("/login");
    } else if (item === "Sign up") {
      setRoute("/signup");
    } else if (item === "Sign out") {
      setRoute("/");
      signOut();
    }
  };

  return (
    <div>
      <Link
        onClick={() => userClickFunction(item)}
        href={route}
        className="m-1 block rounded px-1 py-2 hover:bg-green-600 dark:hover:bg-gray-600 dark:hover:text-white text-white"
      >
        {item}
      </Link>
    </div>
  );
};

export default UserOption;
