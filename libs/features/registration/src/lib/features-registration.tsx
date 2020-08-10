import React from 'react';
import { SharedRegistration } from '@ppm/shared/registration';
import {
  useParams
} from "react-router-dom";
import { authorizationActions, authorizationSelectors } from '@ppm/data-access/authorization';
import { useDispatch, useSelector } from 'react-redux';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import './features-registration.scss';
import { RegistrationInterface, PrivateRoutesPath } from '@ppm/common/main';
import { SharedRegistrationVerification } from '@ppm/shared/registration-verification';
import { FeaturesAuthorization } from '@ppm/features/authorization';
import { createStructuredSelector } from 'reselect';
import { CircularProgress } from '@material-ui/core';
import { clearRegistrationData } from '@ppm/data-access/local-storage';

function getSteps() {
  return ['Registration', 'Verification', 'Login'];
}

const stateSelector = createStructuredSelector({
  registrationStep: authorizationSelectors.selectRegistrationStep(),
  loading: authorizationSelectors.selectLoading()
});

export const FeaturesRegistration = (props) => {
  const dispatch = useDispatch();
  const { registrationStep, loading } = useSelector(stateSelector);
  const {code} = useParams();
  const registration = (data: RegistrationInterface) => {
    dispatch(authorizationActions.registration(data));
  };

  const verifyEmail = (code: string) => {
    dispatch(authorizationActions.verification(code));
  };

  const clearRegistrationStateData = () => {
    clearRegistrationData();    
    window.location.href = PrivateRoutesPath.POST_REGISTRY;
  }

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <SharedRegistration onSubmit={registration}/>;
      case 1:
        return <SharedRegistrationVerification code={code} onSubmit={verifyEmail} resendVerification={console.log} onCancel={clearRegistrationStateData}/>;
      case 2:
        return <FeaturesAuthorization history={props.history}/>;
      default:
        return 'Unknown stepIndex';
    }
  }

  const steps = getSteps();

  return (
    <div className="features-registration">
      {!loading &&  
        <div className="overlay">
          <div className="overlay__wrapper">
          <CircularProgress className="overlay__spinner" /> 
          </div>
        </div>
      }
      <Stepper activeStep={registrationStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        <div >{getStepContent(registrationStep)}</div>
      </div>
    </div>
  );
};

export default FeaturesRegistration;
