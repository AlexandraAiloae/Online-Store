import React from "react";
import { Link } from "react-router-dom";
import "./CategoryPreviewStyles.css";
import ProductCard from "../product-card/ProductCard";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title} color="#111">
          {title.toUpperCase()}{" "}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 5)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
