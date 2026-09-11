import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import ContactButton from "../components/layout/ContactButton";

function MainLayout() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
      {/* <ContactButton/> */}
    </div>
  );
}

export default MainLayout;