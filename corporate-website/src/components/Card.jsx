import React from "react";

export default function Card({ item, onOpen }) {
  return (
    <article className="card" onClick={onOpen} tabIndex={0} onKeyDown={(e)=>{ if(e.key==="Enter") onOpen(); }}>
      <div className="card-media" style={{ backgroundImage: `url(${item.img})` }}>
        <div className="card-overlay">
          <span className="category">{item.category}</span>
        </div>
      </div>
      <div className="card-body">
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
        <div className="card-meta">
          <button className="btn small" onClick={(e)=>{ e.stopPropagation(); onOpen(); }}>View</button>
        </div>
      </div>
    </article>
  );
}
