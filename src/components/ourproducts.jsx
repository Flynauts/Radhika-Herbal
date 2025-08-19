import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const categories = [
  "Gels",
  "Face Creams",
  "Haircare Products",
  "Face Scrubs",
  "Toners",
  "Face Wash & Cleansers",
  "Face Moisturizers & Lotions",
  "Face Moisturizers & Lotions",
];

export default function OurProducts() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <div className=" font-playfair pt-8">
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 xl:px-24 2xl:px-32">
        <div className="text-center lg:mb-8">
          <h2
            className="text-[28px] text-gray-700 text-left "
            style={{ fontFamily: "Lora" }}
          >
            Our Products
          </h2>
        </div>

        <div className="select_category absolute right-40 top-0 mt-2">
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-2 px-4 py-2 border border-[#7E9E86] rounded-md text-gray-600 hover:bg-[#7E9E86] hover:text-white transition"
            >
              Select Category
              {showDropdown ? <FiChevronUp /> : <FiChevronDown />}
            </button>

            {showDropdown && (
              <div className="absolute right-0 z-50 mt-2 w-48 bg-white border border-gray-200 rounded shadow-md">
                {categories.map((item, idx) => (
                  <button
                    key={idx}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-[#7E9E86] hover:text-white transition"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
