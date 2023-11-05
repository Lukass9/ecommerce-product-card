import logo from "src/assets/images/logo.svg";
import avatar from "src/assets/images/image-avatar.png";
import "./navbar.scss";
import { Sidebar } from "./Sidebar/Sidebar";
import { Cart } from "./Cart/Cart";

export const Navbar = () => {
  return (
    <div className='wrapp-menu'>
      <div>
        <Sidebar />
        <img className='logo' src={logo} alt='logo' />
      </div>
      <div>
        <Cart />
        <img src={avatar} alt='avatar' />
      </div>
    </div>
  );
};
