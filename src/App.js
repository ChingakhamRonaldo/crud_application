import React from 'react';
import { Route, Switch } from 'react-router';
import AddUser from './components/AddUser';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import * as urlCont from './helper/constant'
import EditUser from './components/EditUser';
import ViewUser from './components/ViewUser';

const App = () => {
  return (
    <>
      <NavBar />

      <Switch>
        <Route exact path={urlCont.HOME} component={Home} />
        <Route exact path={urlCont.ADDUSER} component={AddUser} />
        <Route exact path={urlCont.ABOUT} component={About} />
        <Route exact path={urlCont.CONTACT} component={Contact} />
        <Route exact path='/edit/:id' component={EditUser} />
        <Route exact path='/viewUser/:id' component={ViewUser} />
      </Switch>
    </>
  )
}

export default App;