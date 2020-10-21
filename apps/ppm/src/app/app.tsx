import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { getToken } from '@ppm/data-access/local-storage';
import PrivateRouter from './routes/private';
import './app.scss';
import PublicRouter from './routes/public';
import { FeaturesSnackBar } from '@ppm/features/snack-bar';
import { SharedCreateAdvertForm } from '@ppm/shared/create-advert-form';

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

  const showData = ( data ) => {
    console.log(data);
  }

  return (
    <div className="app">
      <SharedCreateAdvertForm
        data={{
          title: 'New advert',
          submitButtonText: 'Create',
          cancelButtonText: 'Cancel',
          descriptionInputLabel: 'Description',
          titleInputLabel: 'New Advert',
          categoryInputLabel: 'Category',
          prerequisitesInputLabel: 'Pre-requisites',
          learningInputLabel: 'What to learn',
        }}
        categories={[
          { title: 'Category A', value: 'category-a', _id: 'as3dg432af' },
          { title: 'Category B', value: 'category-b', _id: 'as33dg4432af' },
        ]}
        lesson={[
          {
            title: 'Create React Component',
            _id: 'gfsgsffa',
            datetime: '2021-09-22T17:09',
          },
          {
            title: 'Create React Library',
            _id: 'gfsgsffb',
            datetime: '2021-10-22T17:09',
          },
          {
            title: 'Create React Feature',
            _id: 'gfsgsffc',
            datetime: '2021-11-22T17:09',
          },
          {
            title: 'Create React Beat',
            _id: 'gfsgsffcd',
            datetime: '2021-11-22T17:09',
          },
        ]}
        onSubmit={(advert) => showData(advert)}
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
