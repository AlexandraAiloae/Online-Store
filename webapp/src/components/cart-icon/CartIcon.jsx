import { ShoppingIcon, CartIconContainer, ItemCount } from "./CartIconStyles";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

const CartIcon = (props) => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

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
