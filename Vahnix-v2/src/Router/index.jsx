// src/router/index.jsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Home from "../Pages/Home";
import ServicesPage from "../Pages/ServicePage";
import ServiceDetail from "../Pages/ServiceDetail";
import Contact from "../Pages/Contact";
import OurApproaches from "../Pages/OurApproaches.jsx"; // Updated to match folder name
import MethodologyDetailPage from "../Pages/MethodologyDetailPage.jsx"; // Updated to match folder name
import Meet from "../Pages/Meet";
import NotFound from "../Pages/NotFound";

// Global Components (shared across pages)
import AnimatedBackground from "../Components/AnimatedBackground";
import CursorGlow from "../Components/CursorGlow";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <AnimatedBackground />
        <CursorGlow />
        <Home />
      </>
    ),
  },
  {
    path: "/services",
    element: (
      <>
        <AnimatedBackground />
        <CursorGlow />
        <ServicesPage />
      </>
    ),
  },
  {
    path: "/services/:slug",
    element: (
      <>
        <AnimatedBackground />
        <CursorGlow />
        <ServiceDetail />
      </>
    ),
  },
  {
    path: "/our-approach", // Route stays the same
    element: (
      <>
        <AnimatedBackground />
        <CursorGlow />
        <OurApproaches /> {/* Updated: Now imports OurApproaches */}
      </>
    ),
  },
  {
    path: "/methodology/:id",
    element: (
      <>
        <AnimatedBackground />
        <CursorGlow />
        <MethodologyDetailPage /> {/* Updated: Now imports MethodologyDetailPage */}
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <AnimatedBackground />
        <CursorGlow />
        <Contact />
      </>
    ),
  },
  {
    path: "/meet",
    element: (
      <>
        <AnimatedBackground />
        <CursorGlow />
        <Meet />
      </>
    ),
  },
  {
    path: "*", // 404 fallback
    element: (
      <>
        <AnimatedBackground />
        <CursorGlow />
        <NotFound />
      </>
    ),
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}