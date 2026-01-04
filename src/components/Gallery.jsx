import React, { useState, useMemo } from "react";
import itemsData from "../data";
import Card from "./Card"
import Lightbox from "./Lightbox";
import Filters from "./Filters";

export default function Gallery() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const categories = useMemo(() => ["All", ...Array.from(new Set(itemsData.map(i => i.category)))], []);

  const filtered = useMemo(() => {
    return itemsData.filter(it => {
      const matchesCategory = category === "All" || it.category === category;
      const matchesQuery =
        !query ||
        it.title.toLowerCase().includes(query.toLowerCase()) ||
        it.desc.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  function openLightbox(index) {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    setSelectedIndex(null);
    document.body.style.overflow = "";
  }

  return (
    <section id="products" className="container gallery-section">
      <h2  style={{fontSize:40, marginTop: 0}} className="section-title">Our Products</h2>
      <Filters
        categories={categories}
        category={category}
        setCategory={setCategory}
        query={query}
        setQuery={setQuery}
      />

      <div className="grid" aria-live="polite">
        {filtered.map((item, idx) => (
          <Card
            key={item.id}
            item={item}
            onOpen={() => openLightbox(idx)}
            index={idx}
          />
        ))}
        {filtered.length === 0 && <p className="empty">No results — try a different filter.</p>}
      </div>



      {selectedIndex !== null && filtered[selectedIndex] && (
        <Lightbox
          item={filtered[selectedIndex]}
          onClose={closeLightbox}
        />
      )}
    </section>
  );
}
