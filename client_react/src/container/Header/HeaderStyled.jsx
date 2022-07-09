import React from 'react';
import styled from 'styled-components';

import { images } from '../../constants';

const Styled = styled.div`
  & {
    position: relative;
    background: url(${images.bgIMG});
    background-size: cover;
    background-repeat: repeat;
    background-position: center;

    flex: 1;
    width: 100%;
    height: 100%;
    flex-direction: row;

    padding: 6rem 2rem 0;

    .app__wrapper {
      padding: 0;

      .copyright {
        display: none;
      }
    }

    .info {
      flex: 0.65;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      height: 100%;

      @media screen and (max-width: 2000px) {
        width: 100%;
        margin-right: 0rem;
      }
    }

    .badge {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      flex-direction: column;

      .badge-cmp,
      .tag-cmp {
        padding: 1rem 2rem;
        border: var(--white-color);
        border-radius: 15px;
        flex-direction: row;
        width: auto;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      }

      .tag-cmp {
        flex-direction: column;
        margin-top: 3rem;

        p {
          width: 100%;
          text-transform: uppercase;
          text-align: right;
        }
      }

      span {
        font-size: 2.5rem;

        @media screen and (min-width: 2000px) {
          font-size: 5rem;
        }
      }

      @media screen and (max-width: 1200px) {
        justify-content: flex-start;
        align-items: flex-start;
      }
    }

    .circles {
      flex: 0.75;
      display: flex;
      justify-content: space-evenly;
      align-items: flex-start;
      flex-direction: column;

      height: 100%;
      margin-left: 1rem;

      div {
        width: 100px;
        height: 100px;
        border-radius: 50%;

        background: var(--white-color);
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

        img {
          width: 60%;
          height: 60%;
        }
      }

      div:nth-child(1) {
        width: 100px;
        height: 100px;
      }

      div:nth-child(2) {
        margin: 1.75rem;
        width: 150px;
        height: 150px;
      }

      div:nth-child(3) {
        width: 70px;
        height: 70px;
      }

      @media screen and (min-width: 2000px) {
        div:nth-child(1) {
          width: 400px;
          height: 400px;
        }

        div:nth-child(2) {
          margin: 1.75rem;
          width: 170px;
          height: 170px;
        }

        div:nth-child(3) {
          width: 210px;
          height: 210px;
        }
      }

      @media screen and (max-width: 1200px) {
        width: 100%;
        flex-direction: row;
        flex-wrap: wrap;
        margin-left: 0;

        div {
          margin: 1rem;
        }
      }
    }

    .img {
      flex: 1;
      height: 100%;

      display: flex;
      justify-content: flex-end;
      align-items: flex-end;

      position: relative;

      img {
        width: 100%;
        object-fit: contain;
        z-index: 1;
      }

      .overlay_circle {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 0;
        width: 100%;
        height: 90%;
      }

      @media screen and (max-width: 1200px) {
        margin: 2rem 0;
      }
    }

    @media screen and (min-width: 2000px) {
      padding-top: 8rem;
    }

    @media screen and (max-width: 1200px) {
      flex-direction: column;
    }

    @media screen and (max-width: 450px) {
      padding-top: 6rem 1rem 2rem;
    }
  }
`;

const HeaderStyled = ({ children, ...rest }) => {
  return <Styled {...rest}>{children}</Styled>;
};

export default HeaderStyled;
