export default function Footer() {
  return (
    <footer className="bg-[#071E3D] text-white pt-16 pb-8 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

        {/* Brand */}
        <div>

          <h2 className="text-3xl font-bold">
            Rising Sun{" "}
            <span className="text-[#D4AF37]">
              Motors
            </span>
          </h2>

          <p className="mt-5 text-gray-300 leading-8">
            Premium Japanese vehicle exporter delivering trusted cars
            directly from Japan to customers across Africa and worldwide.
          </p>

        </div>

        {/* Quick Links */}
        <div>

          <h3 className="text-2xl font-semibold mb-5 text-[#D4AF37]">
            Quick Links
          </h3>

          <ul className="space-y-4 text-gray-300">

            <li>
              <a href="#home" className="hover:text-[#D4AF37] duration-300">
                Home
              </a>
            </li>

            <li>
              <a href="#stock" className="hover:text-[#D4AF37] duration-300">
                Stock
              </a>
            </li>

            <li>
              <a href="#how-to-buy" className="hover:text-[#D4AF37] duration-300">
                How To Buy
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-[#D4AF37] duration-300">
                Contact
              </a>
            </li>

          </ul>

        </div>

        {/* Contact */}
        <div>

          <h3 className="text-2xl font-semibold mb-5 text-[#D4AF37]">
            Contact
          </h3>

          <ul className="space-y-4 text-gray-300">

            <li>📱 +92 333 7411400</li>

            <li>📧 info@risingsunmotors.com</li>

            <li>📍 Pakistan | Japan Export Service</li>

            <li>🚢 Worldwide Shipping Available</li>

          </ul>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-12 pt-6">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-sm">
            © 2026 Rising Sun Motors. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm">

            <a
              href="#"
              className="text-gray-400 hover:text-[#D4AF37] duration-300"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-gray-400 hover:text-[#D4AF37] duration-300"
            >
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}