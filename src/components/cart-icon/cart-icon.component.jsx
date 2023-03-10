import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartIconContainer, ShoppingIconContainer, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
    const toogleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={toogleIsCartOpen}>
            <ShoppingIconContainer>
                <ShoppingIcon />
            </ShoppingIconContainer>
            <ItemCount>{`${cartCount}`}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;