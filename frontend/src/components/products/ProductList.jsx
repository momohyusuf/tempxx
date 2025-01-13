import React from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </section>
  );
};

export default ProductList;
