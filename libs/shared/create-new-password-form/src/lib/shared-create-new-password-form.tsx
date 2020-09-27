import React from 'react';
import { useForm } from 'react-hook-form';
import { Typography, TextField, Button, Box } from '@material-ui/core';
import './shared-create-new-password-form.scss';

export interface SharedCreateNewPasswordFormProps {
  onSubmit: (data: {newPassword: string, confirmNewPassword: string}) => void;
  title: string;
  subtitle: string;
}

export const SharedCreateNewPasswordForm = (
  props: SharedCreateNewPasswordFormProps
) => {
  const { handleSubmit, register, errors, watch } = useForm();

  return (
    <Box maxWidth={500} display="flex" flexDirection="column" mx="auto">
      <Typography className="header" component="h1" variant="h5">
        {props.title}
        <Typography component="small" display="block">
          {props.subtitle}
        </Typography>
      </Typography>

      <form onSubmit={handleSubmit(props.onSubmit)}>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="newPassword"
          label="New password"
          type="password"
          name="newPassword"
          inputRef={register({
            required: 'This field required',
          })}
          error={!!errors.newPassword}
          helperText={!errors.newPassword ? '' : errors.newPassword['message']}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="confirmNewPassword"
          label="Repeat password"
          type="password"
          name="confirmNewPassword"
          inputRef={register({
            required: 'This field is required',
            validate: (value) =>
                  value === watch('newPassword') || "Wrong password.",
          })}
          error={!!errors.confirmNewPassword}
          helperText={!errors.confirmNewPassword ? '' : errors.confirmNewPassword['message']}
        />
        <Button fullWidth variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default SharedCreateNewPasswordForm;
