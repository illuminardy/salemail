import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import './app.css';

import Header from './components/Header'
import SideNav from './components/SideNav';
import EmailList from './components/EmailList'
import EmailBody from './components/EmailBody';

import { messages } from './utils/email-manager';
import { getMessageById } from './utils/email-manager';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-content">
        <Router>
          <SideNav />
          <Switch>
            <Route path="/inbox" exact render={() => <EmailList messages={messages} />} />
            <Route path="/inbox/:id"  render={(props) => <EmailBody message={getMessageById(props.match.params.id)} />} />
            <Route path="/tags/:id" component={EmailList} />
            <Redirect from="/" to="/inbox" />
          </Switch>
        </Router>
      </div>
    </div> 


  );
}

export default App;