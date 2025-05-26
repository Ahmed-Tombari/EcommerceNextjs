"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


// Simple Spinner Component
function Spinner() {
  return (
    <div className="w-20 h-20 border-10 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
  );
}

export default function ClientWrapper({ children }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 500); // simulate loading delay
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-white bg-opacity-80 backdrop-blur-sm">
          <div className="flex flex-row items-center gap-4">
            <Spinner />
            <p className="text-lg font-medium text-primary-500">Loading...</p>
          </div>
        </div>
      )}

      <div
        className={
          isLoading
            ? "opacity-0"
            : "opacity-100 transition-opacity duration-300"
        }
      >
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}