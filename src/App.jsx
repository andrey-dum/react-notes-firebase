import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.scss';

import Home from './pages/Home'
import {About} from './pages/About'
import {Navbar} from './components/Navbar'
import {Alert} from './components/Alert'
import {AlertState} from './context/alert/AlertState'
import { FirebaseState } from './context/firebase/FirebaseState';



function App() {
  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
        <Navbar />
        <div className="container pt-4">
          <Alert />
            <Switch>
              <Route exact path={'/'} component={Home} />
              <Route exact path='/about' component={About} />
              
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  );
}

export default App;
