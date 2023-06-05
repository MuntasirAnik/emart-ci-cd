import React from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const Modal = (props: any) => {
  if (!props.isVisible) return null;
  return (
    <div className="z-50 absolute right-0 top-0 bg-black bg-opacity-40 backdrop-blur-sm">
      <div className="lg:w-[500px] lg:h-[600px]  flex flex-col">
        <div className="bg-white rounded">
          <div className=" p-10 bg-gray-50 shadow-red-400">
            <div className="flex items-start justify-between">
              <h2
                className="text-lg font-medium text-gray-900"
                id="slide-over-title"
              >
                Shopping cart
              </h2>
              <div className="ml-3 flex h-7 items-center">
                <button
                  onClick={() => props.onClose()}
                  type="button"
                  className="-m-2 text-gray-400 hover:text-gray-800 hover:rounded-sm"
                >
                  <span className="sr-only">Close panel</span>
                  <svg
                    className="h-6 w-6 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-8 bg-gray-50 pb-4">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  <li className="flex py-6">
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 ">
                      <img
                        alt="ecommerce"
                        className="p-2 "
                        src="https://m.media-amazon.com/images/I/71yIGykJFNS._AC_UY327_FMwebp_QL65_.jpg"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href="#">iPhone 7</a>
                          </h3>
                          <p className="ml-4">$700.00</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">Black</p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-lg">
                        <p className="text-gray-500 flex items-center">
                          <AiOutlinePlusCircle className="mx-1 cursor-pointer hover:bg-gray-500 hover:text-white hover:rounded-full" />{" "}
                          1
                          <AiOutlineMinusCircle className="mx-1 cursor-pointer hover:bg-gray-500 hover:text-white hover:rounded-full" />
                        </p>

                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="flex py-6 ">
                    <div className="h-20 w-20 items-center rounded-md border border-gray-400">
                      <img
                        alt="ecommerce"
                        className="p-2 "
                        src="https://m.media-amazon.com/images/I/61vFO3R5UNL._AC_UY327_FMwebp_QL65_.jpg"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href="#">Macbook pro 2022</a>
                          </h3>
                          <p className="ml-4">$1200.00</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">space gray</p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-lg">
                        <p className="text-gray-500 flex items-center">
                          <AiOutlinePlusCircle className="mx-1 cursor-pointer hover:bg-gray-500 hover:text-white hover:rounded-full" />{" "}
                          1
                          <AiOutlineMinusCircle className="mx-1 cursor-pointer hover:bg-gray-500 hover:text-white hover:rounded-full" />
                        </p>

                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                  
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>$1900.00</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                Shipping and taxes calculated at checkout.
              </p>
              <div className="mt-6 flex justify-between">
                <a
                  href="#"
                  className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Checkout
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center rounded-md border border-transparent  px-4 py-2 text-base font-medium text-black shadow-lg hover:bg-red-500"
                >
                  Clear Cart
                </a>
              </div>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  or
                  <button
                    type="button"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
