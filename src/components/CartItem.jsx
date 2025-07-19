import React from "react";
import { useCart } from "../context/CartContext";

function CartItem({ item }) {
  const { dispatch } = useCart();

  const handleRemove = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item.id });
  };

  const handleQuantity = (e) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id: item.id, quantity: Number(e.target.value) },
    });
  };

  return (
    <div className="flex items-center gap-4 bg-gray-50 rounded p-4 mb-2">
      <img
        src={item.image}
        alt={item.name}
        className="h-20 w-20 object-cover rounded"
      />
      <div className="flex-1">
        <h4 className="font-semibold">{item.name}</h4>
        <p>${item.price}</p>
        <div className="flex items-center gap-2 mt-2">
          <label>Qty:</label>
          <input
            type="number"
            min={1}
            value={item.quantity}
            onChange={handleQuantity}
            className="w-16 border rounded px-2 py-1"
          />
        </div>
      </div>
      <button className="text-red-600 underline" onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;
