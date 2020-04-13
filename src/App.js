import React, { Fragment } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import './app.scss';

import Header from './components/Header'
import SideNav from './components/SideNav';
import EmailList from './components/EmailList'
import EmailListActions from './components/EmailListActions';
import EmailBody from './components/EmailBody';
import EmailBodyActions from './components/EmailBodyActions';

import { SelectedProvider } from './SelectedContext';
import { EmailProvider } from './context/EmailContext';

function App() {
  return (
    <Fragment>
      <Header />
      <div className="app-content">
        <Router>
          <EmailProvider>
            <SelectedProvider >
              <div className="app-actions-row">
                <button className="app-compose">Compose</button>
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
                  <Route path="/inbox" exact component={EmailList} />
                  <Route path="/inbox/:id"  component={EmailBody} /> 
                  <Route path="/tag/:name" exact component={EmailList} />
                  <Route path="/tag/:name/:id" component={EmailBody} />
                  <Redirect from="/" to="/inbox" />
                </Switch>
              </div>
            </SelectedProvider>
          </EmailProvider>
        </Router>
      </div>
    </Fragment>
  );
}

export default App;