import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { ProductCartContainer, Footer, Name, Price } from "./ProductCardStyles";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name className="name">{name}</Name>
        <Price className="price">{price}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
        Add to card
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
