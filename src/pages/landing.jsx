import { useState, useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";

import womanImg from "../assests/woman.png";
import { FiSearch } from "react-icons/fi";
import Logo from "../assests/radhika-logo.png";

// Home page components
import OurProducts from "../components/ourproducts";
import ProductsGrid from "../components/ProductsGrid";
import OurCertifications from "../components/ourcertifications";
import BlogSection from "../components/blogstrend";
import EnquiryForm from "../components/EnquiryForm";
import OurGifiting from "../components/ourgifiting";
import OurServices from "../components/ourservices";
import ManufacturingProcess from "../components/OurManufacturing";
import CustomerTestimonials from "../components/CustomerTestimonials";
import ChooseHerbalBeauty from "../components/ChooseHerbalBeauty";
import SustainabilityGoals from "../components/SustainabilityGoals";
import Footer from "../components/foooter";
import GiftingCard from "../components/giftingcard";

// Other pages
import About from "./About";
import Contract from "./Contract";
import PrivateLabelling from "./PrivateLabelling";
import CorporateGifting from "./CorporateGifting";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const enquiryRef = useRef(null);
  const productsRef = useRef(null);

  // ✅ Helper function: scroll with offset (navbar height ~80px)
  const scrollToSection = (ref) => {
    if (ref.current) {
      const yOffset = -80; // adjust if navbar height is different
      const y =
        ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-[#FEFEFE] text-[#666666] px-4 py-4 shadow">
        <div className="flex flex-wrap items-center justify-between max-w-[1440px] mx-auto w-full">
          <div className="flex items-center gap-6 flex-1 flex-wrap">
            <img src={Logo} alt="Radhika Herbals Logo" className="h-8 w-auto" />

            <div className="hidden md:flex gap-6 font-medium">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
              <Link to="/contract" className="hover:underline">
                Contract Manufacturing
              </Link>
              <Link to="/private" className="hover:underline">
                Private Labelling
              </Link>
              <Link to="/corporate" className="hover:underline">
                Corporate Gifting
              </Link>
            </div>

            <div className="hidden md:flex ml-auto items-center gap-4">
              <div className="flex items-center border border-[#7E9E86] bg-white rounded-md px-3 py-1.5">
                <FiSearch className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search"
                  className="outline-none border-none text-gray-600 text-base bg-transparent"
                />
              </div>
              <button
                onClick={() => scrollToSection(enquiryRef)} // ✅ updated
                className="bg-olive-dark text-white px-4 py-2 rounded-[12px] font-semibold"
              >
                Request Quote
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4 pl-4">
            <button className="hover:underline">Sign-In</button>
            <span>👜</span>
          </div>

          <button
            className="md:hidden text-3xl ml-auto"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Routes and Home Page */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* Hero Section */}
              <div className="bg-gradient-to-b from-light to-olive rounded-b-3xl">
                <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between px-4 sm:px-8 md:px-16 xl:px-24 2xl:px-32 pt-20 h-auto md:h-[350px]">
                  <div className="flex-1 flex flex-col justify-start text-center md:text-left space-y-2">
                    <p className="text-[#3D3D3D] text-[20px] font-light pb-[14px]">
                      Makeup & Skincare, Made for Your Brand.
                    </p>
                    <h2 className="text-4xl md:text-6xl font-bold text-[#666666] font-[Lora] pb-8">
                      Radhika Herbals
                    </h2>
                    <div className="flex justify-center md:justify-start gap-4 mt-4">
                      {/* Scroll to Enquiry Form */}
                      <button
                        onClick={() => scrollToSection(enquiryRef)} // ✅ updated
                        className="bg-olive-dark text-white px-4 py-2 rounded-[12px] font-semibold"
                      >
                        Request Quote
                      </button>

                      {/* Scroll to Products Section */}
                      <button
                        onClick={() => scrollToSection(productsRef)} // ✅ updated
                        className="bg-white text-[#6F8675] px-4 py-2 rounded-[12px] font-semibold"
                      >
                        View Products
                      </button>
                    </div>
                  </div>

                  <div className="flex-1 flex items-end justify-center mt-6 md:mt-0 overflow-hidden">
                    <img
                      src={womanImg}
                      alt="Woman holding product"
                      className="w-[677px] md:w-[410px]"
                    />
                  </div>
                </div>
              </div>

              {/* Home Page Sections */}
              <OurServices />
              <OurCertifications />
              <div ref={productsRef}>
                <OurProducts />
              </div>
              <ProductsGrid />
              <ManufacturingProcess />
              <CustomerTestimonials />
              <ChooseHerbalBeauty />
              <SustainabilityGoals />
              <OurGifiting />
              <GiftingCard />
              <div ref={enquiryRef}>
                <EnquiryForm />
              </div>
              <BlogSection />
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contract" element={<Contract />} />
        <Route path="/private" element={<PrivateLabelling />} />
        <Route path="/corporate" element={<CorporateGifting />} />
      </Routes>
    </div>
  );
}
