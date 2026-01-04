import { useState } from "react";
import Layout from "./components/Layout";
import ProductCard from "./components/ProductCard";
import Filters from "./components/Filters";
import Navigation from "./components/Navigation";
import { PRODUCTS } from "./data/products";

export default function App() {
  const [index, setIndex] = useState(0);
  const [ownerFilter, setOwnerFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  const filtered = PRODUCTS.filter((p) => {
    const ownerMatch = ownerFilter ? p.owner === ownerFilter : true;

    const priceMatch =
      priceFilter === ""
        ? true
        : priceFilter === "low"
        ? p.price < 300
        : priceFilter === "mid"
        ? p.price >= 300 && p.price <= 800
        : p.price > 800;

    return ownerMatch && priceMatch;
  });

  const product =
    filtered.length > 0
      ? filtered[index % filtered.length]
      : null;

  const next = () => {
    if (filtered.length > 0) {
      setIndex((i) => (i + 1) % filtered.length);
    }
  };

  const prev = () => {
    if (filtered.length > 0) {
      setIndex((i) => (i === 0 ? filtered.length - 1 : i - 1));
    }
  };

  const owners = [...new Set(PRODUCTS.map((p) => p.owner))];

  return (
    <Layout>
      <Filters
        ownerFilter={ownerFilter}
        setOwnerFilter={setOwnerFilter}
        priceFilter={priceFilter}
        setPriceFilter={setPriceFilter}
        owners={owners}
      />

      {product ? (
        <>
          <ProductCard product={product} />
          <Navigation next={next} prev={prev} />
        </>
      ) : (
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          No products match your selected filters ❗
        </p>
      )}
    </Layout>
  );
}
