import React from "react";
import { Link } from "react-router-dom";
import NavbarLight from "../Components/Navbar";
import FooterLight from "../Components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50/30 flex flex-col">
      <NavbarLight />
      <div className="flex-1 flex items-center justify-center text-center px-6">
        <div>
          <h1 className="text-9xl font-black text-purple-600">404</h1>
          <p className="text-2xl text-gray-700 mt-8">Page Not Found</p>
          <Link
            to="/"
            className="mt-10 inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-emerald-500 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all"
          >
            Return Home
          </Link>
        </div>
      </div>
      <FooterLight />
    </div>
  );
}