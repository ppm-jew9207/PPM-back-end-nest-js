import React from 'react';
import { useForm } from 'react-hook-form';
import { Typography, TextField, Button, Box } from '@material-ui/core';
import './shared-forgot-password-form.scss';

export interface SharedForgotPasswordFormProps {
  onSubmit: (loginData: { email: string }) => void;
  title: string;
  subtitle: string;
  submitButtonText: string;
  inputLabel: string;
}

export const SharedForgotPasswordForm = (
  props: SharedForgotPasswordFormProps
) => {
  const { handleSubmit, register, errors } = useForm();

  return (
    <Box
      maxWidth={500}
      display="flex"
      flexDirection="column"
      mx="auto"
      className="forgot-password-container"
    >
      <Typography className="header" component="h1" variant="h5">
        {props.title}
        <Typography component="small" display="block">
          {props.subtitle}
        </Typography>
      </Typography>

      <form autoComplete="off" onSubmit={handleSubmit(props.onSubmit)}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label={props.inputLabel}
          type="email"
          name="email"
          autoComplete="email"
          autoFocus
          inputRef={register({
            required: 'Required',
          })}
          error={!!errors.email}
          helperText={!errors.email ? '' : 'This field is required'}
        />
        <Button fullWidth variant="contained" color="primary" type="submit">
          {props.submitButtonText}
        </Button>
      </form>
    </Box>
  );
};

export default SharedForgotPasswordForm;
