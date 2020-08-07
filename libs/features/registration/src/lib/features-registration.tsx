import React from 'react';
import { SharedRegistration } from '@ppm/shared/registration';
import { authorizationActions } from '@ppm/data-access/authorization';
import { useDispatch } from 'react-redux';

import './features-registration.scss';
import { RegistrationInterface } from '@ppm/common/main';

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
