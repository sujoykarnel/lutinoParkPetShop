import React from "react";
import SectionTitle from "../../components/SectionTitle";
import Banner from "./Banner";
import FeaturedItems from "./FeaturedItems";
import TopSaleProducts from "./TopSaleProducts";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <div className="px-4">
        <SectionTitle title={"Top Sale Products"}></SectionTitle>
        <TopSaleProducts></TopSaleProducts>
        <div className="grid lg:grid-cols-2 text-white text-4xl font-bold italic bg-neutral-600 mt-4">
          <a
            href={`https://wa.me/8801872956644`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="h-40 flex items-center justify-center">
              <IoLogoWhatsapp className="mr-2" /> <p>+8801872956644</p>
            </div>
          </a>

          <a
            href={`https://m.me/lutinoparkpetshop`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="h-40 flex items-center justify-center">
              <FaFacebookMessenger className="mr-2" />
              <p>Lutino Park Pet Shop</p>
            </div>
          </a>
        </div>
        <SectionTitle title={"Featured Products"}></SectionTitle>
        <FeaturedItems></FeaturedItems>
        <SectionTitle title={"Review"}></SectionTitle>
      </div>
    </div>
  );
};

export default Home;
