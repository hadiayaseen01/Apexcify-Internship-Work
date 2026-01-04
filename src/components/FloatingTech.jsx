import { useState, useEffect } from "react";

function FloatingTech() {
  const techIcons = [ "💻", "🌐", "⚛️", "🎨", "JS", "HTML", "CSS", "React",
  "Node.js", "Python", "SQL", "Git", "GitHub", "Bootstrap",
  "Figma", "Canva", "API", "TypeScript", "Tailwind", "Next.js",
  "VSCode", "Linux", "JSON", "Redux", "Webpack"];
  const [items, setItems] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomTech = techIcons[Math.floor(Math.random() * techIcons.length)];
      const randomX = Math.floor(Math.random() * window.innerWidth); // random horizontal position
      const randomY = Math.floor(Math.random() * window.innerHeight); // random vertical position

      setItems(prev => [
        ...prev,
        { id: Date.now(), tech: randomTech, x: randomX, y: randomY }
      ]);

      // remove old items after 3 seconds
      setTimeout(() => {
        setItems(prev => prev.slice(1));
      }, 3000);

    }, 1000); // every 1 second

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {items.map(item => (
        <span
          key={item.id}
          style={{
            position: "fixed",
            top: item.y,
            left: item.x,
            fontSize: "1.5rem",
            animation: "floatUp 3s ease-in-out forwards",
            pointerEvents: "none",
          }}
        >
          {item.tech}
        </span>
      ))}
    </>
  );
}

export default FloatingTech;
