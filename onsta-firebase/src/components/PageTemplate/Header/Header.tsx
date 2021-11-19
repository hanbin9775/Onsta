import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { typography } from 'styles/theme';
import LogoImg from 'assets/img/logo.png';
import Button from 'components/Common/Button';
import SearchInput from './SearchInput';

const Header = () => {
  const themeStyle = useContext(ThemeContext);
  return (
    <HeaderWrapper>
      <HeaderInnerWrapper>
        <Logo src={LogoImg} alt="logo png" />
        <SearchInput />
        <Button
          text="로그인"
          fontColor={themeStyle.color.blue}
          bkgColor={themeStyle.color.white}
          padding="0.8rem 0.7rem"
          width={7}
          height={3.6}
          borderRadius={0.5}
          fontStyle={typography.bodyRgBold}
          hoverBkgColor={themeStyle.color.blue}
          hoverFontColor={themeStyle.color.white}
        />
      </HeaderInnerWrapper>
    </HeaderWrapper>
  );
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
  border-bottom: 1px solid ${({ theme }) => theme.color.grayScale[500]};
`;

const HeaderInnerWrapper = styled.div`
  padding: 0 4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 3rem;
  cursor: pointer;
`;
