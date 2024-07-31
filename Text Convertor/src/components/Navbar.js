import React from "react";
import { Link } from "react-router-dom";

// import { link } from 'react-router-dom'

export default function Navbar(probs) {
  return (
    <>
      <nav
        className={` navbar ${probs.light} ${probs.dark} ${probs.NavMix} ${probs.blue}`}
      >
        <div className="logo">
          <Link to="/">{probs.title}</Link>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className="theme">
          <div className="toggle-switch">
            <label className="switch-label">
              <input
                type="checkbox"
                className="checkbox"
                onClick={probs.toggleMode1}
              />
              <span className="slider"></span>
            </label>
          </div>
          <div className="toggle-switch">
            <label className="switch-label">
              <input
                type="checkbox"
                className="checkbox"
                onClick={probs.toggleMode2}
              />
              <span className="slider"></span>
            </label>
          </div>
          <div className="toggle-switch">
            <label className="switch-label">
              <input
                type="checkbox"
                className="checkbox"
                onClick={probs.toggleMode3}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </nav>
    </>
  );
}
