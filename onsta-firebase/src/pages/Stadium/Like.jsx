/* eslint-disable */
import React, { useState } from 'react';
import Favorite from 'assets/svg/favorite.svg';
import Heart from './Heart';
import styled from 'styled-components';

import './Like.css';

const Like = (props) => {
  const { heartCount = 1 } = props;

  const [hearts, setHearts] = useState([]);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i += 1) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  };
  const animateLike = () => {
    for (let i = 0; i < heartCount; i += 1) {
      setTimeout(() => {
        setHearts((hearts) => [
          ...hearts,
          {
            id: Date.now(),
            color: getRandomColor(),
          },
        ]);
      }, i * 200);
    }
  };

  const removeHeart = () => {
    const activeHearts = [...hearts];
    activeHearts.shift();
    setHearts(activeHearts);
  };

  return (
    <div className="like-wrapper">
      <button className="like-button" onClick={animateLike}>
        <FavoriteIcon src={Favorite} alt="heart" />
      </button>

      {hearts.map(({ id, color }) => (
        <Heart key={id} color={color} removeHeart={removeHeart} />
      ))}
    </div>
  );
};

const FavoriteIcon = styled.img`
  width: 24px;
  height: 24px;
  svg path {
    fill: red;
  }
`;

export default Like;
