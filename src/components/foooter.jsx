import logo from "../assests/radhika-logo.png";
export default function Footer() {
  return (
    <div className="bg-[#1C6D4B] text-white px-5 py-10 mt-10">
      {/* Upper row */}
      <div className="max-w-[1440px] flex flex-wrap justify-between items-start gap-10 mx-auto px-4 sm:px-8 md:px-16 xl:px-24 2xl:px-32">
        {/* Logo */}
        <div className="flex justify-center items-center h-[220px]">
          <div className="bg-white w-[210px] h-[110px] rounded-[20px] flex justify-center items-center">
            <img src={logo} alt="logo" className="w-[145px] h-[86px] " />
          </div>
        </div>

        {/* Sitemap & Socials */}
        <div className="flex gap-[150px] flex-wrap justify-center">
          {/* Sitemap */}
          <div>
            <h4 className="font-raleway font-normal text-[16px] leading-[28px] mb-4">
              Sitemap
            </h4>
            <ul>
              {["Home", "Abouts", "Growers", "Merchants", "Contact"].map(
                (item) => (
                  <li key={item} className="mb-2">
                    <a
                      href="#"
                      className="text-white text-[14px] leading-[22px] opacity-75 hover:opacity-100 transition"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-raleway font-normal text-[16px] leading-[28px] mb-4">
              Socials
            </h4>
            <ul>
              {["Facebook", "Linkedin", "Instagram", "Twitter"].map((item) => (
                <li key={item} className="mb-2">
                  <a
                    href="#"
                    className="text-white text-[14px] leading-[22px] opacity-75 hover:opacity-100 transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Head Office & Newsletter */}
        <div className=" pb-5">
          <div className="mb-5">
            <h4 className="font-raleway text-[16px] leading-[28px] mb-2">
              Head Office
            </h4>
            <span className="block max-w-[300px] text-[14px] leading-[22px] opacity-75">
              Factory: Gat No.218, / 8, Mumbai-Agra Highway At post: Jaulke
              Dindori, Tal: Dindori, Dist:, Nashik, Maharashtra 422206
            </span>
          </div>
          <div>
            <h4 className="font-raleway text-[16px] leading-[28px] mb-2">
              Newsletter
            </h4>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full max-w-[250px] bg-transparent border-b border-white text-white placeholder-white/70 text-[14px] leading-[22px] outline-none"
              required
            />
          </div>
        </div>
      </div>

      {/* Lower row */}
      <div className="max-w-[1200px] mx-auto flex flex-wrap justify-between items-center gap-10 mt-10 text-center">
        <p className="flex-1 font-light text-[18px] leading-[24px]">
          info@radhikaherbal.com
        </p>
        <p className="flex-1 font-light text-[18px] leading-[24px]">
          (123) 456-7890
        </p>
        <p className="flex-1 font-poppins text-[12px] leading-[20px] opacity-60">
          © 2025 Radhika Herbals. All rights reserved.
        </p>
      </div>
    </div>
  );
}
