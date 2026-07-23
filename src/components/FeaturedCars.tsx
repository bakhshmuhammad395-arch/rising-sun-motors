export default function FeaturedCars() {
  const cars = [
    {
      name: "Toyota Land Cruiser",
      image: "landcruiser.jpg",
      details: "Diesel • Automatic • 4WD",
      imageClass: "object-contain",
    },
    {
      name: "Toyota Hilux",
      image: "hilux.jpg",
      details: "Diesel • 4WD • Pickup",
      imageClass: "object-contain scale-110",
    },
    {
      name: "Honda Vezel Hybrid",
      image: "vezel.jpg",
      details: "Hybrid • Automatic • SUV",
      imageClass: "object-contain",
    },
  ];

  return (
    <section className="px-4 md:px-8 py-16 md:py-20 bg-gray-100">

      <div className="max-w-7xl mx-auto">

        <div className="text-center">

          <p className="text-[#D4AF37] font-semibold uppercase tracking-widest text-sm">
            Popular Models
          </p>

          <h3 className="text-3xl md:text-4xl font-bold mt-3">
            Featured Japanese Vehicles
          </h3>

          <p className="text-gray-600 mt-4 text-sm md:text-base">
            Browse popular Japanese vehicles available through auction.
          </p>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-12">

          {cars.map((car, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >

              <div className="w-full h-[260px] rounded-2xl overflow-hidden shadow-2xl">

                <img
                  src={`/images/${car.image}`}
                  alt={car.name}
                  className={`w-full h-full ${car.imageClass} rounded-2xl`}
                />

              </div>


              <div className="p-5 md:p-6">

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs md:text-sm">
                  Japan Auction
                </span>

                <h4 className="text-xl md:text-2xl font-bold mt-4">
                  {car.name}
                </h4>

                <p className="text-gray-600 mt-3">
                  {car.details}
                </p>

                <a
                  href={`https://wa.me/923337411400?text=${encodeURIComponent(
                    `Hello Rising Sun Motors, I am interested in the ${car.name}. Please share the price and details.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block w-full bg-[#0B2E59] text-white py-3 rounded-lg hover:bg-blue-900 transition text-center"
                >
                  Request Price
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}