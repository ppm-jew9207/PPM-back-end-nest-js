import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import './features-registration.scss';
import { CircularProgress } from '@material-ui/core';
import { useRegistration } from '@ppm/hooks/use-registration';
import { History } from '@ppm/common/main';

export const FeaturesRegistration = (props: {history: History}) => {
  const {loading, staticSteps, registrationStep, getStepContent} = useRegistration(props.history);

  return (
    <div className="features-registration">
      {loading &&  
        <div className="overlay">
          <div className="overlay__wrapper">
          <CircularProgress className="overlay__spinner" /> 
          </div>
        </div>
      }
      <Stepper activeStep={registrationStep} alternativeLabel>
        {staticSteps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        <div>{getStepContent(registrationStep)}</div>
      </div>
    </div>
  );
};

export default FeaturesRegistration;
