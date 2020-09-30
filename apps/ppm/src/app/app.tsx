import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { getToken } from '@ppm/data-access/local-storage';
import PrivateRouter from './routes/private';
import './app.scss';
import PublicRouter from './routes/public';
import { FeaturesSnackBar } from '@ppm/features/snack-bar';
import { SharedLessonsAccordion } from '@ppm/shared/lessons-accordion';

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
      <SharedLessonsAccordion
        lessonsDescription="Are you ready to find out what all the hype is about with ReactJS? These ReactJS for beginners tutorials will bring you completely up to speed on the hottest JavaScript framework used on the web today."
        lessons={[
          {
            title: 'Gecko',
            authorName: 'Donatas',
            image:
              'https://www.eurekalert.org/multimedia/pub/web/229622_web.jpg',
          },
          {
            title: 'Gecko',
            authorName: 'Donatas',
            image:
              'https://www.eurekalert.org/multimedia/pub/web/229622_web.jpg',
          },
          {
            title: 'Gecko',
            authorName: 'Donatas',
            image:
              'https://www.eurekalert.org/multimedia/pub/web/229622_web.jpg',
          },
          {
            title: 'Gecko',
            authorName: 'Donatas',
            image:
              'https://www.eurekalert.org/multimedia/pub/web/229622_web.jpg',
          },
          {
            title: 'Gecko',
            authorName: 'Donatas',
            image:
              'https://www.eurekalert.org/multimedia/pub/web/229622_web.jpg',
          },
          {
            title: 'Gecko',
            authorName: 'Donatas',
            image:
              'https://www.eurekalert.org/multimedia/pub/web/229622_web.jpg',
          },
          {
            title: 'Gecko',
            authorName: 'Donatas',
            image:
              'https://www.eurekalert.org/multimedia/pub/web/229622_web.jpg',
          },
        ]}
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
