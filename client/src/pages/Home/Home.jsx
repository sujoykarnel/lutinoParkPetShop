import React from "react";
import SectionTitle from "../../components/SectionTitle";
import Banner from "./Banner";
import ProductCard from "../../components/ProductCard";

const Home = () => {
  return (
    <div className="space-y-4">
      <Banner></Banner>
      <SectionTitle title={"Top Sale Prducts"}></SectionTitle>
      <div className="grid grid-cols-3 gap-4">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
    </div>
  );
};

export default Home;
