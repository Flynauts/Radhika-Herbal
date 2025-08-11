// src/components/CustomerTestimonials.js

import testimonials1 from "../assests/testimonials1.png";
import testimonials2 from "../assests/testimonials2.png";
import testimonials3 from "../assests/testimonials3.png";
import testimonials4 from "../assests/testimonials4.png";
import "../index.css";

// Dummy data for testimonials
const testimonials = [
  {
    name: "Devon Lane",
    username: "@its_devon",
    rating: 5.0,
    image: testimonials1,
    message:
      "Radhika Herbals helped us launch our private label herbal skincare range seamlessly. Their team was responsive, transparent, and delivered on every promise.",
  },
  {
    name: "Satish Mishra",
    username: "@its_satish",
    rating: 4.9,
    image: testimonials2,
    message:
      "Radhika Herbals helped us launch our private label herbal skincare range seamlessly. Their team was responsive, transparent, and delivered on every promise.",
  },
  {
    name: "Priya Rao",
    username: "@priya_rao",
    rating: 5.0,
    image: testimonials3, // ✅ Use the imported local image here
    message:
      "Radhika Herbals helped us launch our private label herbal skincare range seamlessly. Their team was responsive, transparent, and delivered on every promise.",
  },
  {
    name: "Himanshu Singh",
    username: "@himanshu_singh",
    rating: 5.0,
    image: testimonials4, // ✅ Use the imported local image here
    message:
      "Radhika Herbals helped us launch our private label herbal skincare range seamlessly. Their team was responsive, transparent, and delivered on every promise.",
  },
];

const CustomerTestimonials = () => {
  // Duplicate testimonials for seamless scrolling
  const loopTestimonials = [...testimonials, ...testimonials];

  return (
    <div
      className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 xl:px-24 2xl:px-32 lg:px-32 
                     border-gray-300 py-12 mt-12 mb-8"
    >
      {/* Heading */}
      <div className="text-left lg:mb-8">
        <h2
          className="text-[28px] text-gray-700 pt-2"
          style={{ fontFamily: "Lora" }}
        >
          What Our Customers Say..
        </h2>
      </div>

      {/* Scrolling container */}
      <div className="overflow-hidden">
        <div className="flex gap-8 animate-marquee hover:[animation-play-state:paused]">
          {loopTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-300 p-6 flex-shrink-0 w-[300px] md:w-[400px]"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full mr-4 object-cover"
                />
                <div>
                  <h2
                    className="text-lg font-serif font-bold text-gray-800"
                    style={{ fontFamily: "Lora" }}
                  >
                    {testimonial.name}
                  </h2>
                  <p className="text-sm italic text-gray-500">
                    {testimonial.username}
                  </p>
                </div>
                <div className="ml-auto flex items-center space-x-1">
                  <svg
                    className="w-4 h-4 text-red-500 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l2.9 8.7H24l-7.4 5.4L19.8 24 12 18.9 4.2 24l2.2-7.9L0 10.7h9.1z" />
                  </svg>
                  <span className="font-bold text-gray-800">
                    {testimonial.rating}
                  </span>
                </div>
              </div>
              <p
                className="text-[#4d4d4d] text-sm leading-relaxed"
                style={{ fontFamily: "Mulish" }}
              >
                “{testimonial.message}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerTestimonials;
