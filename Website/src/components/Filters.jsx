import React from "react";

export default function Filters({ categories, category, setCategory, query, setQuery }) {
  return (
    <div className="filters">
      <div className="filter-left">
        <label className="search">
          <input
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search products"
          />
        </label>
      </div>
      <div className="filter-right">
        {categories.map(cat => (
          <button
            key={cat}
            className={`chip ${cat === category ? "active" : ""}`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
