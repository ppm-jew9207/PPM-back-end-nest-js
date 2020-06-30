import React from 'react';

import VpnKeyIcon from '@material-ui/icons/VpnKey';
import TextField from '@material-ui/core/TextField/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid/Grid';
import Box from '@material-ui/core/Box/Box';
import { useForm } from 'react-hook-form';

import './shared-registration-verification.scss';

/* eslint-disable-next-line */
export interface SharedRegistrationVerificationProps {
  onSubmit: (data: { code: string }) => void;
  onCancel: () => void;
  resendVerification: () => void;
}

export const SharedRegistrationVerification = (
  props: SharedRegistrationVerificationProps
) => {
  const { handleSubmit, register } = useForm();

  return (
    <Grid container direction="column" justify="center">
      <form autoComplete="off" onSubmit={handleSubmit(props.onSubmit)}>
        <Box my={1}>
          <TextField
            id="code"
            placeholder="Code"
            name="code"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <VpnKeyIcon />
                </InputAdornment>
              ),
            }}
            fullWidth
            type="text"
            variant="outlined"
            inputRef={register}
          />
        </Box>
        <Grid container justify="center">
          <Button variant="contained" color="primary" type="submit">
            LOGIN
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={props.onCancel}
          >
            Resend Verification
          </Button>
          <Button variant="contained" onClick={props.resendVerification}>
            Cancel
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

export default SharedRegistrationVerification;
