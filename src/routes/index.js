import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home/index';
import World from '../pages/World';
import Information from '../pages/Information';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/world" component={World} />
        <Route exact path="/information" component={Information} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};
export default Routes;
