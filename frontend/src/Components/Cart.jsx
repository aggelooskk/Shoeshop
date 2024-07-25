import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../slices/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <>
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <h3>Your cart is empty</h3>
      ) : (
        <ul>
          {cart.cartItems.map((item) => (
            <li key={item._id}>
              {item.name} - ${item.price}
              <button onClick={() => removeFromCartHandler(item._id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cart;
