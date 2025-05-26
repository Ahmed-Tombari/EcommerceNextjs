// MenuItems.jsx
import Link from 'next/link';

const MenuItems = () => {
  return (
    <div className="flex flex-wrap gap-8 sm:gap-6 items-start">
      <Link href="/Home" className="font-bold hover:text-secondary-500">HOME</Link>
      <Link href="/Pages/About" className="font-bold hover:text-secondary-500" >ABOUT</Link>
      <Link href="/Pages/Shop" className="font-bold hover:text-secondary-500" >SHOP</Link>
    </div>
  );
};

export default MenuItems;