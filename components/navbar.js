// components/Navbar.jsx
import Link from "next/link";
import Logo from "./ui/navbarUi/logo";
import MenuItems from "./ui/navbarUi/menuItems";
import MainMenu from "./ui/navbarUi/mainMenu";

export default function Navbar() {
  return (
    <div className="w-full max-w-auto px-4 sm:px-6 md:px-8 lg:px-[120px] mx-auto">
      {/* Header Container */}
      <header className="flex justify-between items-center h-16 font-montserrat bg-white">
        {/* Left Section: Logo + Nav Links (Desktop) */}
        <div className="hidden md:flex items-center gap-12">
          <Logo />
          <nav>
            <MenuItems />
          </nav>
        </div>

        {/* Centered Mobile Logo (Mobile Only) */}

        {/* Right Section: Cart + Login Button + Hamburger Menu */}
        <MainMenu />
        <div className="md:hidden flex items-center">
          <Logo />
        </div>
      </header>
    </div>
  );
}
