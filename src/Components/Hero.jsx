import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="main">
      <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span>
            <div className="ham">
              <div className="hamLine"></div>
              <div className="hamLine"></div>
              <div className="hamLine"></div>
            </div>
          </span>
        </label>

        <ul className="menu__box">
          <li>
            <Link className="menu__item" to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link className="menu__item" to="/blog">
              TRENDS
            </Link>
          </li>
          <li>
            <Link className="menu__item" to="/grid">
              COLLECTIONS
            </Link>
          </li>
          <li>
            <Link className="menu__item" to="/brands">
              DESIGNERS
            </Link>
          </li>
          <li>
            <Link className="menu__item" to="/about">
              ABOUT
            </Link>
          </li>
          <li>
            <Link className="menu__item" to="/contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav">
        <div className="left">
          <div className="ham">
            <div className="hamLine"></div>
            <div className="hamLine"></div>
            <div className="hamLine"></div>
          </div>
          <div className="navItem">
            <Link to="/blog">TRENDS</Link>
          </div>
          <div className="navItem">
            <Link to="/grid">COLLECTIONS</Link>
          </div>
          <div className="navItem">
            <Link to="/brands">DESIGNERS</Link>
          </div>
        </div>

        <div className="right">
          <div className="search">
            <div className="navItem">SEARCH</div>
            <div>
              <img src="Images/search_2.png" alt="Search" />
            </div>
          </div>
          <div>
            <img src="Images/bucket.png" alt="Bucket" />
          </div>
          <div>
            <Link to="/signin">
              <img src="Images/avatar.jpg" alt="Avatar" />
            </Link>
          </div>
        </div>
      </div>

      <div className="hero">
        <img src="Images/main_picture.png" alt="Main Image" id="mainImg" />
        <img src="Images/new_season_looks.png" alt="Season" id="season" />
        <img src="Images/next.png" alt="Left Arrow" id="leftArrow" />
        <img src="Images/next.png" alt="Right Arrow" id="rightArrow" />
      </div>
    </div>
  );
}

export default Hero;
