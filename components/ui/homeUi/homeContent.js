import Link from "next/link";
import ProductCategories from "./ProductCategories";

export default function HomeContent() {
  return (
    <>
      {/* Hero Section  */}
      <div class="bg-[url(/images/hero.svg)] bg-cover bg-center">
    <div className="self-stretch px-4 md:px-28 py-40 bg-gradient-to-l from-sky-400/0 to-sky-400/20 inline-flex flex-col justify-center items-start gap-8">
       
      <div className="self-stretch flex flex-col justify-start items-start gap-6">
        <div className="self-stretch text-neutral-500 text-base font-extrabold font-inter leading-none tracking-wide">
          MAKING DIFFERENT IDEAS
        </div>
        <div className="self-stretch text-black text-6xl font-bold font-sen leading-[64px]">
          We Sell Things<br />You Don’t Need
        </div>
        <div className="self-stretch text-stone-500 text-lg font-semibold font-nunito-sans leading-normal">
          Proin ultices scelerisque pretium maecenas purus accumsan nulla elementum porta<br />
          nulla orttitor sodales arcu quamat semorci
        </div>
      </div>

      <div className="w-64 h-12 inline-flex justify-start items-center gap-3">
        <Link href="/shop" className="w-32 h-12 p-2.5 bg-primary-500 hover:bg-secondary-500 flex justify-center items-center gap-2.5">
          <span className="text-white text-base font-extrabold font-inter leading-none tracking-wide">
            SHOP NOW
          </span>
        </Link>

        <Link href="/explore" className="w-28 h-12 inline-flex flex-col justify-center items-start gap-2.5">
          <span className="self-stretch h-4 p-2.5 inline-flex justify-center items-center gap-2.5">
            <span className="text-primary-500 hover:text-secondary-500 text-sm font-bold font-inter leading-none tracking-wide">
              EXPLORE
            </span>
          </span>
        </Link>
      </div>
    </div>
    </div>
      {/* Product Categories & Testimonials */}
      <ProductCategories />
    </>
  );
}