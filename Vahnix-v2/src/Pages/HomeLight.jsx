// src/pages/HomeLight.jsx
import React from "react";
import AnimatedBackground from "../Components/AnimatedBackground";
import CursorGlow from "../Components/CursorGlow";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Services from "../Components/Services"; // carousel version
import Contact from "../Components/Contact"; // the form section
import Footer from "../Components/Footer";

export default function HomeLight() {
  return (
    <>
      <AnimatedBackground />
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}