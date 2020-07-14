import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SharedSearchInput } from '@ppm/shared/search-input';
import PrivateRouter from './routes/private';
import './app.scss';

// TODO: all commented lines below i use in future for login
const stateSelector = createStructuredSelector({
  // isLogedIn: loginSelectors.selectIsLogedIn(),
});

const PrivateRoute = ({ component: Component, ...rest }) => {
  // const dispatch = useDispatch();
  // const { isLoggedIn } = useSelector(stateSelector);

  const isLoggedIn = true;
  useEffect(() => {
    //   if (!localStorage.getItem('token')) {
    //     // dispatch(loginActions.logOut());
    //   }
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
  return (
    <div className="app">
      <SharedSearchInput
        onSearch={(e) => {
          console.log(e);
        }}
      />
      <BrowserRouter basename="/">
        <Switch>
          {PrivateRouter.map((prop) => (
            <PrivateRoute
              path={`/${prop.path}`}
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
