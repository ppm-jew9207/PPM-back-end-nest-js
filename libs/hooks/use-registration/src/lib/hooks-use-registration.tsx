import React from 'react';
import { SharedRegistration } from '@ppm/shared/registration';
import { useParams } from 'react-router-dom';
import {
  authorizationActions,
  authorizationSelectors,
} from '@ppm/data-access/authorization';
import { useDispatch, useSelector } from 'react-redux';
import {
  RegistrationInterface,
  PrivateRoutesPath,
  History,
} from '@ppm/common/main';
import { SharedRegistrationVerification } from '@ppm/shared/registration-verification';
import { FeaturesAuthorization } from '@ppm/features/authorization';
import { createStructuredSelector } from 'reselect';
import { clearRegistrationData } from '@ppm/data-access/local-storage';

const stateSelector = createStructuredSelector({
  registrationStep: authorizationSelectors.selectRegistrationStep(),
  loading: authorizationSelectors.selectLoading(),
});

export function useRegistration(history: History) {
  const dispatch = useDispatch();
  const { registrationStep, loading } = useSelector(stateSelector);
  const { code } = useParams();
  const registration = (data: RegistrationInterface) => {
    dispatch(authorizationActions.registration(data));
  };

  const staticSteps = ['Registration', 'Verification', 'Login'];

  const verifyEmail = (code: string) => {
    dispatch(authorizationActions.verification(code));
  };

  const clearRegistrationStateData = () => {
    clearRegistrationData();
    window.location.href = PrivateRoutesPath.POST_REGISTRY;
  };

  const getStepContent = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return <SharedRegistration onSubmit={registration} />;
      case 1:
        return (
          <SharedRegistrationVerification
            code={code}
            onSubmit={verifyEmail}
            onCancel={clearRegistrationStateData}
          />
        );
      case 2:
        return <FeaturesAuthorization history={history} />;
      default:
        return 'Unknown stepIndex';
    }
  };

  return { staticSteps, getStepContent, registrationStep, loading };
}
