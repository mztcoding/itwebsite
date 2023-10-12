import Link from "next/link";
import { useState } from "react";

const DefaultHeader = ({ transparent, headerTop, extarClass }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className={`mil-top-position mil-fixed ${extarClass ? extarClass : ""}`}
    >
      {headerTop && (
        <div className="mil-additional-panel">
          <div className="container-fluid">
            <ul className="mil-ap-list">
              <li>
                Phone: <span className="mil-accent">+ 01</span> 800 070 404
              </li>
              <li>Info@mydomain.com</li>
            </ul>
            <div className="mil-ap-call-to-action">
              <div className="mil-icon-frame mil-icon-frame-sm">
                <img src="img/icons/sm/4.svg" alt="icon" />
              </div>
              <p>Find out how ITSulu Could save you over 2.400 US$ a year.</p>
            </div>
            <ul className="mil-ap-list">
              <li>
                <a href="#.">Accounta</a>
              </li>
              <li>
                <a href="#.">English</a>
              </li>
            </ul>
          </div>
        </div>
      )}
      <div
        className={`mil-top-panel ${
          transparent ? "mil-top-panel-transparent mil-animated" : ""
        }`}
      >
        {/* mil-top-panel-transparent */}
        <div className="container">
          <Link href="/" legacyBehavior>
            <a className="mil-logo" style={{ width: 140 }}></a>
          </Link>
          <div className={`mil-navigation ${toggle ? "mil-active" : ""}`}>
            <nav>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                  </li>
                  <li>
                  <Link href="about">About us</Link>
                  </li>
                  <li>
                  <Link href="/team">Team</Link>
                  </li>
                  <li>
                  <Link href="/careers">Careers</Link>
                </li>
                <li>
                  <Link href="portfolio">Case Studies</Link>
                </li>
                <li>
                  <Link href="service-1">Services</Link>
                </li>
                <li>
                  <Link href="contact">Contact Us</Link>
                </li>
              </ul>
            </nav>
          </div>
          {/* mobile menu button */}
          <div
            className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            <span />
          </div>
          {/* mobile menu button end */}
        </div>
      </div>
    </div>
  );
};
export default DefaultHeader;
