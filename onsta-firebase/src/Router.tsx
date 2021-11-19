import React from 'react';
import Home from 'pages/Home';
import StorePage from 'pages/Store';
import StadiumPage from 'pages/Stadium';
import { Route, Switch } from 'react-router-dom';
import GlobalStyle from 'styles/GlobalStyle';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/store" component={StorePage} />
        <Route exact path="/stadium" component={StadiumPage} />
      </Switch>
      <GlobalStyle />
    </>
  );
};

export default App;
