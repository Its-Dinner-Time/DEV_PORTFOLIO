import React from 'react';
import styled from 'styled-components';

const Styled = styled.div``;

const AboutStyled = ({ children, ...rest }) => {
  return <Styled {...rest}>{children}</Styled>;
};

export default AboutStyled;
