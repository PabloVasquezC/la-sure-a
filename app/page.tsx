import Navbar from "@/components/Navbar";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MenuHighlights from "@/components/MenuHighlights";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <MenuHighlights />
      <Gallery />
      <Footer />
    </main>
  );
}
