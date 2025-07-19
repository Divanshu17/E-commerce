import React from "react";
import ProductCard from "./ProductCard";

function ProductGrid({ products, view }) {
  if (view === "list") {
    return (
      <div className="flex flex-col gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded shadow p-4 flex gap-4 items-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-24 w-24 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
              <p className="text-yellow-500">⭐ {product.rating}</p>
            </div>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    );
  }
  // grid view
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
