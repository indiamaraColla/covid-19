import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Footer from '../components/Footer'
import Header from '../components/Header'
import Home from '../pages/Home/index'
import Information from '../pages/Information'
import World from '../pages/World'

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
  )
}
export default Routes
