import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { getToken } from '@ppm/data-access/local-storage';
import PrivateRouter from './routes/private';
import './app.scss';
import PublicRouter from './routes/public';
import { FeaturesSnackBar } from '@ppm/features/snack-bar';
import { FeaturesPrivateLayout } from '@ppm/features/private-layout';
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        rest.isLoggedIn ? (
          <Component {...props} />
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
      <BrowserRouter basename="/">
        <Switch>
          {PublicRouter.map((prop, index) => (
            <Route
              exact
              path={prop.path}
              key={index.toString()}
              component={prop.component}
            />
          ))}
          <FeaturesPrivateLayout router={PrivateRouter}>
            {PrivateRouter.map((prop, index) => (
              <PrivateRoute
                exact
                path={prop.path}
                key={index.toString()}
                component={prop.component}
                isLoggedIn={!!getToken()}
              />
            ))}
          </FeaturesPrivateLayout>
          <Redirect from="/login" to="/dashboard" />
        </Switch>
      </BrowserRouter>
      <FeaturesSnackBar />
    </div>
  );
};

export default App;
