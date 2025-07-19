import React from "react";
import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="container mx-auto py-20 text-center">
      <h2 className="text-3xl font-bold mb-4 text-green-600">
        Order Placed Successfully!
      </h2>
      <p className="mb-4">Thank you for shopping with us.</p>
      <Link to="/products" className="text-blue-600 underline">
        Continue Shopping
      </Link>
    </div>
  );
}

export default Success;
