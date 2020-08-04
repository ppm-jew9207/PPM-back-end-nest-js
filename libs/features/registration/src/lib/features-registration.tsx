import React from 'react';
import { SharedRegistration, RegistrationInterface } from '@ppm/shared/registration';
import { authorizationActions } from '@ppm/data-access/authorization';
import { useDispatch } from 'react-redux';

import './features-registration.scss';

export const FeaturesRegistration = () => {
  const dispatch = useDispatch();

  const registration = (data: RegistrationInterface) => {
    dispatch(authorizationActions.registration(data));
  }

  return (
    <div>
      <SharedRegistration onSubmit={registration}/>
    </div>
  );
};

export default FeaturesRegistration;
