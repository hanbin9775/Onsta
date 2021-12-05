import React from 'react';
import styled from 'styled-components';
import StoreImg from 'assets/img/store.png';

const StorePage = () => {
  return <StorePageImg src={StoreImg} alt="store img" />;
};

const StorePageImg = styled.img`
  width: 100vw;
`;

export default StorePage;
