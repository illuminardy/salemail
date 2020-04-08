import React from 'react';

import Messages from './containers/Messages';
import MessageBody from './containers/MessageBody';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import './app.css';

import Header from './components/Header'
import SideNav from './components/SideNav';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-content">
        <Router>
          <SideNav />
          <Switch>
            <Route path="/inbox" component={Messages} exact />
            <Route path="/inbox/:id" component={MessageBody} />
            <Route path="/tags/:id" component={Messages} />
            <Redirect from="/" to="/inbox" />
          </Switch>
        </Router>
      </div>
    </div> 


  );
}

export default App;