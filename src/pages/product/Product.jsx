import React from "react";
import ProductBanner from "./ProductBanner";
import ProductFirst from "./ProductFirst";
import ProductSecond from "./ProductSecond";
import ScheduleCall from "../../components/ScheduleCall";
import ContactCTA from "../../components/ContactCTA";
import Footer from "../../components/Footer";

const ProductPage = () => {
  return (
    <>
      <ProductBanner />
      <ProductFirst />
      <ProductSecond />
      <ScheduleCall />
      <ContactCTA />
      <Footer />
    </>
  );
};

export default ProductPage;