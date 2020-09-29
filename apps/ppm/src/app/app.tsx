import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { getToken } from '@ppm/data-access/local-storage';
import PrivateRouter from './routes/private';
import './app.scss';
import PublicRouter from './routes/public';
import { FeaturesSnackBar } from '@ppm/features/snack-bar';
import { SharedAdvertInfo } from '@ppm/shared/advert-info';

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
      <SharedAdvertInfo
        title="AdvertName"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."
        creator="Lukas Ružauskas, Donatas Kuskys & Co"
        image="https://images.ctfassets.net/nm1bt7p4165n/2r7f5kGs2wx3BI2MCPBglc/f528678f0dfef27470f9517cff4d7fab/tiltas.jpg?w=1920&q=50"
        categories={[
          { title: 'Programming', value: 'prog' },
          { title: 'Javascript', value: 'js' },
          { title: 'React', value: 'react' },
          { title: 'Web Development', value: 'web' },
        ]}
        onGetStartedClick={() => {
          alert('clicked');
        }}
      />
      <BrowserRouter basename="/">
        <Switch>
          {PrivateRouter.map((prop) => (
            <PrivateRoute
              path={prop.path}
              key={prop.path}
              component={prop.component}
              isLoggedIn={!!getToken()}
            />
          ))}
          {PublicRouter.map((prop) => (
            <Route
              path={prop.path}
              key={prop.path}
              component={prop.component}
            />
          ))}
        </Switch>
      </BrowserRouter>
      <FeaturesSnackBar />
    </div>
  );
};

export default App;
