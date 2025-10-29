import React from "react";
import Pagebar from "../components/Pagebar/Pagebar";
import ProductGrid from "../components/ProductGrid/ProductGrid";

const page = () => {
  return (
    <div>
      <Pagebar pagename={"Shop"} />
      <ProductGrid/>
    </div>
  );
};

export default page;
