import Product from "../Product/Product";
import { memo } from "react";

import "./ProductList.css";

const ProductList = ({ products, onDelete }) => {
  return (
    <div className="product-list">
      {products.map((item) => (
        <Product key={item.id} product={item} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default memo(ProductList);
