import React, { useState } from 'react';
import './features-forgot-password.scss';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { SharedForgotPasswordForm } from '@ppm/shared/forgot-password-form';
import { SharedRegistrationVerification } from '@ppm/shared/registration-verification';
import { SharedCreateNewPasswordForm } from '@ppm/shared/create-new-password-form';
import { useAuthorization } from '@ppm/hooks/use-authorization';

export const FeaturesForgotPassword = () => {
  const [myEmail, setEmail] = useState('');
  const [confirmToken, setConfirmToken] = useState('');
  const {
    forgotPassword,
    step,
    forgotPasswordStepDown,
    forgotPasswordStepUp,
    forgotPasswordReset,
  } = useAuthorization();
  const steps: string[] = [
    'Reset password request',
    'Confirm your email',
    'Reset password',
  ];

  const firstStepSubmit = (email?: string) => {
    if (!myEmail) {
      setEmail(email);
    }

    forgotPassword(email || myEmail);
  };

  const submitVerificationCode = (code: string) => {
    setConfirmToken(code);
    forgotPasswordStepUp(2);
  };

  const submitResetPassword = (data: {
    newPassword: string;
    confirmNewPassword: string;
  }) => {
    forgotPasswordReset({
      email: myEmail,
      newPassword: data.newPassword,
      newPasswordToken: confirmToken,
    });
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <SharedForgotPasswordForm
            title="Reset password"
            onSubmit={(data) => firstStepSubmit(data.email)}
            subtitle=""
            submitButtonText="Confirm reset password"
            inputLabel="Email"
          />
        );
      case 1:
        return (
          <SharedRegistrationVerification
            code=""
            onSubmit={submitVerificationCode}
            onCancel={console.log}
            resendVerification={() => firstStepSubmit()}
            informationTitle="Enter verification code. (Verification code sent in your email.)"
          />
        );
      case 2:
        return (
          <SharedCreateNewPasswordForm
            onSubmit={submitResetPassword}
            title="Create new password"
            subtitle=""
          />
        );
      default:
        return '404 error.';
    }
  };

  return (
    <div>
      <Stepper activeStep={step} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {step === steps.length ? (
          <div className="center-all-element">
            <Link to="/login">All steps is done. Click here.</Link>
          </div>
        ) : (
          <div>
            <Typography>{getStepContent(step)}</Typography>
            <div>
              <Button
                disabled={step === 0}
                onClick={forgotPasswordStepDown}
                color="primary"
              >
                Back
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturesForgotPassword;
