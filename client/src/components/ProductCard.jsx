import React from "react";
import product from '../assets/images/product.jpg'

const ProductCard = () => {
  return (
    <div className="card bg-base-100 w-full shadow-sm">
      <figure className="px-10 pt-10">
        <img
          src={product}
          alt="Pet Food"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Food Name</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
