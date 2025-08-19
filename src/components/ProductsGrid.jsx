import product1 from "../assests/product1.png"; // Adjust the path if needed

const ProductCard = ({ selected = false }) => {
  return (
    <div
      className={`product-card border rounded-xl p-2 sm:p-4 shadow-sm cursor-pointer transform transition-transform duration-300
        hover:scale-105 hover:border-[#7E9E86]
        ${selected ? "border-[#7E9E86]" : "border-gray-300"}`}
    >
      {/* Image */}
      <div className="relative flex justify-center w-full h-[150px] sm:h-[200px]">
        <span className="absolute top-2 right-2 z-10 bg-[#A9B6A2] text-[10px] sm:text-xs text-white rounded-tl-md rounded-br-md px-1 sm:px-2 py-0.5 sm:py-1">
          Minimum Order: 3 units
        </span>
        <img
          src={product1}
          alt="Facewash"
          className="w-full h-full object-contain z-0"
        />
      </div>

      {/* Title */}
      <h3 className="text-[#7E9E86] font-semibold mt-3 text-[13px] sm:text-[16px] md:text-[18px]">
        Sulphate Free Facewash
      </h3>

      <p className="text-gray-500 text-[11px] sm:text-[14px] md:text-[15px]">
        Herbal anti-aging cream with aloe & saffron
      </p>

      {/* Price */}
      <p className="mt-2 font-bold text-[12px] sm:text-[16px] md:text-[18px]">
        ₹250 - <span className="font-bold">₹300</span>
      </p>

      {/* Sizes */}
      <div className="_sizes flex gap-2 mt-2 text-[10px] sm:text-xxl md:text-sm">
        {["50 ML", "100 ML", "200 ML"].map((size, idx) => (
          <button
            key={idx}
            className="border border-gray-900 rounded-[4px] px-2 py-0.5 sm:px- sm:py-1"
          >
            {size}
          </button>
        ))}
      </div>

      {/* CTA */}
      <button className="bg-[#7E9E86] hover:bg-[#6c8f76] text-white rounded-[8px] sm:rounded-[10px] text-[12px] sm:text-sm mt-3 sm:mt-4 px-2 py-1 sm:px-2 sm:py-2 w-full transition-colors duration-200">
        Request Quote
      </button>
    </div>
  );
};


const ProductsGrid = () => {
  return (
    <div className="_container max-w-[1440px] mx-auto px-4 sm:px-8 md:px-6 xl:px-24 2xl:px-32">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 custom-grid">
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductCard key={index} selected={index === 2} />
        ))}
      </div>

      {/* Media Query CSS */}
      <style jsx>{`
        @media (max-width: 767px) {
          /* Only show first 6 items */
          .product-card:nth-child(n + 7) {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductsGrid;