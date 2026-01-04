import React, { useEffect } from "react";

export default function Lightbox({ item, onClose, onNext, onPrev }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onNext, onPrev]);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.title}>
      <div className="lightbox-inner">
        <button className="lightbox-close" onClick={onClose} aria-label="Close">&times;</button>
        <button className="lightbox-prev" onClick={onPrev} aria-label="Previous">‹</button>
        <div className="lightbox-content">
          <img src={item.img} alt={item.title} />
          <div className="lightbox-info">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <span className="chip">{item.category}</span>
          </div>
        </div>
        <button className="lightbox-next" onClick={onNext} aria-label="Next">›</button>
      </div>
      <div className="lightbox-backdrop" onClick={onClose} />
    </div>
  );
}
