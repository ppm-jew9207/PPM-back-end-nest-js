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

import './shared-profile-form.scss';
import FormControlLabel from '@material-ui/core/FormControlLabel/FormControlLabel';
import Grid from '@material-ui/core/Grid/Grid';
import Box from '@material-ui/core/Box/Box';
import { useForm, Controller } from 'react-hook-form';
import Select from '@material-ui/core/Select/Select';
import Input from '@material-ui/core/Input/Input';
import Chip from '@material-ui/core/Chip/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

/* eslint-disable-next-line */
export interface SharedProfileFormProps {
  onSubmit: (submitData: {
    description: string;
    firstName: string;
    lastName: string;
    photo: string;
    fieldOfProfession: string;
    company: string;
    categories: string[];
    city: string;
    country: string;
    phone: string;
    web: string;
  }) => void;
}

export const SharedProfileForm = (props: SharedProfileFormProps) => {
  const { handleSubmit, register, errors } = useForm();

  const [categories, setCategories] = React.useState<string[]>([]);
  const [city, setCity] = React.useState<string>('');
  const [country, setCountry] = React.useState<string>('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCategories(event.target.value as string[]);
  };

  const list = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];

  return (
    <Grid container direction="column">
      <form autoComplete="off" onSubmit={handleSubmit(props.onSubmit)}>
        <Box my={1}>
          <TextField
            id="description"
            name="description"
            label="Description"
            multiline
            rows={4}
            variant="outlined"
            inputRef={register()}
          />
        </Box>
        <Box my={1}>
          <TextField
            id="firstName"
            name="firstName"
            type="text"
            variant="outlined"
            label={errors.firstName ? 'First Name * - Error' : 'First Name *'}
            inputRef={register({
              required: 'Required',
            })}
            error={errors.firstName ? true : false}
            helperText={errors.firstName ? 'This field is required' : ''}
          />
        </Box>
        <Box my={1}>
          <TextField
            id="lastName"
            name="lastName"
            type="text"
            variant="outlined"
            label="Last Name"
            inputRef={register()}
          />
        </Box>
        <Box my={1}>
          <TextField
            id="photo"
            name="photo"
            type="text"
            variant="outlined"
            label="Photo"
            inputRef={register()}
          />
        </Box>
        <Box my={1}>
          <TextField
            id="fieldOfProfession"
            name="fieldOfProfession"
            type="text"
            variant="outlined"
            label="Field of Profession"
            inputRef={register()}
          />
        </Box>
        <Box my={1}>
          <TextField
            id="company"
            name="company"
            type="text"
            variant="outlined"
            label="Company"
            inputRef={register()}
          />
        </Box>
        <Box my={1}>
          <InputLabel id="categories">Categories *</InputLabel>
          <Select
            id="categories"
            name="categories"
            multiple
            label="Categories"
            value={categories}
            onChange={handleChange}
            input={<Input id="select-multiple-chip" />}
            inputRef={register()}
            renderValue={(selected) => (
              <div>
                {(selected as string[]).map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </div>
            )}
          >
            {list.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Box my={1}>
          <InputLabel id="city-label">City</InputLabel>
          <Select
            labelId="city-label"
            id="city"
            name="city"
            value={city}
            onChange={(event) => setCity(event.target.value as string)}
            label="City"
            inputRef={register()}
          >
            {list.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Box my={1}>
          <InputLabel id="country-label">Country</InputLabel>
          <Controller
            name="country"
            defaultValue=""
            control={register}
            onChange={([selected]) => {
              console.log(selected);
              return selected;
            }}
            as={
              <Select
                labelId="country-label"
                id="country"
                name="country"
                value={country}
                onChange={(event) => setCountry(event.target.value as string)}
                label="Country"
              >
                {list.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            }
          />
        </Box>
        <Box my={1}>
          <TextField
            id="phone"
            name="phone"
            type="text"
            variant="outlined"
            label="Phone"
            inputRef={register()}
          />
        </Box>
        <Box my={1}>
          <TextField
            id="web"
            name="web"
            type="text"
            variant="outlined"
            label="Website"
            inputRef={register()}
          />
        </Box>
        <Button variant="contained" color="primary" type="submit">
          SAVE
        </Button>
      </form>
    </Grid>
  );
};

export default SharedProfileForm;
