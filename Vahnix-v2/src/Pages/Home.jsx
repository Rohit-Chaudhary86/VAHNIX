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

// import React from "react";
// import Navbar from "../Components/Navbar";
// import Hero from "../Components/Hero";
// import CyberSecurityCompass from "../Components/compass"; // Add this import
// import About from "../Components/About";
// import Services from "../Components/Services";
// import Contact from "../Components/Contact";
// import Footer from "../Components/Footer";
// import AnimatedBackground from "../Components/AnimatedBackground";
// import TechStack from "../Components/TechStack";
// import TeamVision from "../Components/TeamVision";
// import FAQ from "../Components/FAQ";

// export default function Home() {
//   return (
//     <div>
//       <AnimatedBackground />
//       <Navbar />
//       <main className="px-6 md:px-12 lg:px-24">
//         <Hero />
        
//         {/* Add the Compass Section Here */}
//         <div className="py-12 bg-gradient-to-b from-blue-50/30 to-gray-50/30 -mx-6 md:-mx-12 lg:-mx-24 px-6 md:px-12 lg:px-24 my-12">
//           <div className="max-w-7xl mx-auto">
//             <div className="text-center mb-8">
//               <h3 className="text-xl font-semibold text-gray-800 mb-3">
//                 Threat Direction Intelligence
//               </h3>
//               <p className="text-sm text-gray-600 max-w-md mx-auto">
//                 Real-time compass showing active threat vectors and security bearing
//               </p>
//             </div>
//             <CyberSecurityCompass />
//             <div className="mt-8 text-center">
//               <p className="text-xs text-gray-500">
//                 Continuously scanning 360° for emerging cyber threats
//               </p>
//             </div>
//           </div>
//         </div>
//         {/* End Compass Section */}
        
//         <About />
//         <Services />
        
//         <div className="my-24"> {/* Creates 6rem (96px) space top and bottom */}
//           <TechStack />
//         </div>
        
//         <div className="my-24">
//           <TeamVision />
//         </div>
        
//         <div className="my-24">
//           <FAQ />
//         </div>
        
//         <div className="mt-24">
//           <Contact />
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// }