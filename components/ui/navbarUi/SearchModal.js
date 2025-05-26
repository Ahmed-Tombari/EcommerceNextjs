'use client'

import { Search } from 'lucide-react'
import { useState } from 'react'

export default function SearchModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full relative">
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="relative w-5 h-5 text-primary-500 hover:text-secondary-500 cursor-pointer"
      >
       <Search />
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-[100] bg-black/30 backdrop-blur-sm hover:text-secondary-500 cursor-pointer"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-5 overflow-auto">
            <div
              className="opacity-0 ease-out sm:max-w-lg sm:w-full mx-auto transition-opacity duration-500 opacity-100"
            >
              <div className="flex flex-col bg-white rounded-2xl py-4 px-5 shadow-xl">
                {/* Modal Header */}
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <h4 className="text-sm text-gray-900 font-medium">product search</h4>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="cursor-pointer"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.757 7.757l8.486 8.486m0-8.486L7.757 16.243" stroke="black" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>

                {/* Modal Body */}
                <div className="overflow-y-auto py-4 min-h-[130px]">
                  <div className="relative">
                    <label htmlFor="email" className="flex items-center mb-2 text-gray-600 text-sm font-medium">
                      Search
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="block w-full h-11 px-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                      placeholder="Type your search"
                      required
                    />
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="flex items-center justify-end pt-4 border-t border-gray-200 space-x-4">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="py-2.5 px-5 text-xs bg-primary-50 text-primary-500 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-secondary-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="py-2.5 px-5 text-xs bg-primary-500 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-secondary-500"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}