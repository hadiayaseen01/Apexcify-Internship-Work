import React from "react";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div>© {new Date().getFullYear()} Apexcify Technologys — All rights reserved</div>
        <div className="socials" style={{ display: "flex", gap: "15px", marginTop: "10px" }}>
          
          <div>
            <a 
              href="https://www.linkedin.com/company/apexcifytechnologys/" 
              aria-label="LinkedIn" 
              style={{ 
                color: "#0077B5", // LinkedIn blue
                fontWeight: "bold",
                textDecoration: "none",
                fontSize: "18px"
              }}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
