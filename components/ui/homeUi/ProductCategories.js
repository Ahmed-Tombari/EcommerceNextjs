"use client"
import Link from 'next/link';
import { useState } from 'react';

export default function ProductCategories() {
  const [rating, setRating] = useState(0); // 0 to 5

  const handleStarClick = (index) => {
    // Toggle if same star clicked again
    if (rating === index + 1) {
      setRating(0); // unselect
    } else {
      setRating(index + 1); // select this star
    }
  };

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
              <img className="self-stretch h-40 relative" src="/images/products/1.png" alt={`Category ${i}`} />
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

            {/* Interactive Star Ratings */}
            <div className="flex items-center gap-x-1">
              {[...Array(5)].map((_, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => handleStarClick(i)}
                  className="focus:outline-none"
                >
                  <svg
                    className={`w-6 h-6 ${
                      i < rating ? 'fill-gold' : 'fill-gray-300'
                    }`}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_6170_53668)">
                      <path d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z" fill="" />
                      <g clipPath="url(#clip1_6170_53668)">
                        <path d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z" fill="" />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_6170_53668">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                      <clipPath id="clip1_6170_53668">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              ))}
            </div>

            <div className="self-stretch text-stone-500 text-xl font-semibold font-nunito-sans leading-loose">
              Proin ultices scelerisque pretium<br/>maecenas purus accumsan nulla<br/>elementum porta nulla orttitor sodales<br/>arcu quamat semorci
            </div>
          </div>

          {/* Testimonial Image */}
          <img
            className="flex-1 h-80 min-w-48 relative rounded-lg"
            src="/images/TestimonialCard.svg"
            alt="Customer testimonial"
          />
        </div>
      </div>
    </div>
  );
}