// components/footer/PagesSection.js
export default function PagesSection() {
  return (
    <div className="min-w-[12rem] text-white text-center md:text-left">
      <h3 className="text-xl font-bold mb-4">Pages</h3>
      <ul className="space-y-2 text-xl font-normal">
        <li><a href="#" className="hover:text-secondary-500">Home</a></li>
        <li><a href="#" className="hover:text-secondary-500">About Us</a></li>
        <li><a href="#" className="hover:text-secondary-500">Shop</a></li>
        <li><a href="#" className="hover:text-secondary-500">Contact Us</a></li>
      </ul>
    </div>
  );
}