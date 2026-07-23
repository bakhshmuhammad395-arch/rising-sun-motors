import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-[#0B2E59] via-[#061B38] to-black text-white py-20 lg:py-28 overflow-hidden"
    >
      <div className="max-w-[1450px] mx-auto px-6 grid lg:grid-cols-2 items-center">

        {/* Left Side */}
        <div className="z-10">

          <p className="text-[#D4AF37] uppercase tracking-[4px] text-sm font-medium">
            Direct From Japan
          </p>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mt-5">
            Premium Japanese
            <br />
            Cars
            <br />
            Exported Worldwide
          </h1>

          <p className="mt-8 text-lg text-gray-300 max-w-xl leading-8">
            Rising Sun Motors helps customers import quality Japanese
            vehicles directly from trusted auctions in Japan.
            We proudly serve buyers across Africa and worldwide.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <a
              href="#stock"
              className="bg-[#D4AF37] text-black px-9 py-4 rounded-lg font-semibold hover:bg-yellow-400 duration-300"
            >
              Browse Stock
            </a>

            <a
              href="https://wa.me/923337411400?text=Hello%20Rising%20Sun%20Motors,%20I%20am%20interested%20in%20importing%20a%20Japanese%20vehicle."
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-9 py-4 rounded-lg hover:bg-white hover:text-black duration-300"
            >
              WhatsApp Us
            </a>

          </div>

        </div>

        {/* Right Side */}
        <div className="relative flex justify-end">

          <Image
            src="/Images/hero-car.png"
            alt="Toyota Land Cruiser"
            width={1400}
            height={850}
            priority
            className="w-[115%] max-w-none h-auto object-contain drop-shadow-[0_35px_70px_rgba(0,0,0,0.6)]"
          />

        </div>

      </div>
    </section>
  );
}