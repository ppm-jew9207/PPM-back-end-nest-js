import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { getToken } from '@ppm/data-access/local-storage';
import PrivateRouter from './routes/private';
import './app.scss';
import PublicRouter from './routes/public';
import { FeaturesSnackBar } from '@ppm/features/snack-bar';
import { FeaturesAdvertForm } from '@ppm/features/advert-form';
import { SharedLessonComponent } from '@ppm/shared/lesson-component';
import { SharedAdvertCard } from '@ppm/shared/advert-card';
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

  const showData = (lesson) => {
    console.log(lesson)
  }

  return (
    <div className="app">
      <SharedLessonComponent
        data={{
          title: 'Create/Edit Lesson',
          submitButtonText: 'Create/Edit',
          cancelButtonText: 'Cancel',
          resourcesInputLabel: 'Resources',
          connectionURLInputLabel: 'Connection URL',
          descriptionInputLabel: 'Description',
          datetimeInputLabel: 'Date and Time',
          titleInputLabel: 'New Lesson Title',
          mentorInputLabel: 'Select Mentor',
        }}
        lesson={{
          mentorName: 'as3dg432zd',
          description: 'big description',
          resources: 'so much resources',
          imageUrl: 'https://placekitten.com/300/300',
          title: 'lesson title',
          connectionURL: 'https://placekitten.com/300/300',
          date: '2021-09-22T17:09',
        }}
        mentors={[
          { name: 'John Doe', value: 'John Doe', _id: 'as3dg432zd' },
          { name: 'Dohn Joe', value: 'Dohn Joe', _id: 'as33dg4432dz' },
          { name: 'Gohn Boe', value: 'Gohn Boe', _id: 'as3dg432zdbg' },
        ]}
        onSubmit={(lesson) => showData(lesson)}
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
