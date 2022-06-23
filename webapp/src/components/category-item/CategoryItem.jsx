﻿import './CategoryItemStyles.css'

const CategoryItem = ({ category }) => {
    const { imageUrl, title } = category;
    return (
      <div className='category-container'>
        <div
          className='background-image'
          style={{
            backgroundImage: `url(${imageUrl})`, //this allow me to use a string variable inside of another string
          }}
        />
        <div className='category-body-container'>
          <h3>{title}</h3>
          <p>Shop Now</p>
        </div>
      </div>
    );
  };

  export default CategoryItem;