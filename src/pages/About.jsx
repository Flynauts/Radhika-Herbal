// src/pages/AboutUs.js
import Footer from "../components/foooter";

const About = () => {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 xl:px-24 2xl:px-32 py-12">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1
            className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2"
            style={{ fontFamily: "Lora" }}
          >
            About Us
          </h1>
          <div className="w-20 h-1 bg-[#A9B6A2] mx-auto rounded"></div>
        </div>

        {/* Content */}
        <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
          <p>
            <span className="font-semibold">Radhika Herbal</span> was founded by
            Mrs. Lalita Patil and Tushar Patil in 2008, inspired by a vision to
            blend the ancient healing wisdom of Ayurveda with the advancements
            of modern science. Our mission is to create skincare solutions that
            are both effective and safe, addressing your skin’s unique needs
            naturally.
          </p>

          <p>
            At Radhika Herbal, we are deeply committed to delivering authentic,
            high-quality products made with pure, natural ingredients. Our
            formulations are thoughtfully crafted to nourish, protect, and
            rejuvenate your skin—offering the best of nature at a reasonable
            price.
          </p>

          <p>
            We pride ourselves on being a trustworthy and environmentally
            conscious brand. Our enthusiasm for holistic wellness extends beyond
            products; it shapes our dedication to ethical sourcing, sustainable
            practices, and supporting humanitarian causes in our community.
          </p>

          <p>
            Thousands of satisfied customers trust{" "}
            <span className="font-semibold">Radhika Herbal</span> for results,
            quality, and integrity. Experience the perfect harmony of Ayurveda
            and science, all backed by our commitment to your well-being and the
            world we share.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
