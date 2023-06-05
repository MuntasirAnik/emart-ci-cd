import { useRouter } from "next/router";
import React, { useState } from "react";
import Data from "../../components/data/mobileData";
import Link from "next/link";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CheckDeliveryServices from "../services/checkDeliveryServices";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [favourite, setFavourite] = useState<boolean>();

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden shadow-lg">
        <div className="container px-5 py-6 mx-auto">
          <div className="mx-auto md:flex ">
            <div className="md:w-1/2 md:px-2">
              {Data.map(
                (item, index) =>
                  slug === item.slug && (
                    <Link
                      key={index}
                      href={`product/${item.slug}`}
                      className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-7"
                    >
                      <div className="block relative h-66 rounded overflow-hidden">
                        <img
                          alt="ecommerce"
                          className="m-auto block hover:scale-110 duration-500 transition ease-in-out delay-250"
                          src={item.url}
                        />
                      </div>
                    </Link>
                  )
              )}
            </div>
            <div className="md:w-2/3 lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              {Data.map(
                (item, index) =>
                  slug === item.slug && (
                    <div className="p-2" key={index}>
                      <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                        {item.name}
                      </h1>
                      <p className="leading-relaxed">{item.desc}</p>
                      <div className="mt-2">
                        <span className="text-black font-sem">Status :</span>
                        <span className="text-indigo-700 px-2 font-bold">
                          In Stock
                        </span>
                      </div>

                      <div className="flex pt-4">
                        <span className="title-font font-bold py-1 text-gray-900">
                          $ {item.price}
                        </span>
                        <button className="flex ml-2 text-white bg-indigo-500 border-0 p-2 lg:px-6 focus:outline-none hover:bg-indigo-600 rounded">
                          Buy Now
                        </button>
                        <button className="flex ml-2 text-white bg-indigo-500 border-0 p-2 lg:px-6 focus:outline-none hover:bg-indigo-600 rounded">
                          Add to cart
                        </button>
                        <button
                          className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center
                         text-gray-500 ml-4 hover:text-black"
                          onClick={() => setFavourite(!favourite)}
                        >
                          {favourite ? (
                            <FavoriteIcon />
                          ) : (
                            <FavoriteBorderOutlinedIcon />
                          )}
                        </button>
                      </div>
                    </div>
                  )
              )}
              <div className="flex mb-4">
                <span className="flex items-center">
                  <StarRoundedIcon className="text-blue-600 cursor-pointer" />
                  <StarRoundedIcon className="text-blue-600 cursor-pointer" />
                  <StarRoundedIcon className="text-blue-600 cursor-pointer" />
                  <StarRoundedIcon className="text-blue-600 cursor-pointer" />
                  <StarHalfRoundedIcon className="text-blue-600 cursor-pointer" />
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500 hover:text-blue-600 cursor-pointer">
                    <FacebookRoundedIcon />
                  </a>
                  <a className="text-gray-500 hover:text-sky-500 cursor-pointer">
                    <TwitterIcon />
                  </a>
                </span>
              </div>
              <CheckDeliveryServices />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Post;
