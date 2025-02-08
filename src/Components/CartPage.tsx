
// "use client";

import { useShoppingCart } from "use-shopping-cart";

const CartPageComponent = () => {
  const { cartCount, cartDetails, removeItem, totalPrice } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Cart</h1>
      <p>Total Items: {cartCount}</p>
      <p>Total Price: ${totalPrice}</p>

      {cartDetails &&
        Object.entries(cartDetails).map(([key, item]: any) => (
          <div key={key} style={{ border: "1px solid black", padding: 10, margin: 10 }}>
            <h2>{item.name}</h2>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => removeItem(key)}>Remove</button>
          </div>
        ))}
    </div>
  );
};

export default CartPageComponent;
