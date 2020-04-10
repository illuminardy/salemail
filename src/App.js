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
import EmailListActions from './components/EmailListActions';
import EmailBody from './components/EmailBody';
import EmailBodyActions from './components/EmailBodyActions';

import { SelectedProvider } from './SelectedContext';
import { messages, getMessagesByTag, getMessageById } from './utils/email-manager';

function App() {
  
  return (
    <div className="App">
      <Header />
      <div className="app-content">
        <Router>
          <SelectedProvider >
            <div className="app-buttons2">
              <div className="app-buttons">
                <button className="app-compose">Compose</button>
              </div>
              <div className="app-actions">
                <Route path="/inbox" exact component={EmailListActions} />
                <Route path="/inbox/:id" component={EmailBodyActions} />
                <Route path="/tag/:name" exact component={EmailListActions} />
                <Route path="/tag/:name/:id" component={EmailBodyActions} />
              </div>
            </div>
            <div className="app-body">
              <SideNav />
              <Switch>
                <Route path="/inbox" exact render={() => <EmailList messages={messages} />} />
                <Route path="/inbox/:id"  render={(props) => <EmailBody message={getMessageById(props.match.params.id)} />} />
                <Route path="/tag/:name" exact render={(props) => <EmailList messages={getMessagesByTag(props.match.params.name)} />}  />
                <Route path="/tag/:name/:id"  render={(props) => <EmailBody message={getMessageById(props.match.params.id)} />} />
                <Redirect from="/" to="/inbox" />
              </Switch>
            </div>
          </SelectedProvider>
        </Router>
      </div>
    </div> 


  );
}

export default App;