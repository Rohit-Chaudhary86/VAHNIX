import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Services from "../Components/Services";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import AnimatedBackground from "../Components/AnimatedBackground";
import TechStack from "../Components/TechStack";
import TeamVision from "../Components/TeamVision";
import FAQ from "../Components/FAQ";

export default function Home() {
  return (
    <div>
      <AnimatedBackground />
      <Navbar />
      <main className="px-6 md:px-12 lg:px-24">
        <Hero />
        <About />
        <Services />
        
        <div className="my-24"> {/* Creates 6rem (96px) space top and bottom */}
          <TechStack />
        </div>
        
        <div className="my-24">
          <TeamVision />
        </div>
        
        <div className="my-24">
          <FAQ />
        </div>
        
        <div className="mt-24">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}