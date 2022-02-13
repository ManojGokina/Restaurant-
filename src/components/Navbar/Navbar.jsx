import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdRestaurant } from "react-icons/md";
import "./Navbar.css";
import images from "../../constants/images";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="nav__navbar">
      <div className="nav__navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>

      <ul className="nav__navbar-links">
        <li className="p__opensans">
          Home
        </li>
        <li className="p__opensans">
          About
        </li>
        <li className="p__opensans">
          Menu
        </li>
        <li className="p__opensans">
          Awards
        </li> 
        <li className="p__opensans">
          Contact
        </li>
      </ul>
      <div className="nav__navbar-login">
        <p  className="p__opensans">
          Log In/Register
        </p>
        <div />
        <p  className="p__opensans">
          Book A Table
        </p>
      </div>

      <div className="nav__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <>
          <div className="nav__navbar-smallscreen_overlay flex_centern slide-bottom">
          <MdRestaurant
            fontSize={27}
            className="overlay__close"
            onClick={() => setToggleMenu(false)}
          />
           <ul className="nav__navbar-smallscreen-links">
           <li className="p__opensans">
          Home
        </li>
        <li className="p__opensans">
          About
        </li>
        <li className="p__opensans">
          Menu
        </li>
        <li className="p__opensans">
          Awards
        </li> 
        <li className="p__opensans">
          Contact
        </li>
        </ul> 
        </div>
       
          </>
          
        )}
      </div>
    </nav>
  );
};
export default Navbar;
