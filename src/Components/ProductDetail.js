import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  const pobj = useOutletContext();
  return (
    <div>
      <h1>ProductDetail {id}</h1>
      <h2>{JSON.stringify(pobj[id - 1])}</h2>
    </div>
  );
};

export default ProductDetail;
