import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';

import { images } from '../../constants';

import NavbarStyled from './NavbarStyled';

const navList = ['home', 'about', 'work', 'skills', 'contact'];

const Navbar = () => {
  const [isShow, setIsShow] = useState(false);
  const menuToggle = (bol) => {
    return (e) => {
      setIsShow(bol);
    };
  };

  return (
    <NavbarStyled show-menu={isShow}>
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>

      <ul className="app__navbar-links">
        {navList.map((item, idx) => (
          <li key={`link-${idx}`} className="app__flex p-text">
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={menuToggle(true)} />

        <div>
          <HiX onClick={menuToggle(false)} />

          <ul>
            {navList.map((item, idx) => (
              <li key={`menuItem-${idx}`}>
                <a href={`#${item}`} onClick={() => menuToggle(false)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </NavbarStyled>
  );
};

export default Navbar;
