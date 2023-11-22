/ App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import useAuthStore from './authStore';
import Login from './Login';
import UserIndexPage from './UserIndexPage';
import PrivateRoute from './PrivateRoute';

const App = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <PrivateRoute path="/userIndexPage" component={UserIndexPage} />
      </Switch>
    </Router>
  );
};

export default App;