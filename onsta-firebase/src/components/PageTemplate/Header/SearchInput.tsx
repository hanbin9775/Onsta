import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Search from 'assets/svg/Search.svg';

const SearchInput = () => {
  const [searchTxt, setSearchTxt] = useState('');

  const searchSpace = (e: any) => {
    setSearchTxt(e.target.value);
  };

  const history = useHistory();

  return (
    <SearchWrapper>
      <SearchIconWrapper>
        <SearchIcon src={Search} alt="검색 입력란" />
      </SearchIconWrapper>
      <Input
        value={searchTxt}
        placeholder=""
        onChange={(e) => searchSpace(e)}
      />
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div`
  background-color: #f2f2f2;
  width: 100%;
  max-width: 30rem;
  height: 3.6rem;
  display: flex;
  border-radius: 5px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const SearchIconWrapper = styled.div`
  width: 100%;
  max-width: 36px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchIcon = styled.img`
  width: 12px;
  height: 12px;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  background-color: #f2f2f2;
  border-radius: 0px 4px 4px 0px;
  &::placeholder {
    ${({ theme }) => theme.typography.bodySmRegular}
  }

  &:focus {
    outline: none;
  }
`;

export default SearchInput;
