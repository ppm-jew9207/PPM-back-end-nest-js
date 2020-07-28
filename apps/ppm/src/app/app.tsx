import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { getToken } from '@ppm/data-access/local-storage';
import PrivateRouter from './routes/private';
import './app.scss';
import PublicRouter from './routes/public';

import SharedUserProfileCard from '@ppm/shared/user-profile-card';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        rest.isLoggedIn ? (
          <div>
            <Component {...props} />
          </div>
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};


export const App = () => {
  return (
    <div className="app">
      <SharedUserProfileCard/>
      <BrowserRouter basename="/">
        <Switch>
          {PrivateRouter.map((prop) => (
            <PrivateRoute
              path={`/${prop.path}`}
              key={prop.path}
              component={prop.component}
              isLoggedIn={!!getToken()}
            />
          ))}
          {PublicRouter.map((prop) => (
            <Route
              path={`${prop.path}`}
              key={prop.path}
              component={prop.component}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
