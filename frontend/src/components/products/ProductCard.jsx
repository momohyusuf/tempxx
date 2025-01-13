import React from "react";
import { Button } from "antd";
import { Link } from "react-router";

const ProductCard = () => {
  return (
    <div className="border p-1 rounded-md hover:shadow-2xl transition-all duration-500 ">
      <img
        src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/05856ac7-0129-4395-bd6e-2fe2669025fb/custom-nike-dunk-low-by-you-su24.png"
        alt="Product name"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">Product Name</h3>
        <p className="mb-2">N20000</p>

        <Link to={"/products/66666"}>
          <Button block type="primary">
            View Item
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
