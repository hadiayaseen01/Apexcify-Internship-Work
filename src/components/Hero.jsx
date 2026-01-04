import { useState } from "react";
import FloatingTech from "./FloatingTech.jsx";
import Bubbles from "./Bubbles.jsx";

function Hero() {
  const [triggerBubbles, setTriggerBubbles] = useState(false);

  const handleScroll = (sectionId) => {
    if (sectionId === "projects") setTriggerBubbles(true); // trigger bubbles for Projects
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-section d-flex align-items-center position-relative">
      <FloatingTech />
      <Bubbles trigger={triggerBubbles} /> {/* bubbles animation */}
      <div className="text-center w-100" data-aos="fade-up">
        <h1 className="display-4 fw-bold">
          Hello, I'm <span className="text-danger">Hadia Yaseen</span>
        </h1>
        <p className="lead mt-3">
          Web Developer • React Enthusiast • Tech Explorer
        </p>

        {/* Buttons container */}
        <div className="hero-buttons mt-4">
          <button className="hero-btn" onClick={() => handleScroll("about")}>About Me</button>
          <button className="hero-btn" onClick={() => handleScroll("skills")}>Skills</button>
          <button className="hero-btn" onClick={() => handleScroll("projects")}>Projects</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
