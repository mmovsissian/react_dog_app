import React from 'react';
import Main from "./Components/Main"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import About from './Components/About';
import Contacts from './Components/Contacts';
import Header from './Components/Header'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contacts'>
          <Contacts />
        </Route>
        <Route path='/breeds'>
          <Main />
        </Route>
        <Route exact path='/'>
          <Main />
        </Route>
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
