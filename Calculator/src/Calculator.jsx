import { useState, useEffect } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("");
  const [theme, setTheme] = useState("dark");
  const [history, setHistory] = useState([]);
  const [scientificMode, setScientificMode] = useState(false);

  const append = (val) => setDisplay((prev) => prev + val);
  const clear = () => setDisplay("");

  // ==========================
  //   MAIN CALCULATE FUNCTION
  // ==========================
 const calculate = () => {
  try {
    let expr = display;

    // Auto-close missing parentheses
    const open = (expr.match(/\(/g) || []).length;
    const close = (expr.match(/\)/g) || []).length;
    const missing = open - close;
    if (missing > 0) {
      expr += ')'.repeat(missing); // add required closing brackets
    }

    // Replace scientific symbols with JS equivalents
    expr = expr
      .replace(/÷/g, "/")
      .replace(/×/g, "*")
      .replace(/π/g, Math.PI)
      .replace(/e/g, Math.E)
      .replace(/\^2/g, "**2")
      .replace(/sqrt\(/g, "Math.sqrt(")
      .replace(/sin\(/g, "Math.sin(")
      .replace(/cos\(/g, "Math.cos(")
      .replace(/tan\(/g, "Math.tan(")
      .replace(/log\(/g, "Math.log10(")
      .replace(/ln\(/g, "Math.log(");

    // eslint-disable-next-line no-eval
    const result = eval(expr);

    setHistory((prev) => [...prev, `${display} = ${result}`]);
    setDisplay(String(result));
  } catch {
    setDisplay("Error");
  }
};


  // ==========================
  //   KEYBOARD SUPPORT
  // ==========================
  useEffect(() => {
    const keyDown = (e) => {
      if ("0123456789+-*/.".includes(e.key)) append(e.key);
      if (e.key === "Enter") calculate();
      if (e.key === "Backspace") setDisplay((p) => p.slice(0, -1));
      if (e.key === "Escape") clear();
    };

    window.addEventListener("keydown", keyDown);
    return () => window.removeEventListener("keydown", keyDown);
  }, []);

  return (
    <div className={`calculator ${theme}`}>
      {/* Theme + Mode Toggle */}
      <div className="top-bar">
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
        </button>

        <button onClick={() => setScientificMode(!scientificMode)}>
          {scientificMode ? "🔢 Basic" : "🧪 Scientific"}
        </button>
      </div>

      {/* Display */}
      <input className="display" value={display} readOnly />

      {/* Scientific Buttons */}
      {scientificMode && (
        <div className="scientific">
          <button onClick={() => append("sin(")}>sin</button>
          <button onClick={() => append("cos(")}>cos</button>
          <button onClick={() => append("tan(")}>tan</button>
          <button onClick={() => append("log(")}>log</button>
          <button onClick={() => append("ln(")}>ln</button>
          <button onClick={() => append("sqrt(")}>√</button>
          <button onClick={() => append("^2")}>x²</button>
          <button onClick={() => append("π")}>π</button>
          <button onClick={() => append("e")}>e</button>
        </div>
      )}

      {/* Normal Buttons */}
      <div className="buttons fade-in">
        <button className="clear span-3" onClick={clear}>Clear</button>
        <button onClick={() => append("÷")}>÷</button>
        <button onClick={() => append("×")}>×</button>

        <button onClick={() => append("7")}>7</button>
        <button onClick={() => append("8")}>8</button>
        <button onClick={() => append("9")}>9</button>
        <button onClick={() => append("-")}>−</button>

        <button onClick={() => append("4")}>4</button>
        <button onClick={() => append("5")}>5</button>
        <button onClick={() => append("6")}>6</button>
        <button onClick={() => append("+")}>+</button>

        <button onClick={() => append("1")}>1</button>
        <button onClick={() => append("2")}>2</button>
        <button onClick={() => append("3")}>3</button>

        <button className="span-2" onClick={() => append("0")}>0</button>
        <button onClick={() => append(".")}>.</button>

        <button className="equals" onClick={calculate}>=</button>
      </div>

      {/* History Panel */}
      <div className="history-panel">
        <h3>History</h3>
        <ul>
          {history.map((h, i) => (
            <li key={i} onClick={() => setDisplay(h.split("=")[1].trim())}>
              {h}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
