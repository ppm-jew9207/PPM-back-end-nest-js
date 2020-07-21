import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { getToken } from '@ppm/api-requests/authorization';

import PrivateRouter from './routes/private';
import './app.scss';
import PublicRouter from './routes/public';
import { authorizationActions } from '@ppm/data-access/authorization';
import { PrivateRoutesPath } from '@ppm/common/main';

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

export const App = (props: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const isTokenSet = !!getToken();
    if (!isTokenSet) {
      dispatch(authorizationActions.logInFailed({}));
    } else {
      console.log(props);

      // props.history.push(
      //   `${PrivateRoutesPath.DASHBOARD}${PrivateRoutesPath.DASHBOARD_MENTOR}`
      // );
    }

    console.log(isTokenSet);
  });

  return (
    <div className="app">
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
