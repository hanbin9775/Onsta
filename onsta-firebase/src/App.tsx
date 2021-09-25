import React, { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Router from 'Router';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

const Root = () => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <StrictMode>
            <Router />
          </StrictMode>
        </BrowserRouter>
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default Root;
