import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CheckoutItemContainer, ImageContainer, RemoveButton, Quantity, Arrow, Value, Name } from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
    const { removeAllItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);
    const { name, price, imageUrl, quantity } = cartItem;
    const clearItemHandler = () => removeAllItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);

    return (
        <CheckoutItemContainer>
            <ImageContainer><img src={imageUrl} alt={`${name}`} /></ImageContainer>
            <Name>{name}</Name>
            <Quantity>
                <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>&#10095;</Arrow>
            </Quantity>
            <Name>{price}</Name>
            <RemoveButton onClick={clearItemHandler}> &#10005; </RemoveButton>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;