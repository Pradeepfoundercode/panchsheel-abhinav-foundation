import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/Home/Home";
import { DonateSection } from "../components/common";
import WhoWeAre from "../pages/About/WhoWeAre";
import WhatWeDoPage from "../pages/WhatWeDo/WhatWeDoPage";
import ContactPage from "../pages/Contact/ContactPage";
import OurPartnersPage from "../pages/Partners/OurPartnersPage";
import OurServicesPage from "../pages/OurServices/OurServicesPage";
import Details from "../pages/About/Details";


function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/our-services" element={<OurServicesPage />} />
        <Route path="/services" element={<OurServicesPage />} />
        <Route path="/our-partners" element={<OurPartnersPage />} />
        <Route path="/donate" element={<DonateSection />} />
        <Route path="/careers-2" element={<WhoWeAre />} />
        <Route path="/what-we-do" element={<WhatWeDoPage />} />
        <Route path="/ngo-for-disabled-children-in-lucknow" element={<WhatWeDoPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/details/:id" element={<Details />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
