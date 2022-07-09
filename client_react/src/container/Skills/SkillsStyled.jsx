import React from 'react';
import styled from 'styled-components';

const Styled = styled.div``;

const SkillsStyled = ({ children, ...rest }) => {
  return <Styled {...rest}>{children}</Styled>;
};

export default SkillsStyled;
