import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/CartSlice";

export default function CartItem() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cart</h2>

      {items.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        items.map(item => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>${item.price} x {item.quantity}</p>
            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}