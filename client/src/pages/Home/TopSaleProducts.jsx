import React from 'react';
import ProductCard from '../../components/ProductCard';

const TopSaleProducts = () => {
    return (
      <div className="grid lg:grid-cols-3 justify-center items-center gap-4">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
    );
};

export default TopSaleProducts;