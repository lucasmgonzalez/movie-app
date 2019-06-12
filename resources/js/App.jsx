import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './GlobalStyle';
import Home from './pages/Home';
import MoviePage from './pages/MoviePage';

const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movie/:id" component={MoviePage}/>
      </Switch>
    </Router>
  </>
);

export default App;
