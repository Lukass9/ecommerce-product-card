import logo from "src/assets/images/logo.svg";
import avatar from "src/assets/images/image-avatar.png";
import "./navbar.scss";
import { Sidebar } from "./Sidebar/Sidebar";
import { Cart } from "./Cart/Cart";
import { useWindowDimensions } from "src/hook/useWindowsDimensions";
import { Links } from "./Sidebar/Links/Links";

export const Navbar = () => {
  const { width } = useWindowDimensions();
  const isMobile = width <= 1440;
  const isDesktop = width > 1440;
  return (
    <div className='wrapp-menu'>
      <div>
        {isMobile && <Sidebar />}
        <img className='logo' src={logo} alt='logo' />
        {isDesktop && <Links isOpen={true} />}
      </div>
      <div>
        <Cart />
        <div className='avatar'>
          <img src={avatar} alt='avatar' />
        </div>
      </div>
    </div>
  );
};
