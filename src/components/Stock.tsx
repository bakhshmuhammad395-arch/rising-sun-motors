export default function Stock() {
  const cars = [
    {
      name: "Toyota Land Cruiser",
      year: "2022",
      details: "Diesel • Automatic • 4WD",
      status: "Available",
      image: "landcruiser.jpg",
      imageClass: "object-contain",
    },
    {
      name: "Toyota Hilux",
      year: "2021",
      details: "Diesel • Automatic • 4WD Pickup",
      status: "Available",
      image: "hilux.jpg",
      imageClass: "object-contain scale-110",
    },
    {
      name: "Honda Vezel Hybrid",
      year: "2020",
      details: "Hybrid • Automatic • Low Mileage",
      status: "Available",
      image: "vezel.jpg",
      imageClass: "object-contain",
    },
  ];

  return (
    <section
      id="stock"
      className="px-4 md:px-8 py-16 md:py-20 bg-white"
    >

      <div className="max-w-6xl mx-auto">

        <div className="text-center">

          <p className="text-[#D4AF37] font-semibold uppercase tracking-widest text-sm">
            Current Stock
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Available Japanese Vehicles
          </h2>

          <p className="text-gray-600 mt-4 text-sm md:text-base">
            Vehicles sourced from trusted Japanese auctions.
          </p>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-12">

          {cars.map((car, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >

              {/* Hero Style Image */}
              <div className="w-full h-[260px] rounded-2xl overflow-hidden shadow-2xl">

                <img
                  src={`/Images/${car.image}`}
                  alt={car.name}
                  className={`w-full h-full rounded-2xl ${car.imageClass}`}
                />

              </div>


              <div className="p-5 md:p-6">

                <h3 className="text-xl md:text-2xl font-bold">
                  {car.name}
                </h3>

                <p className="text-gray-600 mt-2">
                  Year: {car.year}
                </p>

                <p className="text-gray-600 mt-1">
                  {car.details}
                </p>

                <span className="inline-block mt-4 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  {car.status}
                </span>


                <a
                  href={`https://wa.me/923337411400?text=${encodeURIComponent(
                    `Hello Rising Sun Motors, I am interested in the ${car.name}. Please share the price and details.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block w-full bg-[#0B2E59] text-white py-3 rounded-lg hover:bg-blue-900 transition text-center"
                >
                  Ask Price on WhatsApp
                </a>


              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}