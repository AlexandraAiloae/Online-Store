import React, { useContext} from "react";
import "./CategoriesPreviewPageStyles.css"
import Navbar from "../../components/navbarMainPage/Navbar";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/CategoryPreview";

const CategoriesPreviewPage = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className="categories-preview-page">
      <Navbar Navbar color="#111" />
      <div className='categories-preview-page-container'>
      {Object.keys(categoriesMap).map((key) => {
        const products = categoriesMap[key];
        return <CategoryPreview key={key} title={key} products={products} />;
      })}
    </div>
    </div>
  );
};

export default CategoriesPreviewPage;
