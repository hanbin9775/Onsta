import React from 'react';
import styled from 'styled-components';
import MainImg from 'assets/img/main.png';

const HomePage = () => {
  return <MainPageImg src={MainImg} alt="main image" />;
};

const MainPageImg = styled.img`
  width: 100vw;
`;

export default HomePage;
