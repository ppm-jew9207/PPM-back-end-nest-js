import React, { useState } from 'react';

import VpnKeyIcon from '@material-ui/icons/VpnKey';
import TextField from '@material-ui/core/TextField/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid/Grid';
import Box from '@material-ui/core/Box/Box';
import { useForm } from 'react-hook-form';

import './shared-registration-verification.scss';

export interface SharedRegistrationVerificationProps {
  code: string;
  informationTitle?: string;
  onSubmit: (code: string) => void;
  onCancel: () => void;
  resendVerification?: () => void;
}

export const SharedRegistrationVerification = (
  props: SharedRegistrationVerificationProps
) => {
  const { handleSubmit, register } = useForm();
  const [inputValue, setInputValue] = useState(!props.code ? '' : props.code);

  return (
    <Grid
      container
      direction="column"
      justify="center"
      className="registrationVerification"
    >
      <form
        autoComplete="off"
        onSubmit={handleSubmit((e: { code: string }) => props.onSubmit(e.code))}
      >
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
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </Box>
        <p className="information-title">* {props.informationTitle}</p>
        <Grid container justify="center">
          <Box mx={2}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={!inputValue}
            >
              Confirm verification
            </Button>
          </Box>
          <Box mx={2}>
            <Button
              variant="contained"
              color="secondary"
              onClick={props.resendVerification}
            >
              Resend Verification
            </Button>
          </Box>
          <Box mx={2}>
            <Button variant="contained" onClick={props.onCancel}>
              Cancel
            </Button>
          </Box>
        </Grid>
      </form>
    </Grid>
  );
};

export default SharedRegistrationVerification;
