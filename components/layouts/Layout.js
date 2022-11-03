import React from "react";

import Navigation from "../indexPage/Navigation";

import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      {children}
      <Footer />
    </div>
  );
}
