import React from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Person from '@material-ui/icons/Person';
import FormControl from '@material-ui/core/FormControl/FormControl';
import TextField from '@material-ui/core/TextField/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import LockIcon from '@material-ui/icons/Lock';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import './shared-login-component.scss';
import FormControlLabel from '@material-ui/core/FormControlLabel/FormControlLabel';
import Grid from '@material-ui/core/Grid/Grid';
import Box from '@material-ui/core/Box/Box';
import { useForm } from 'react-hook-form';

/* eslint-disable-next-line */
export interface SharedLoginComponentProps {
  onLogin: (loginData: {
    username: string;
    password: string;
    rememberMe: boolean;
  }) => void;
  onForgotPassword: () => void;
}

export const SharedLoginComponent = (props: SharedLoginComponentProps) => {
  const { handleSubmit, register, errors } = useForm();

  return (
    <Grid container direction="column" justify="center">
      <Box display="flex" alignItems="center" mx="auto">
        <AccountCircle style={{ fontSize: '7.1875rem' }} />
      </Box>
      <form autoComplete="off" onSubmit={handleSubmit(props.onLogin)}>
        <Box my={1}>
          <TextField
            id="username"
            placeholder="Username"
            name="username"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person />
                </InputAdornment>
              ),
            }}
            fullWidth
            type="text"
            variant="outlined"
            inputRef={register({
              required: 'Required',
            })}
            error={errors.username ? true : false}
            label={errors.username ? 'Error' : ''}
            helperText={errors.username ? 'This field is required' : ''}
          />
        </Box>

        <Box my={1}>
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
            error={errors.password ? true : false}
            label={errors.password ? 'Error' : ''}
            helperText={errors.password ? 'This field is required' : ''}
          />
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Box>
            <FormControlLabel
              value="rememberMe"
              control={<Checkbox color="primary" />}
              name="rememberMe"
              label="Remember Me"
              labelPlacement="end"
              inputRef={register()}
            />
          </Box>
          <Box py={1.5}>
            <a href="#forgotPassword" onClick={props.onForgotPassword}>
              <i>Forgot Password?</i>
            </a>
          </Box>
        </Box>
        <Grid container justify="center">
          <Button variant="contained" color="primary" type="submit">
            LOGIN
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

export default SharedLoginComponent;
