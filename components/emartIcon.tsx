import Link from "next/link";
import React from "react";
import Image from "next/image";

const EmartIcon = () => {
  return (
    <div>
      <Link className="flex" href={"/"}>
        <Image src="/SVG/eMart.svg" alt="Logo" width={40} height={40} className="rounded-full"/>
      </Link>
    </div>
  );
};

export default EmartIcon;
