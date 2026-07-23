"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [message, setMessage] = useState("");

  const sendWhatsApp = () => {
    const whatsappMessage = `
Hello Rising Sun Motors,

Name: ${name}
Email: ${email}
Vehicle Interested In: ${vehicle}

Message:
${message}
`;

    const url = `https://wa.me/923337411400?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-[#0B2E59] to-black text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>

          <p className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
            Let's Find Your
            <br />
            Perfect Japanese Car
          </h2>

          <p className="text-gray-300 mt-6 text-lg leading-8">
            Contact Rising Sun Motors for auction vehicles, stock availability,
            pricing and worldwide shipping. Our team is ready to assist you.
          </p>

          <div className="mt-10 space-y-6">

            <div className="flex items-center gap-4">
              <span className="text-3xl">📱</span>
              <div>
                <h4 className="font-semibold">WhatsApp</h4>
                <p className="text-gray-300">+92 333 7411400</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-3xl">📧</span>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-300">
                  info@risingsunmotors.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-3xl">📍</span>
              <div>
                <h4 className="font-semibold">Office</h4>
                <p className="text-gray-300">
                  Pakistan | Japan Export Service
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-3xl">🕒</span>
              <div>
                <h4 className="font-semibold">Business Hours</h4>
                <p className="text-gray-300">
                  Monday - Saturday (9:00 AM - 7:00 PM)
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">

          <h3 className="text-3xl font-bold text-[#0B2E59]">
            Send Inquiry
          </h3>

          <p className="text-gray-500 mt-2">
            Fill the form and we'll reply on WhatsApp.
          </p>

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-6 border border-gray-300 rounded-xl px-5 py-4 text-black focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-4 border border-gray-300 rounded-xl px-5 py-4 text-black focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          />

          <input
            type="text"
            placeholder="Vehicle Interested In"
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
            className="w-full mt-4 border border-gray-300 rounded-xl px-5 py-4 text-black focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          />

          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full mt-4 border border-gray-300 rounded-xl px-5 py-4 h-36 text-black resize-none focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          />

          <button
            onClick={sendWhatsApp}
            className="w-full mt-6 bg-[#D4AF37] text-black py-4 rounded-xl font-bold hover:bg-yellow-400 duration-300"
          >
            Send Inquiry on WhatsApp
          </button>

        </div>

      </div>
    </section>
  );
}