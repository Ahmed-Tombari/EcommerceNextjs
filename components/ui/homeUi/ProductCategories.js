// app/components/ProductCategories.js
import Link from 'next/link';

export default function ProductCategories() {
  return (
    <div className="self-stretch inline-flex flex-col justify-center items-center gap-20">
      {/* Product Categories Section */}
      <div className="self-stretch flex flex-col justify-start items-start gap-10">
        <div className="self-stretch px-4 md:px-28 flex flex-col justify-start items-center gap-2">
          <div className="self-stretch text-center text-black text-2xl font-bold font-sen leading-9">
            Product Categories
          </div>
          <div className="self-stretch text-center text-stone-500 text-lg font-semibold font-nunito-sans leading-normal">
            Proin ultices scelerisque pretium maecenas purus
          </div>
        </div>

        <div className="self-stretch grid justify-center px-4 md:px-28 md:inline-flex md:justify-start items-center gap-6 md:flex-wrap content-center">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="w-44 h-56 bg-white rounded-lg inline-flex flex-col justify-start items-center gap-4">
              <img className="self-stretch h-40 relative" src="https://placehold.co/180x154 " alt={`Category ${i}`} />
              <div className="self-stretch text-center text-black text-xl font-bold font-sen leading-loose">
                Category {i}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="self-stretch pb-10 grid justify-center items-center md:flex md:flex-col md:justify-start md:items-start gap-10">
        <div className="self-stretch px-4 md:px-28 flex flex-col justify-start items-center gap-2">
          <div className="self-stretch text-center text-neutral-500 text-base font-extrabold font-inter leading-none tracking-wide">
            OUR CUSTOMERS
          </div>
          <div className="self-stretch text-center text-black text-5xl font-bold font-sen leading-[66px]">
            Testimonials
          </div>
          <div className="self-stretch text-center text-stone-500 text-lg font-semibold font-nunito-sans leading-normal">
            Proin ultices scelerisque pretium maecenas purus
          </div>
        </div>

        <div className="self-stretch px-4 md:px-28 inline-flex justify-between items-center flex-wrap content-center">
          <div className="md:flex-1 min-w-48 grid md:inline-flex md:flex-col md:justify-start md:items-start gap-6">
            <div className="self-stretch text-neutral-500 text-base font-extrabold font-inter leading-none tracking-wide">
              Customer Name -
            </div>
            <div className="self-stretch text-black text-3xl font-bold font-sen leading-10">
              We really like the<br />product and the quality
            </div>

            {/* Star Ratings */}
            <div className="inline-flex justify-start items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-6 h-6 relative overflow-hidden">
                  <div className="w-5 h-5 left-[2px] top-[2.5px] absolute outline outline-[1.5px] outline-offset-[-0.75px] outline-yellow-600"></div>
                </div>
              ))}
            </div>

            <div className="self-stretch text-stone-500 text-xl font-semibold font-nunito-sans leading-loose">
              Proin ultices scelerisque pretium<br/>maecenas purus accumsan nulla<br/>elementum porta nulla orttitor sodales<br/>arcu quamat semorci
            </div>
          </div>

          {/* Testimonial Image */}
          <img
            className="flex-1 h-80 min-w-48 relative rounded-lg"
            src="https://placehold.co/600x310 "
            alt="Customer testimonial"
          />
        </div>
      </div>
    </div>
  );
}