import React from "react";
import ProductBanner from "./ProductBanner";
import ProductFirst from "./ProductFirst";
import Footer from "../../components/Footer";
import ScheduleCall from "../../components/ScheduleCall";
import ContactCTA from "../../components/ContactCTA";
const ProductPage = () => {
  return (
    <>
      <ProductBanner />
      <ProductFirst />
      <ScheduleCall />
      <ContactCTA />
      <Footer />
    </>
  );
};

export default ProductPage;
