import React from "react";
import SectionTitle from "../../components/SectionTitle";
import Banner from "./Banner";
import ProductCard from "../../components/ProductCard";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <SectionTitle title={"Top Sale Prducts"}></SectionTitle>
      <div className="grid lg:grid-cols-3 justify-center items-center gap-4 px-4">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
    </div>
  );
};

export default Home;
