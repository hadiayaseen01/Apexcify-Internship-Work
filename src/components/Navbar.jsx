function Navbar() {
  return (
    <nav style={{
      padding: "20px",
      position: "fixed",
      top: 0,
      width: "100%",
      background: "#bb2d3b",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      <h2 style={{ textAlign: "center" }}>
        Hadia <span style={{ color: "black" }}>Yaseen</span>
      </h2>
    </nav>
  );
}

export default Navbar;
