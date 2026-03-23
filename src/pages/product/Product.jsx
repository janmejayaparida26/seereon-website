import React from "react";
import ProductBanner from "./ProductBanner";
import ProductFirst from "./ProductFirst";
import ProductsSecond from "./ProductsSecond";
import ScheduleCall from "../../components/ScheduleCall";
import ContactCTA from "../../components/ContactCTA";
import Footer from "../../components/Footer";

const ProductPage = () => {
  return (
    <>
      <ProductBanner />
      <ProductFirst />
      <ProductsSecond />
      <ScheduleCall />
      <ContactCTA />
      <Footer />
    </>
  );
};

export default ProductPage;