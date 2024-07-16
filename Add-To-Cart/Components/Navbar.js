import React from "react";

export default function Navbar(probs) {
  return (
    <nav>
      <div className="logo">WollSho</div>

      <ul>
        <li>Home</li>
        <li>Services</li>
        <li>About</li>
      </ul>

      <div className="cartLogin">
        {/* <div className="cart">Cart</div> */}
        <button>Sign In</button>
      </div>
    </nav>
  );
}
