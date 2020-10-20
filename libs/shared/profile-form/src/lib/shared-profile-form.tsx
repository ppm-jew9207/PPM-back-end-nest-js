import React, { useState, ChangeEvent } from 'react';
import { useForm, Controller, ErrorMessage } from 'react-hook-form';
import {
  FormControl,
  TextField,
  Button,
  Grid,
  Box,
  Select,
  Input,
  Chip,
  MenuItem,
  InputLabel,
  FormHelperText,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './shared-profile-form.scss';

interface EntityRef {
  _id: string;
  name: string;
}

export interface SharedProfileFormProps {
  onSubmit: (submitData: {
    description: string;
    firstName: string;
    lastName: string;
    email: string;
    photo: FileList;
    fieldOfProfession: string;
    company: string;
    categories: string[];
    city: string;
    country: string;
    phone: string;
    web: string;
    type: string;
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
    <Grid container direction="column" className="profileForm">
      <form autoComplete="off" onSubmit={handleSubmit(props.onSubmit)}>
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
          <InputLabel id="emailLabel">Email</InputLabel>
          <TextField
            id="email"
            name="email"
            type="email"
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
        <Autocomplete
          id="city"
          freeSolo
          options={props.cities.map((option) => option.name)}
          renderInput={(params) => (
            <TextField {...params} label="City" value={city} margin="normal" variant="outlined" />
          )}
        />
        <Autocomplete
          id="country"
          freeSolo
          options={props.countries.map((option) => option.name)}
          renderInput={(params) => (
            <TextField {...params} label="Country" value={country} margin="normal" variant="outlined" />
          )}
        />
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
        <Box my={1}>
          <InputLabel id="typeLabel">Type</InputLabel>
          <TextField
            id="type"
            name="type"
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
