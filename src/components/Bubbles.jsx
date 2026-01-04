import { useState, useEffect } from "react";

function Bubbles({ trigger }) {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    if (!trigger) return;

    const newBubbles = [];
    const bubbleCount = 30;
    const gap = 20; // minimum horizontal gap between bubbles

    for (let i = 0; i < bubbleCount; i++) {
      let left;
      let attempts = 0;

      // Ensure bubbles are not too close horizontally
      do {
        left = Math.random() * window.innerWidth;
        attempts++;
      } while (newBubbles.some(b => Math.abs(b.left - left) < gap) && attempts < 10);

      newBubbles.push({
        id: Math.random(),
        size: Math.random() * 70 + 50, // 50px to 120px
        left,
        color: `hsl(${Math.random() * 360}, 70%, 60%)`,
        duration: Math.random() * 2 + 2, // 2s to 4s
      });
    }

    setBubbles(newBubbles);

    // Remove bubbles after animation
    const timer = setTimeout(() => setBubbles([]), 4000);
    return () => clearTimeout(timer);
  }, [trigger]);

  return (
    <>
      {bubbles.map(bubble => (
        <div
          key={bubble.id}
          className="bubble"
          style={{
            width: bubble.size + "px",
            height: bubble.size + "px",
            left: bubble.left + "px",
            backgroundColor: bubble.color,
            animationDuration: bubble.duration + "s",
          }}
        />
      ))}
    </>
  );
}

export default Bubbles;
