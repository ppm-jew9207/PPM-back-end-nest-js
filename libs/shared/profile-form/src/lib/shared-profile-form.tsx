import React, { useState, ChangeEvent } from 'react';
import FormControl from '@material-ui/core/FormControl/FormControl';
import TextField from '@material-ui/core/TextField/TextField';
import Button from '@material-ui/core/Button';

import './shared-profile-form.scss';
import Grid from '@material-ui/core/Grid/Grid';
import Box from '@material-ui/core/Box/Box';
import { useForm, Controller, ErrorMessage } from 'react-hook-form';
import Select from '@material-ui/core/Select/Select';
import Input from '@material-ui/core/Input/Input';
import Chip from '@material-ui/core/Chip/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText/FormHelperText';

/* eslint-disable-next-line */
interface EntityRef {
  _id: string;
  name: string;
}
/* eslint-disable-next-line */
export interface SharedProfileFormProps {
  onSubmit: (submitData: {
    description: string;
    firstName: string;
    lastName: string;
    photo: FileList;
    fieldOfProfession: string;
    company: string;
    categories: string[];
    city: string;
    country: string;
    phone: string;
    web: string;
  }) => void;
  categories: EntityRef[];
  cities: EntityRef[];
  countries: EntityRef[];
}

export const SharedProfileForm = (props: SharedProfileFormProps) => {
  const { handleSubmit, register, control, errors } = useForm();

  const [categories, setCategories] = useState<string[]>([]);
  const [city, setCity] = useState<string>('');
  const [country, setCountry] = useState<string>('');

  const handleCategoriesChange = (event: ChangeEvent<{ value }>) => {
    setCategories(event.target.value);
  };

  const handleCityChange = (event: ChangeEvent<{ value }>) => {
    setCity(event.target.value);
  };

  const handleCountryChange = (event: ChangeEvent<{ value }>) => {
    setCountry(event.target.value);
  };

  const renderCategoryValue = (selected) => (
    <div>
      {selected.map((value: string) => (
        <Chip key={value} label={value} />
      ))}
    </div>
  );

  const validateCategories = (value) => {
    return value.length > 0;
  };

  return (
    <Grid container direction="column">
      <form autoComplete="off" onSubmit={handleSubmit(props.onSubmit)}>
        <Box my={1}>
          <InputLabel id="descriptionLabel">Description</InputLabel>
          <TextField
            id="description"
            name="description"
            multiline
            rows={4}
            variant="outlined"
            inputRef={register()}
            fullWidth
          />
        </Box>
        <Box my={1}>
          <InputLabel id="firstNameLabel">First Name *</InputLabel>
          <TextField
            id="firstName"
            name="firstName"
            type="text"
            variant="outlined"
            inputRef={register({
              required: 'Required',
            })}
            error={!!errors.firstName}
            helperText={errors.firstName ? 'This field is required' : ''}
            fullWidth
          />
        </Box>
        <Box my={1}>
          <InputLabel id="lastNameLabel">Last Name</InputLabel>
          <TextField
            id="lastName"
            name="lastName"
            type="text"
            variant="outlined"
            inputRef={register()}
            fullWidth
          />
        </Box>
        <Box my={1}>
          <InputLabel id="photoLabel">Photo</InputLabel>
          <TextField
            id="photo"
            name="photo"
            type="file"
            variant="outlined"
            inputRef={register()}
            fullWidth
          />
        </Box>
        <Box my={1}>
          <InputLabel id="fieldOfProfessionLabel">
            Field of Profession
          </InputLabel>
          <TextField
            id="fieldOfProfession"
            name="fieldOfProfession"
            type="text"
            variant="outlined"
            inputRef={register()}
            fullWidth
          />
        </Box>
        <Box my={1}>
          <InputLabel id="companyLabel">Company</InputLabel>
          <TextField
            id="company"
            name="company"
            type="text"
            variant="outlined"
            inputRef={register()}
            fullWidth
          />
        </Box>
        <Box my={1}>
          <FormControl variant="outlined" fullWidth error={!!errors.categories}>
            <InputLabel id="categoriesLabel">Categories *</InputLabel>
            <Controller
              name="categories"
              defaultValue={[]}
              control={control}
              rules={{ validate: (value) => validateCategories(value) }}
              onChange={([selected]) => {
                return selected;
              }}
              as={
                <Select
                  id="categories"
                  multiple
                  label="Categories"
                  name="categories"
                  value={categories}
                  onChange={handleCategoriesChange}
                  input={<Input id="select-multiple-chip" />}
                  inputRef={register()}
                  renderValue={renderCategoryValue}
                  error={!!errors.categories}
                >
                  {props.categories.map((category: EntityRef) => (
                    <MenuItem key={category._id} value={category.name}>
                      {category.name}
                    </MenuItem>
                  ))}
                </Select>
              }
              fullWidth
            />
            <FormHelperText>
              {errors.categories ? 'This field is required' : ''}
            </FormHelperText>
          </FormControl>
        </Box>
        <Box my={1}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="citiesLabel">City</InputLabel>
            <Controller
              name="city"
              defaultValue=""
              control={control}
              onChange={([selected]) => {
                return selected;
              }}
              as={
                <Select
                  labelId="city-label"
                  id="city"
                  name="city"
                  value={city}
                  onChange={handleCityChange}
                  label="City"
                  inputRef={register()}
                >
                  {props.cities.map((city) => (
                    <MenuItem key={city._id} value={city.name}>
                      {city.name}
                    </MenuItem>
                  ))}
                </Select>
              }
              fullWidth
            />
          </FormControl>
        </Box>
        <Box my={1}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="country-label">Country</InputLabel>
            <Controller
              name="country"
              defaultValue=""
              control={control}
              onChange={([selected]) => {
                return selected;
              }}
              as={
                <Select
                  labelId="country-label"
                  id="country"
                  name="country"
                  value={country}
                  onChange={handleCountryChange}
                  label="Country"
                >
                  {props.countries.map((country) => (
                    <MenuItem key={country._id} value={country.name}>
                      {country.name}
                    </MenuItem>
                  ))}
                </Select>
              }
              fullWidth
            />
          </FormControl>
        </Box>
        <Box my={1}>
          <InputLabel id="phoneLabel">Phone</InputLabel>
          <TextField
            id="phone"
            name="phone"
            type="text"
            variant="outlined"
            inputRef={register()}
            fullWidth
          />
        </Box>
        <Box my={1}>
          <InputLabel id="webLabel">Website</InputLabel>
          <TextField
            id="web"
            name="web"
            type="text"
            variant="outlined"
            inputRef={register()}
            fullWidth
          />
        </Box>
        <Button name="submit" variant="contained" color="primary" type="submit">
          SAVE
        </Button>
      </form>
    </Grid>
  );
};

export default SharedProfileForm;
