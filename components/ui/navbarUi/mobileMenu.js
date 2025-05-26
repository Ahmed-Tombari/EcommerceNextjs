// components/ui/navbarUi/MobileMenu.jsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingBag, X } from "lucide-react";

export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full h-99 bg-white shadow-lg">
      {/* Container with exact width */}
      <div className="flex flex-col h-full p-2.5 space-y-4">
        {/* Close Button */}
        <div className="w-12 h-12 relative overflow-hidden">
          <button onClick={onClose} className="absolute inset-0">
            <div className="w-7 h-7 left-[11.74px] top-[11.74px] absolute hover:text-secondary-500 cursor-pointer">
              <X />
            </div>
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 flex flex-col gap-4">
          <Link
            href="/"
            className="self-stretch h-12 px-7 py-2.5 bg-white inline-flex justify-center items-center gap-2.5 hover:bg-secondary-500 hover:text-white"
            onClick={onClose}
          >
            <span className="text-center text-2xl font-medium leading-none tracking-wide">
              HOME
            </span>
          </Link>
          <Link
            href="/about"
            className="self-stretch h-12 px-7 py-2.5 bg-white inline-flex justify-center items-center gap-2.5 hover:bg-secondary-500 hover:text-white"
            onClick={onClose}
          >
            <span className="text-center text-2xl font-medium leading-none tracking-wide">
              ABOUT
            </span>
          </Link>
          <Link
            href="/shop"
            className="self-stretch h-12 px-7 py-2.5 bg-white inline-flex justify-center items-center gap-2.5 hover:bg-secondary-500 hover:text-white"
            onClick={onClose}
          >
            <span className="text-center text-2xl font-medium leading-none tracking-wide">
              SHOP
            </span>
          </Link>
        </nav>

        {/* Cart & Icon Row */}
        <div className="self-stretch inline-flex justify-between items-center">
          <div className="flex justify-start items-center gap-2">
            <span className="text-primary-500  text-3xl font-bold leading-none tracking-wide">
              $69
            </span>
            <div className="w-8 h-8 relative">
              <div className="absolute top-[2.50px] left-[3.75px] w-8 h-8 text-primary-500">
                <ShoppingBag />
              </div>

              <div className="absolute top-[-2px] left-3 right-[-5px]  p-0.5 bg-red-600 rounded-full flex justify-center items-center text-primary-500">
                <span className="text-white text-[10px] font-extrabold leading-[10px] tracking-tight">
                  3
                </span>
              </div>
            </div>
          </div>

          <div className="w-12 h-12 relative overflow-hidden">
            <div className="w-9 h-9 left-[6.25px] top-[6.25px] absolute text-primary-500 hover:text-secondary-500 cursor-pointer">
              <Search />
            </div>
          </div>
        </div>

        {/* Login Button */}
        <div className="self-stretch h-10 p-2.5 bg-primary-500 inline-flex justify-center items-center gap-2.5 hover:bg-secondary-500 cursor-pointer">
          <span className="justify-start text-white text-base font-extrabold leading-none tracking-wide">
            Login
          </span>
        </div>
      </div>
    </div>
  );
}
