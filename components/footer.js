import ContactSection from "./ui/footerUi/ContactSection";
import Copyright from "./ui/footerUi/copyright";
import Newsletter from "./ui/footerUi/newsletter";
import PagesSection from "./ui/footerUi/PagesSection";
import StoreInfo from "./ui/footerUi/StoreInfo";


export default function Footer() {
  return (
    <footer className="bg-primary-500 pt-20 pb-10 text-white">
      <div className="w-full max-w-auto px-4 sm:px-6 md:px-8 lg:px-[120px] mx-auto">
        {/* Newsletter Section */}
        <div className="mb-24">
         
          <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-6 px-4 sm:px-0">
          {/* Left Side: Store Info */}
          <div className="flex-1">
             <Newsletter />
          </div>

          {/* Right Side: Pages + Contact */}
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
           <div className="w-full max-w-md items-center gap-4 mt-4 max-w-xl">
        <label className="w-full text-white text-center text-xl font-semibold">Sign up Now!</label>
        <div className="w-full flex flex-wrap gap-2">
          <input
            type="email"
            placeholder="Enter email address"
            className="flex-1 px-4 py-3 bg-white bg-opacity-20 text-primary-500 placeholder:text-black placeholder:opacity-70 focus:outline-none w-[461px]"
          />
          <button className="px-6 py-2 shadow outline outline-1 outline-offset-[-1px] outline-white transition-colors duration-300 text-white  hover:bg-secondary-500 cursor-pointer shadow-[2px_2px_1px_0px_rgba(255,255,255,1.00)]">
            <span className="text-base font-extrabold tracking-wide uppercase">SIGN UP</span>
          </button>
        </div>
      </div>
          </div>
        </div>
        </div>

        {/* Footer Columns */}
        <div>
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-6 px-4 sm:px-0">
          {/* Left Side: Store Info */}
          <div className="flex-1">
            <StoreInfo />
          </div>

          {/* Right Side: Pages + Contact */}
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
            <PagesSection />
            <ContactSection />
          </div>
        </div>
        </div>

        {/* Copyright */}
        <Copyright />
      </div>
    </footer>
  );
}