import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Box, Typography } from '@material-ui/core';
import './shared-create-advert-form.scss';

export interface SharedCreateAdvertFormProps {
  onSubmit: (advertData: { title: string }) => void;
  title: string;
  submitButtonText: string;
  titleInputLabel: string;
  descriptionInputLabel: string;
}

export const SharedCreateAdvertForm = (props: SharedCreateAdvertFormProps) => {
  const { handleSubmit, register, control, errors } = useForm();

  return (
    <Box maxWidth={500} display="flex" flexDirection="column" mx="auto">
      <Typography className="header" component="h1" variant="h5">
        {props.title}
      </Typography>

      <form autoComplete="off" onSubmit={handleSubmit(props.onSubmit)}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="title"
          label={props.titleInputLabel}
          type="text"
          name="title"
          autoComplete="title"
          autoFocus
          inputRef={register({
            required: 'Required',
          })}
          error={!!errors.title}
          helperText={!errors.title ? '' : 'Title is required'}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="description"
          label={props.descriptionInputLabel}
          type="text"
          name="description"
          autoComplete="description"
          autoFocus
          inputRef={register({})}
          multiline
          rows={8}
        />
        <Button fullWidth variant="contained" color="primary" type="submit">
          {props.submitButtonText}
        </Button>
      </form>
    </Box>
  );
};

export default SharedCreateAdvertForm;
