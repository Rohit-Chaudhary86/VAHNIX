import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Services from "../Components/Services";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import AnimatedBackground from "../Components/AnimatedBackground";

export default function Home() {
  return (
    <div>
      <AnimatedBackground />
      <Navbar />
      <main className="px-6 md:px-12 lg:px-24">
        <Hero />
        <About />
        {/* <div className="h-32 md:h-48 bg-gradient-to-b from-white via-white/10 to-transparent" /> */}
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
