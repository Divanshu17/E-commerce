import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import SearchBar from "../components/SearchBar";
import productsData from "../data/products.json";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [view, setView] = useState("grid");
  const [filters, setFilters] = useState({
    category: searchParams.get("category") || "all",
    minPrice: "",
    maxPrice: "",
    rating: "all",
    sort: "featured",
  });
  const [search, setSearch] = useState("");

  useEffect(() => {
    setProducts(productsData);
  }, []);

  useEffect(() => {
    let result = [...products];

    // Apply search
    if (search) {
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(search.toLowerCase()) ||
          p.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Apply category filter
    if (filters.category !== "all") {
      result = result.filter((p) => p.category === filters.category);
    }

    // Apply price filter
    if (filters.minPrice) {
      result = result.filter((p) => p.price >= Number(filters.minPrice));
    }
    if (filters.maxPrice) {
      result = result.filter((p) => p.price <= Number(filters.maxPrice));
    }

    // Apply rating filter
    if (filters.rating !== "all") {
      result = result.filter((p) => p.rating >= Number(filters.rating));
    }

    // Apply sorting
    switch (filters.sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // featured - no sorting needed
        break;
    }

    setFilteredProducts(result);
  }, [products, filters, search]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container mx-auto py-8 px-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters Sidebar */}
        <div className="w-full md:w-64 bg-white rounded-lg shadow p-6">
          <h3 className="font-semibold text-lg mb-4">Filters</h3>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Category</label>
            <select
              name="category"
              value={filters.category}
              onChange={handleFilterChange}
              className="w-full border rounded px-3 py-2"
            >
              <option value="all">All Categories</option>
              <option value="Electronics">Electronics</option>
              <option value="Fashion">Fashion</option>
              <option value="Home & Living">Home & Living</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Price Range
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                name="minPrice"
                placeholder="Min"
                value={filters.minPrice}
                onChange={handleFilterChange}
                className="w-full border rounded px-3 py-2"
              />
              <input
                type="number"
                name="maxPrice"
                placeholder="Max"
                value={filters.maxPrice}
                onChange={handleFilterChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Rating</label>
            <select
              name="rating"
              value={filters.rating}
              onChange={handleFilterChange}
              className="w-full border rounded px-3 py-2"
            >
              <option value="all">All Ratings</option>
              <option value="4">4+ Stars</option>
              <option value="3">3+ Stars</option>
              <option value="2">2+ Stars</option>
            </select>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
            <SearchBar
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <div className="flex items-center gap-4">
              <select
                name="sort"
                value={filters.sort}
                onChange={handleFilterChange}
                className="border rounded px-3 py-2"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>

              <div className="flex gap-2">
                <button
                  className={`px-3 py-1 rounded ${
                    view === "grid" ? "bg-blue-600 text-white" : "bg-gray-200"
                  }`}
                  onClick={() => setView("grid")}
                >
                  Grid
                </button>
                <button
                  className={`px-3 py-1 rounded ${
                    view === "list" ? "bg-blue-600 text-white" : "bg-gray-200"
                  }`}
                  onClick={() => setView("list")}
                >
                  List
                </button>
              </div>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">No products found</p>
            </div>
          ) : (
            <ProductGrid products={filteredProducts} view={view} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
