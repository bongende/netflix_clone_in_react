import React, { useRef, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_icon from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { logOut } from "../../firebase";

const Navbar = () => {
  const navRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 80
        ? navRef.current.classList.add("nav-dark")
        : navRef.current.classList.remove("nav-dark");
    });
  }, []);

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Netflix logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>News & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="search icon" className="icon" />
        <p>Children</p>
        <img src={bell_icon} alt="bell icon" className="icon" />
        <div className="navbar-profile">
          <img src={profile_icon} alt="profile icon" className="profile" />
          <img src={caret_icon} alt="profile icon" />
          <div className="dropdown">
            <p
              onClick={() => {
                logOut();
              }}
            >
              Sign Out of Netfllix
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
