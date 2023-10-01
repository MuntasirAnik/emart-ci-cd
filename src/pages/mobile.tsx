import Link from "next/link";
import React from "react";
import MobileList from "../components/data/mobileData";

const Mobile = () => {
  return (
    <section className="text-gray-600 body-font lg:pl-16 shadow-sm">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {MobileList.map((item, index) => (
            <Link
              key={index}
              href={`product/${item.slug}`}
              className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-7"
            >
              <div className="block relative h-66 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="m-auto h-[36vh] block hover:scale-110 duration-700 transition ease-in-out delay-850"
                  src={item.url}
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {item.category}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {item.name}
                </h2>
                <p className="mt-1">{item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mobile;
