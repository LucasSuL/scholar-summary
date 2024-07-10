"use client";

import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const { user, isSignedIn } = useUser();
  const path = usePathname();

  return (
    // if in preview page, hide header
    // !path.includes("preview") && (
    <header className="border-b align-middle shadow-sm sticky z-[100] top-0 w-full border-gray-200 bg-white/95 backdrop-blur-lg transition-all">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link href={"/"}>
              <div className="flex gap-1 items-center">
                <Image
                  alt="logo"
                  className=""
                  src="/logo.svg"
                  width={50}
                  height={50}
                />
                <p className="font-bold text-lg hidden lg:block">
                  <span className="color-test">AI</span> Scholar Summary
                </p>
              </div>
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/about"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/library"
                  >
                    Library
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/pricing"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              {isSignedIn ? (
                <div className="flex items-center gap-4 ">
                  {/* <Link href={"/dashboard"}>
                      <Button variant="outline">Dashboard ✨</Button>
                    </Link> */}
                  <UserButton />
                </div>
              ) : (
                <SignInButton>
                  <Button>Get Started</Button>
                </SignInButton>
              )}

              <div className="block md:hidden">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <div className="mt-3">
                      <DropdownMenuItem className=" mt-1 cursor-pointer text-gray-500 transition hover:text-black hover:bg-slate-100">
                        <Link href="/">Home</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className=" mt-1 cursor-pointer text-gray-500 transition hover:text-black hover:bg-slate-100">
                        <Link href="/about">About</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className=" mt-1 cursor-pointer text-gray-500 transition hover:text-black hover:bg-slate-100">
                        <Link href="/library">Library</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className=" mt-1 cursor-pointer text-gray-500 transition hover:text-black hover:bg-slate-100">
                        <Link href="/pricing">Pricing</Link>
                      </DropdownMenuItem>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    // )
  );
};

export default Header;
