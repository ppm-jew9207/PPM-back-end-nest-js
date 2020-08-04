import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Box,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  Button,
} from '@material-ui/core';
import {
  Person,
  Lock as LockIcon,
  Phone as PhoneIcon,
  } from '@material-ui/icons';
import './shared-registration.scss';

export interface RegistrationInterface {
  email: string;
  password: string;
  phone?: string;
}

interface RegistrationFormData {
  email: string;
  password: string;
  repeatPassword: string;
  phone?: string;
}

export interface SharedRegistrationProps {
  onSubmit?: (data: RegistrationInterface) => void;
}

export const SharedRegistration = (props: SharedRegistrationProps) => {
  const { handleSubmit, register, errors, watch } = useForm();

  const submit = (data: RegistrationFormData) => {
    props.onSubmit({
      email: data.email,
      password: data.password,
      phone: data.phone,
    });
  };

  return (
    <div className="shared-registration">
      <Grid className="card" container direction="column" justify="center">
        <form autoComplete="off" onSubmit={handleSubmit(submit)}>
          <Box my={1} className="form-field">
            <TextField
              id="email"
              placeholder="Email"
              name="email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person />
                  </InputAdornment>
                ),
              }}
              fullWidth
              type="email"
              variant="outlined"
              inputRef={register({
                required: 'Required',
                pattern: {
                  value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Enter a valid e-mail address',
                },
              })}
              error={!!errors.email}
              label={!errors.email ? 'Email *' : 'Error'}
              helperText={!errors.email ? '' : errors.email.message}
            />
          </Box>

          <Box my={1} className="form-field">
            <TextField
              id="password"
              placeholder="Password"
              name="password"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
              type="password"
              variant="outlined"
              inputRef={register({
                required: 'Required',
              })}
              error={!!errors.password}
              label={!errors.password ? 'Password *' : 'Error'}
              helperText={!errors.password ? '' : errors.password.message}
            />
          </Box>
          <Box my={1} className="form-field">
            <TextField
              id="repeatPassword"
              placeholder="Repeat Password"
              name="repeatPassword"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
              type="password"
              variant="outlined"
              inputRef={register({
                required: 'Required',
                validate: (value) =>
                  value === watch('password') || "Passwords don't match.",
              })}
              error={!!errors.repeatPassword}
              label={!errors.repeatPassword ? 'Repeat Password *' : 'Error'}
              helperText={
                !errors.repeatPassword ? '' : errors.repeatPassword.message
              }
            />
          </Box>

          <Box my={1} className="form-field">
            <TextField
              id="phone"
              name="phone"
              placeholder="Phone"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIcon />
                  </InputAdornment>
                ),
              }}
              type="phone"
              variant="outlined"
              inputRef={register}
              label="Phone"
            />
          </Box>

          <Grid container justify="center">
            <Button variant="contained" color="primary" type="submit">
              Registration
            </Button>
          </Grid>
        </form>
        <Typography variant="caption" display="block" gutterBottom>
          * required fields
        </Typography>
      </Grid>
    </div>
  );
};

export default SharedRegistration;
