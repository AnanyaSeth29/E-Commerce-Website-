import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div class="footer">
      <div class="leftFoot">
        <div class="tabs">
          <div class="tab">
            <Link to="/">HOME</Link>
            <div class="tab">
              <Link to="/">ABOUT</Link>
            </div>
            <div class="tab">
              <Link to="/contact">CONTACT</Link>
            </div>
          </div>
          <div class="rights">Image rights to their respective owners.</div>
        </div>
      </div>

      <div class="rightFoot">
        <div class="socials">
          <img alt="" src="Images/pinterest.png" class="" />
          <img alt="" src="Images/facebook.png" class="" />
          <img alt="" src="Images/twitter.png" class="" />
        </div>
        <div class="subscribe">
          <input
            type="text"
            class="message"
            placeholder="Get discount codes in your inbox"
          />
          <div class="sub">SUBSCRIBE</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
