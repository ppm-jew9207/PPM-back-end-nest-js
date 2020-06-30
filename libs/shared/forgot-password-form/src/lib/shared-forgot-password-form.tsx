import React, { FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import { Typography, TextField, Button, Box } from '@material-ui/core';
import './shared-forgot-password-form.scss';

/* eslint-disable-next-line */
export interface SharedForgotPasswordFormProps {
  onSendEmail: (loginData: { email: string }) => void;
}

export const SharedForgotPasswordForm = (
  props: SharedForgotPasswordFormProps
) => {
  const { handleSubmit, register, errors } = useForm();

  return (
    <Box maxWidth={500} display="flex" flexDirection="column" mx="auto">
      <Typography className="header" component="h1" variant="h5">
        Forgot password?
        <Typography component="small" display="block">
          No worries! Just enter your email and we'll send you a reset password
          link.
        </Typography>
      </Typography>

      <form autoComplete="off" onSubmit={handleSubmit(props.onSendEmail)}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
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
          Reset password
        </Button>
      </form>
    </Box>
  );
};

export default SharedForgotPasswordForm;
