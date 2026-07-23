import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCars from "@/components/FeaturedCars";
import Stock from "@/components/Stock";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowToBuy from "@/components/HowToBuy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      <Navbar />

      <Hero />

      <FeaturedCars />

      <Stock />

      <WhyChooseUs />

      <HowToBuy />

      <Contact />

      <Footer />

      <WhatsAppButton />

    </main>
  );
}