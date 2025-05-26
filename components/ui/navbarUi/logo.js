"use client";
import React, { useState, useEffect } from "react";

const Logo = () => {
  const [isDarkMode, setIsDarkMode] = useState();

  // Charger le thème au montage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    console.log("savedTheme ===============> :" + savedTheme);

    if (savedTheme === "dark") {
      setIsDarkMode(true);
    } else if (savedTheme === "light") {
      setIsDarkMode(false);
    } else {
      // Default to system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkMode(prefersDark);
    }
  }, []);

  // Optionnel : observer les changements de classe sur <html>
  useEffect(() => {
    const updateTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <a href="/">
      <div className="flex gap-2.5 justify-start items-center h-[61px]">
        <img src="/images/shoplogo.svg" className="w-35 h-10"></img>
      </div>
    </a>
  );
};

export default Logo;