export default function WhyChooseUs() {
  const features = [
    {
      title: "🇯🇵 Japan Auctions",
      description:
        "Access to quality vehicles from Japanese auction networks.",
    },
    {
      title: "📋 Verified Details",
      description:
        "Vehicle information and auction details provided clearly.",
    },
    {
      title: "🚢 Export Support",
      description:
        "Assistance with vehicle export process and shipping.",
    },
    {
      title: "💬 WhatsApp Support",
      description:
        "Quick communication for vehicle inquiries.",
    },
  ];

  return (
    <section className="px-4 md:px-8 py-16 md:py-20 bg-white">

      <div className="max-w-6xl mx-auto">


        <div className="text-center">

          <p className="text-[#D4AF37] font-semibold uppercase tracking-widest text-sm">
            Why Choose Us
          </p>


          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Trusted Japanese Vehicle Export Service
          </h2>


          <p className="text-gray-600 mt-4 text-sm md:text-base">
            We help customers find quality vehicles through reliable Japanese auctions.
          </p>

        </div>




        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mt-10 md:mt-12">


          {features.map((feature, index) => (

            <div
              key={index}
              className="bg-gray-100 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition"
            >

              <h3 className="text-xl font-bold">
                {feature.title}
              </h3>


              <p className="text-gray-600 mt-3 leading-relaxed">
                {feature.description}
              </p>

            </div>

          ))}


        </div>


      </div>

    </section>
  );
}