import { useState } from "react";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    product: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle your form data here (API, email, etc.)
    console.log("Enquiry Form Submitted:", formData);

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      product: "",
    });
  };

  return (
    <section className="bg-[#7E9E86] w-full mt-8">
      <div className="max-w-4xl mx-auto bg-[#7E9E86] rounded-xl px-6 py-8 pb-28">
        <h2
          className="text-white text-xl md:text-3xl font-semibold text-center mb-2"
          style={{ fontFamily: "Lora" }}
        >
          Send Us Your Enquiry
        </h2>
        <p className="text-white text-center mb-8">
          We will get back to you within 24 hours.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name*"
              value={formData.fullName}
              onChange={handleChange}
              className="flex-1 px-4 py-3 rounded-md focus:outline-none w-full placeholder-[#A9B6A2]"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              className="flex-1 px-4 py-3 rounded-md focus:outline-none w-full placeholder-[#A9B6A2]"
              required
            />
          </div>

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md focus:outline-none placeholder-[#A9B6A2]"
          />

          <select
            name="product"
            value={formData.product}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md focus:outline-none text-[#A9B6A2]"
            required
          >
            <option value="">Our Products*</option>
            <option value="Wellness">Contract Manufacturing</option>
            <option value="Wellness">Private Labeling</option>
            <option value="Wellness">Corporate gifting</option>
            <option value="Skin Care">Skin Care</option>
            <option value="Hair Care">Hair Care</option>
            <option value="Wellness">Wellness</option>
          </select>

          {/* Centered & Styled Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="bg-white text-[#7E9E86] px-6 py-2 rounded-[12px] font-semibold transition-all duration-300 hover:bg-[#7E9E86] hover:text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EnquiryForm;
