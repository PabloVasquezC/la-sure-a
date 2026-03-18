import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MenuHighlights from "@/components/MenuHighlights";
import Gallery from "@/components/Gallery";
import AboutSection from "@/components/AboutSection";
import LocationSection from "@/components/LocationSection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <AboutSection />
      <MenuHighlights />
      <Gallery />
      <LocationSection />
      <Footer />
    </main>
  );
}
