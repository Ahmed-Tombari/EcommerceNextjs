// mainMenu.jsx
"use client";
import React, { useState } from "react";
import { Search, ShoppingBag, X } from "lucide-react";
import MobileMenu from "./mobileMenu";
import { Menu } from "lucide-react";
import SearchModal from "./SearchModal";

export default function MainMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Right Section */}
      <div className="hidden md:flex items-center gap-8">
        {/* Cart Summary */}
        <div className="flex items-center gap-6">
          {/* Search Icon */}
          <div className="relative w-5 h-5 text-primary-500 hover:text-secondary-500 cursor-pointer">
            {/* <Search />  */}
            <SearchModal />
          </div>

          {/* Cart with Badge */}
          <div className="flex items-center gap-2">
            <span className="text-primary-500 text-sm font-bold tracking-wide items-center text-center top-[-2px]">
              $69
            </span>
            <div className="relative w-5 h-5 text-primary-500">
              <ShoppingBag />

              <div className="absolute top-[-2px] left-3 right-[-5px]  p-0.5 bg-red-600 rounded-full flex justify-center items-center">
                <span className="text-white text-[10px] font-extrabold leading-[10px] tracking-tight">
                  3
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Login Button */}
        <button className="w-20 h-10 p-2.5 bg-primary-500  flex justify-center items-center gap-2.5 hover:bg-secondary-500 cursor-pointer">
          <span className="text-white text-base font-extrabold tracking-wide">
            Login
          </span>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="w-12 h-12 relative overflow-hidden hover:text-secondary-500 cursor-pointer"
        >
          <div className="w-9 h-9 left-[11.74px] top-[11.74px] absolute">
            {" "}
            <Menu />
          </div>
        </button>
      </div>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
