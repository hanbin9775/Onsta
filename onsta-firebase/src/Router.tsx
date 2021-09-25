import React from 'react';
import Home from 'pages/Home';
import StorePage from 'pages/Store';
import StreamingPage from 'pages/Streaming';
import { Route, Switch } from 'react-router-dom';
import GlobalStyle from 'styles/GlobalStyle';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/store" component={StorePage} />
        <Route exact path="/streaming" component={StreamingPage} />
      </Switch>
      <GlobalStyle />
    </>
  );
};

export default App;
