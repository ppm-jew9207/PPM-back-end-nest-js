import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { getToken } from '@ppm/api-requests/authorization';

import PrivateRouter from './routes/private';
import './app.scss';
import PublicRouter from './routes/public';

// TODO: all commented lines below i use in future for login
const stateSelector = createStructuredSelector({
  // isLogedIn: loginSelectors.selectIsLogedIn(),
});

const PrivateRoute = ({ component: Component, ...rest }) => {
  // const dispatch = useDispatch();
  // const { isLoggedIn } = useSelector(stateSelector);

  const [isLoggedIn, setLoginStatus] = useState<boolean>(false);

  useEffect(() => {
    console.log(getToken());
    
      setLoginStatus(!!getToken);
  }, []);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <div>
            {console.log('on')}
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
  useEffect(() => {
    console.log('testas authorization');
    
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
            />
          ))}
          {PublicRouter.map((prop) => (
            <Route
              path={`${prop.path}`}
              key={prop.path}
              component={prop.component}
            />
          ))}
          <Redirect from="/login" to="/mentor/all" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
