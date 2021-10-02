import React, { useCallback, useContext, useEffect, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { color, typography } from 'styles/theme';

const Header = () => {
  const themeStyle = useContext(ThemeContext);

  return <HeaderWrapper>dad</HeaderWrapper>;
};

export default Header;

const HeaderWrapper = styled.nav`
  position: absolute;
  left: 0;
  top: 0;
  height: 6rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: pink;
`;
