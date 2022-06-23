import { useContext } from "react";
import { ShoppingIcon, CartIconContainer, ItemCount } from "./CartIconStyles";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = (props) => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" style={{ fill: props.color }} />
      <ItemCount style={{ fontFamily: "serif", color: props.color }}>
        {cartCount}
      </ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
