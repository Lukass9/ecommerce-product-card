import React, { Dispatch } from "react";
import menu from "src/assets/images/icon-menu.svg";

type Toggle = {
  setIsOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
};

export const ToggleBar = ({ setIsOpen }: Toggle) => {
  return (
    <button className='toggle' onClick={() => setIsOpen((prev) => !prev)}>
      <img className='menu' src={menu} alt='menu' />
    </button>
  );
};
