import React from "react";
import menu from "src/assets/images/icon-menu.svg";
import logo from "src/assets/images/logo.svg";
import cart from "src/assets/images/icon-cart.svg";
import avatar from "src/assets/images/image-avatar.png";
import "./navbar.scss";

export const Navbar = () => {
  return (
    <div className='wrapp-menu'>
      <div>
        <img className='menu' src={menu} alt='menu' />
        <img className='logo' src={logo} alt='logo' />
      </div>
      <div>
        <img src={cart} alt='cart' />
        <img src={avatar} alt='avatar' />
      </div>
    </div>
  );
};
