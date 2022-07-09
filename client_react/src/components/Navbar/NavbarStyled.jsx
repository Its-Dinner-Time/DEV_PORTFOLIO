import React from 'react';
import styled from 'styled-components';

import { images } from '../../constants';

const Styled = styled.nav`
  & {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem 2rem;
    background-color: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);

    border: 1px solid rgba(255, 255, 255, 0.18);

    position: fixed;
    z-index: 2;
  }

  .app__navbar-logo {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    img {
      width: 90px;
      height: 20px;

      @media screen and (min-width: 2000px) {
        width: 180px;
        height: 40px;
      }
    }
  }

  .app__navbar-links {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      margin: 0 1rem;
      cursor: pointer;

      flex-direction: column;

      div {
        width: 5px;
        height: 5px;
        background-color: transparent;
        border-radius: 50%;

        margin-bottom: 5px;
      }

      a {
        color: var(--gray-color);
        flex-direction: column;

        text-transform: uppercase;
        font-weight: 500;

        transition: all 0.3s ease-in-out;

        &:hover {
          color: var(--secondary-color);
        }
      }

      &:hover {
        div {
          background-color: var(--secondary-color);
        }
      }
    }

    @media screen and (max-width: 900px) {
      display: none;
    }
  }

  .app__navbar-menu {
    /* display: ${(props) => (props.show ? 'block' : 'none')}; */
    width: 35px;
    height: 35px;
    border-radius: 50%;
    position: relative;

    display: none;
    justify-content: center;
    align-items: center;
    background-color: var(--secondary-color);

    svg {
      width: 70%;
      height: 70%;
      color: var(--white-color);
      cursor: pointer;
      z-index: 99;
    }

    div {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 5;

      padding: 1rem;

      width: 80%;
      height: 100vh;

      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      flex-direction: column;

      background: url(${images.bgWhite});
      background-color: var(--white-color);
      background-size: cover;
      background-repeat: repeat;

      box-shadow: 0 0 20px rgba(168, 168, 168, 0.15);

      transform: translateX(40%);
      opacity: 0;
      transition: all 0.35s ease-in-out;

      svg {
        width: 35px;
        height: 35px;
        color: var(--secondary-color);
        margin: 0.5rem, 1rem;
        cursor: pointer;
      }

      ul {
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;

        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;

        li {
          margin: 1rem;

          a {
            color: var(--gray-color);
            text-transform: uppercase;
            font-weight: 500;

            &:hover {
              color: var(--secondary-color);
            }
          }
        }
      }
    }

    div[data-show='true'] {
      transform: translateX(0%);
      opacity: 1;
    }

    @media screen and (max-width: 900px) {
      display: flex;
    }
  }
`;

const NavbarStyled = ({ children, ...rest }) => {
  return <Styled {...rest}>{children}</Styled>;
};

export default NavbarStyled;
