// src/components/OurServices.js

import ourService1 from "../assests/ourService1.png"; // ✅ Import your local image
import ourService2 from "../assests/ourService2.png";
import ourService3 from "../assests/ourService3.png"; // ✅ Import your local image
import ourService4 from "../assests/ourService4.png";

const services = [
  {
    title: "Contract Manufacturing",
    image: ourService1, // ✅ Use local image here
  },
  {
    title: "Corporate Gifting",
    image: ourService4, // ✅ Use local image here
  },
  {
    title: "Private Labelling",
    image: ourService2, // ✅ Use local image here
  },
  {
    title: "Product Samples",
    image: ourService3, // ✅ Use local image here
  },
];

const OurServices = () => {
  return (
    <section>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 xl:px-24 2xl:px-32 lg:px-32">
        <div className="text-left lg:mb-8">
          <h2
            className="text-[28px] text-gray-700 text-left pt-8 md:pb-4"
            style={{ fontFamily: "Lora" }}
          >
            Our Services
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm text-center transform transition-transform duration-300 hover:scale-105 hover:border-[#7E9E86]"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full rounded-2xl p-2 h-48 md:h-[86px] lg:h-48 object-cover"
              />
              <p
                className="py-4 text-gray-600 font-medium text-[20px]"
                style={{ fontFamily: "Lora" }}
              >
                {service.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
