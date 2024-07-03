"use client";

import React from "react";
import PricingPlan from "@/app/_data/pricingPlan";
import { useUser } from "@clerk/nextjs";

const Upgrade = () => {
  const user = useUser();

  return (
    //
    // Upgrade your subscription
    // <div className="bg-slate-200">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pt-4 my-16">
        {user && (
          // <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
            <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-lg bg-white">
              <div className="p-6 sm:px-8">
                <h2 className="text-xl font-bold text-gray-900">
                  {PricingPlan[0].name}
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  {PricingPlan[0].desc}{" "}
                </p>

                <p className="mt-2 sm:mt-6">
                  <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    {" "}
                    {PricingPlan[0].price}${" "}
                  </strong>

                  <span className="text-sm font-medium text-gray-700">
                    {PricingPlan[0].duration}
                  </span>
                </p>

                <a
                  className="mt-4 block rounded-lg border border-primary bg-primary px-12 py-2 text-center text-sm font-medium text-white hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                  href={
                    PricingPlan[0].link +
                    "?prefilled_email=" +
                    user?.primaryEmailAddress?.emailAddress
                  }
                  target="_blank"
                >
                  Get Started
                </a>
              </div>

              <div className="p-6 sm:px-8">
                <p className="text-sm font-medium text-gray-900 sm:text-lg">
                  What's included:
                </p>

                <ul className="mt-2 space-y-2 sm:mt-4 text-sm">
                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-green-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-gray-700"> 10 users </span>
                  </li>

                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-green-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-gray-700"> 2GB of storage </span>
                  </li>

                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-green-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-gray-700"> Email support </span>
                  </li>

                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-red-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>

                    <span className="text-gray-700"> Help center access </span>
                  </li>

                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-red-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>

                    <span className="text-gray-700"> Phone support </span>
                  </li>

                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-red-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>

                    <span className="text-gray-700"> Community access </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-lg bg-white">
              <div className="p-6 sm:px-8">
                <h2 className="text-xl font-bold text-gray-900">
                  {PricingPlan[1].name}
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  {PricingPlan[1].desc}
                </p>

                <p className="mt-2 sm:mt-6">
                  <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    {" "}
                    {PricingPlan[1].price}${" "}
                  </strong>

                  <span className="text-sm font-medium text-gray-700">
                    {PricingPlan[1].duration}
                  </span>
                </p>

                <a
                  className="mt-4 block rounded-lg border border-primary bg-primary px-12 py-2 text-center text-sm font-medium text-white hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                  href={
                    PricingPlan[1].link +
                    "?prefilled_email=" +
                    user?.primaryEmailAddress?.emailAddress
                  }
                  target="_blank"
                >
                  Get Started
                </a>
              </div>

              <div className="p-6 sm:px-8">
                <p className="text-sm font-medium text-gray-900 sm:text-lg">
                  What's included:
                </p>

                <ul className="mt-2 space-y-2 sm:mt-4 text-sm">
                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-green-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-gray-700"> 20 users </span>
                  </li>

                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-green-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-gray-700"> 5GB of storage </span>
                  </li>

                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-green-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-gray-700"> Email support </span>
                  </li>

                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-green-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-gray-700"> Help center access </span>
                  </li>

                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-red-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>

                    <span className="text-gray-700"> Phone support </span>
                  </li>

                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-red-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>

                    <span className="text-gray-700"> Community access </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-lg bg-white">
              <div className="p-6 sm:px-8">
                <h2 className="text-xl font-bold text-gray-900">
                  {" "}
                  {PricingPlan[2].name}
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  {PricingPlan[2].desc}{" "}
                </p>

                <p className="mt-2 sm:mt-6">
                  <strong className="text-3xl font-bold text-gray-900 sm:text-3xl">
                    {" "}
                    {PricingPlan[2].price}{" "}
                  </strong>
                </p>

                <a
                  className="mt-4 block rounded-lg border border-primary bg-primary px-12 py-2 text-center text-sm font-medium text-white hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                  href={
                    PricingPlan[2].link +
                    "?prefilled_email=" +
                    user?.primaryEmailAddress?.emailAddress
                  }
                  target="_blank"
                >
                  Get Started
                </a>
              </div>

              <div className="p-6 sm:px-8">
                <p className="text-sm font-medium text-gray-900 sm:text-lg">
                  What's included:
                </p>

                <ul className="mt-2 space-y-2 sm:mt-4 text-sm">
                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-green-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-gray-700"> 50 users </span>
                  </li>

                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-green-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-gray-700"> 20GB of storage </span>
                  </li>

                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-green-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-gray-700"> Email support </span>
                  </li>

                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-green-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-gray-700"> Help center access </span>
                  </li>

                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-green-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-gray-700"> Phone support </span>
                  </li>

                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-green-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-gray-700"> Community access </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          // </div>
        )}
      </div>
    // </div>
  );
};

export default Upgrade;
