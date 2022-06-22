import { useContext } from "react";
import "./CartIconStyles.css";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = (props) => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" style={{ fill: props.color }} />
      <span className="item-count" style={{ fontFamily: "serif", color: props.color }}>
        {cartCount}
      </span>
    </div>
  );
};

export default CartIcon;
