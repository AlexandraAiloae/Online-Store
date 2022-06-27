import "./CategoryStyles.css";

import { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ProductCart from "../../components/product-cart/ProductCart";
import Navbar from "../../components/navbarMainPage/Navbar";
import Spinner from "../../components/spinner/spinner.component";

import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/category.selector";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="categ">
      <Navbar color="#111" />
      <div className="categ-section">
        <h2 className="category-title">{category.toUpperCase()}</h2>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="category-container">
            {products &&
              products.map((product) => (
                <ProductCart key={product.id} product={product} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
