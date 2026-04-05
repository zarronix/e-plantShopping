import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { useState } from "react";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Succulents", image: "https://via.placeholder.com/100" },
  { id: 2, name: "Snake Plant", price: 15, category: "Succulents", image: "https://via.placeholder.com/100" },
  { id: 3, name: "Money Plant", price: 12, category: "Indoor", image: "https://via.placeholder.com/100" },
  { id: 4, name: "Peace Lily", price: 18, category: "Indoor", image: "https://via.placeholder.com/100" },
  { id: 5, name: "Spider Plant", price: 11, category: "Air Purifying", image: "https://via.placeholder.com/100" },
  { id: 6, name: "Fern", price: 14, category: "Air Purifying", image: "https://via.placeholder.com/100" }
];

export default function ProductList() {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState([]);

  const handleAdd = (plant) => {
    dispatch(addItem(plant));
    setAddedItems([...addedItems, plant.id]);
  };

  return (
    <div>
      <h2>Plants</h2>

      {plants.map(p => (
        <div key={p.id}>
          <img src={p.image} alt={p.name} />
          <h3>{p.name}</h3>
          <p>Category: {p.category}</p>
          <p>${p.price}</p>

          <button
            onClick={() => handleAdd(p)}
            disabled={addedItems.includes(p.id)}
          >
            {addedItems.includes(p.id) ? "Added" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
}