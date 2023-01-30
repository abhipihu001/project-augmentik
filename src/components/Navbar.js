import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>GalacticJobs</span>
          </h2>
        </div>
        <div className="menu-link">
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">How it works</a>
                </li>
                <li>
                    <a href="#">Features</a>
                </li>
                <li>
                    <a href="#">Contact us</a>
                </li>
            </ul>
            <div className="button">
                <button className="Read-more">Read More</button>
            </div>

        </div>
      </nav>
      <section className="hero-section">
        <p>Welcome to Galactic Jobs</p>

      </section>
      <section className="heroo-section">
        <p>Are you a tech trainer,influencer or expert?</p>
      </section>
    </>
  );
};
export default Navbar;
