import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

export default function CartItem() {
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();

  const handleIncrease = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cart.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>${item.price} x {item.quantity}</p>

          <button onClick={() => handleIncrease(item)}>+</button>
          <button onClick={() => handleDecrease(item)}>-</button>

          <button onClick={() => dispatch(removeItem(item.id))}>
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ${total}</h3>

      <button>Checkout</button>
    </div>
  );
}