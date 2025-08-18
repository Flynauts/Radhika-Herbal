import Image1 from "../assests/whyChooseHerbalBeauty1.jpeg";
import Image2 from "../assests/whyChooseHerbalBeauty2.jpeg";
import Image3 from "../assests/whyChooseHerbalBeauty3.jpeg";
import Image4 from "../assests/whyChooseHerbalBeauty4.jpeg";

import { useState } from "react";
import PropTypes from "prop-types";

export default function ChooseHerbalBeauty() {
  const steps = [
    {
      title: "Gentle on Skin",
      description:
        "Herbal formulations use plant-based ingredients that are less likely to irritate or cause allergies—perfect for sensitive skin.",
      image: Image4,
    },
    {
      title: "No Harsh Chemicals",
      description:
        "Embrace beauty free from parabens, sulfates, and synthetic fragrances commonly found in traditional cosmetics.",
      image: Image2,
    },
    {
      title: "Rich in Natural Nutrients",
      description:
        "Herbal products deliver vitamins, antioxidants, and essential oils—supporting healthy, radiant skin from within.",
      image: Image1,
    },
    {
      title: "Fruitful Care",
      description:
        "Infused with fruits and botanicals rich in vitamins and antioxidants, our products naturally nourish and rejuvenate your skin.",
      image: Image3,
    },
  ];

  return (
    <section>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 xl:px-24 2xl:px-32">
        <div className="text-left lg:mb-8">
          <h2
            className="text-[28px] text-gray-700 text-left pt-8 pb-6"
            style={{ fontFamily: "Lora" }}
          >
            Why Choose Herbal Beauty
          </h2>
        </div>

        {/* Grid responsive: 2 cols on mobile, 4 cols on tablet & desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((items, index) => (
            <Card key={index} {...items} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ title, description, image }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm text-left transform transition-transform duration-300 hover:scale-105 hover:border-[#7E9E86]">
      <img
        src={image}
        alt={title}
        className="w-full rounded-2xl p-2 h-48 object-cover"
      />

      <div className="p-4">
        <p
          className="text-gray-600 font-medium 
             text-[18px] md:text-[13px] lg:text-[21px] 
             md:pb-2 md:min-h-[55px] flex items-center"
        >
          {title}
        </p>

        <p
          className={`text-[14px] md:text-[7px] lg:text-[14px] text-[#4d4d4d] 
    ${!expanded ? "md:line-clamp-2 lg:line-clamp-none" : ""} 
    md:min-h-[24px]`}
          style={{ fontFamily: "Mulish" }}
        >
          {description}
        </p>

        {/* Show Read More only on tablet */}
        {/* Show Read More only on tablet (md) */}
        <button
          className="hidden md:block lg:hidden text-[#7E9E86] text-[7px] mt-1 underline"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
