import React, { useState } from "react";

import { Link, Outlet } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState([
    { id: 1, pName: "Apples", price: 50 },
    { id: 2, pName: "Bananas", price: 5 },
    { id: 3, pName: "Grapes", price: 30 },
    { id: 4, pName: "Orange", price: 20 },
  ]);

  return (
    <div>
      <ul>
        {product.map((prod) => {
          return (
            <li>
              <Link
                to={`/product/${prod.id}`}
                style={{ textDecoration: "none" }}
              >
                {prod.pName}
              </Link>
            </li>
          );
        })}
      </ul>
      <Outlet context={product} />
    </div>
  );
};

export default Product;
