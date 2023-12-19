import close from "src/assets/images/icon-close.svg";
import menu from "src/assets/images/icon-menu.svg";

type Toggle = {
  isOpen: boolean;
  setIsOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
};

export const ToggleBar = ({ isOpen, setIsOpen }: Toggle) => {
  return (
    <button className='toggle' onClick={() => setIsOpen((prev) => !prev)}>
      <img className='menu' src={isOpen ? close : menu} alt='menu' />
    </button>
  );
};
