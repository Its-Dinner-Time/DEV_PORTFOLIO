import React from 'react';
import HeaderStyled from './HeaderStyled';

import { motion } from 'framer-motion';

import { images } from '../../constants';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const headerCirlceList = [images.flutter, images.redux, images.sass];

const Header = () => {
  return (
    <HeaderStyled className="app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="info"
      >
        <div className="badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div>
              <p className="p-text">Hello, It's</p>
              <h1 className="head-text">Dinner Time!!</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">자기소개</p>
            <p className="p-text">중입니다</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="img"
      >
        <img src={images.profile} alt="profile" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="overlay_circle"
          src={images.circle}
        ></motion.img>
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="circles"
      >
        {headerCirlceList.map((item, idx) => (
          <div className="circle-cmp app__flex" key={`circle-${idx}`}>
            <img src={item} alt="circle" />
          </div>
        ))}
      </motion.div>
    </HeaderStyled>
  );
};

export default Header;
