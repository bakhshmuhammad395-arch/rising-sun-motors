export default function HowToBuy() {
  const steps = [
    {
      number: "01",
      title: "Select Your Vehicle",
      description:
        "Choose your preferred Japanese vehicle from our available stock or popular models.",
    },
    {
      number: "02",
      title: "Vehicle Inspection & Details",
      description:
        "We provide complete vehicle information including condition, mileage and auction details.",
    },
    {
      number: "03",
      title: "Confirm Purchase",
      description:
        "After selecting your vehicle, we complete the purchase process and required documentation.",
    },
    {
      number: "04",
      title: "Shipping & Delivery",
      description:
        "Your vehicle is exported from Japan and shipped safely to your destination country.",
    },
  ];

  return (
    <section
      id="how-to-buy"
      className="px-4 md:px-8 py-16 md:py-20 bg-white"
    >

      <div className="max-w-6xl mx-auto">


        <div className="text-center">

          <p className="text-[#D4AF37] font-semibold uppercase tracking-widest text-sm">
            Simple Process
          </p>


          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            How To Buy A Japanese Car
          </h2>


          <p className="text-gray-600 mt-4 text-sm md:text-base">
            Our simple process makes importing your dream vehicle easy and transparent.
          </p>

        </div>




        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mt-10 md:mt-12">


          {steps.map((step, index) => (

            <div
              key={index}
              className="bg-gray-100 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition"
            >


              <div className="text-4xl font-bold text-[#D4AF37]">
                {step.number}
              </div>


              <h3 className="text-xl font-bold mt-4">
                {step.title}
              </h3>


              <p className="text-gray-600 mt-3 leading-relaxed">
                {step.description}
              </p>


            </div>

          ))}


        </div>


      </div>

    </section>
  );
}