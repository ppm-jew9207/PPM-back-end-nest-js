import React, { useState, useEffect, ChangeEvent } from 'react';
import { useForm, Controller } from 'react-hook-form';
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
  Divider,
  Typography,
} from '@material-ui/core';

import {
  SystemUpdateAlt as SystemUpdateAltIcon,
} from '@material-ui/icons';

import Autocomplete from '@material-ui/lab/Autocomplete';
import './shared-profile-form.scss';

interface Category {
  _id: string;
  title: string;
  value: string;
}

export interface Profile {
  description: string;
  firstName: string;
  lastName: string;
  email: string;
  photo: string;
  fieldOfProfession: string;
  company: string;
  categories: string[];
  city: string;
  country: string;
  phone: string;
  website: string;
  type: string;
  socialLinks: string[];
}
export interface SharedProfileFormProps {
  onSelectCountry: ( countryName: string ) => void;
  onSelectState: ( stateName: string ) => void;
  onSubmit: (submitData:Profile) => void;
  categories: Category[];
  cities?: string[];
  countries: { country_name: string }[];
  states?: { state_name: string}[];
  profile: Profile
}

export const SharedProfileForm = (props: SharedProfileFormProps) => {
  const [uploadedImg, setUploadedImg] = useState<ArrayBuffer | string>();
  const { handleSubmit, register, control, errors } = useForm();
  const [categories, setCategories] = useState<string[]>([]);
  useEffect(() => {
    props.profile && !uploadedImg && setUploadedImg(props.profile.photo);
  },[props, uploadedImg]);

  const handleCategoriesChange = (event: ChangeEvent<{ value }>) => {
    setCategories(event.target.value);
  };

  const renderCategoryValue = (selected) => {
    const categories = {};
    props.categories.map(category => {
      categories[category.value] = category;
    });
    return <div>
    {selected.map((value: string) => (
      <Chip key={value} label={categories[value].title} />
    ))}
  </div>
  };

  const validateCategories = (value) => {
    return value.length > 0;
  };

  const onFileLoad = (e) => {
    const file = e.currentTarget.files[0];

    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      setUploadedImg(e.target.result);
    };
    if (file) fileReader.readAsDataURL(file);
  };

  return (
    <Grid container direction="column" className="profileForm">
      <form autoComplete="off" onSubmit={handleSubmit(props.onSubmit)}>
        <Box my={3}>
          <TextField
            id="firstName"
            name="firstName"
            defaultValue={props.profile.firstName || ''}
            type="text"
            variant="outlined"
            label="First Name *"
            inputRef={register({
              required: 'Required',
            })}
            error={!!errors.firstName}
            helperText={errors.firstName ? 'This field is required' : ''}
            fullWidth
          />
        </Box>
        <Box my={3}>
          <TextField
            id="lastName"
            name="lastName"
            defaultValue={props.profile.lastName || ''}
            type="text"
            variant="outlined"
            label="Last Name"
            inputRef={register}
            fullWidth
          />
        </Box>
        <Box my={3}>
          <TextField
            id="email"
            name="email"
            defaultValue={props.profile.email || ''}
            type="email"
            variant="outlined"
            label="Email"
            inputRef={register}
            fullWidth
          />
        </Box>
        <Box my={3}>
          <InputLabel   id="photoLabel">Photo</InputLabel>
          <div className="image-container">
          <div className={`draggable-container ${!uploadedImg ? 'empty' : ''}`}>
            <TextField
              inputRef={register({})}
              type="file"
              id="file-browser-input"
              name="imageUrl"
              onDragOver={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              onDrop={onFileLoad.bind(this)}
              onChange={onFileLoad.bind(this)}
            />
            <div className="files-preview-container">
              <img
                className="files-preview-container__image"
                src={(!!uploadedImg && uploadedImg.toString()) || ''}
                alt="files-preview"
              />
            </div>
            <div className="helper-text">
              <Typography
                variant="body1"
                component="p"
                align="center"
                gutterBottom
              >
                Drag and Drop Images Here
              </Typography>
              <SystemUpdateAltIcon display="inline" />
            </div>
          </div>
        </div>
        </Box>
        <Box my={3}>
          <TextField
            id="description"
            name="description"
            defaultValue={props.profile.description || ''}
            multiline
            rows={4}
            variant="outlined"
            label="Description"
            inputRef={register}
            fullWidth
          />
        </Box>
        <Box my={3}>
          <TextField
            id="fieldOfProfession"
            name="fieldOfProfession"
            defaultValue={props.profile.fieldOfProfession || ''}
            type="text"
            variant="outlined"
            label="Field of Profession"
            inputRef={register}
            fullWidth
          />
        </Box>
        <Box my={3}>
          <TextField
            id="company"
            name="company"
            defaultValue={props.profile.company || ''}
            type="text"
            variant="outlined"
            label="Company"
            inputRef={register}
            fullWidth
          />
        </Box>
        <Box my={3}>
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
                  label="Categories"
                  name="categories"
                  value={categories}
                  multiple
                  onChange={handleCategoriesChange}
                  input={<Input id="select-multiple-chip" />}
                  inputRef={register}
                  renderValue={renderCategoryValue}
                  error={!!errors.categories}
                >
                  {props.categories.map((category: Category) => (
                    <MenuItem key={category._id} value={category.value}>
                      {category.title}
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
        <Box my={3}>
          <Controller
          render={({ onChange, ...params }) => (
            <Autocomplete
              options={props.countries}
              getOptionLabel={option => option.country_name}
              renderOption={option => (
                <span>
                  {option.country_name}
                </span>
              )}
              renderInput={params => (
                <TextField
                  {...params}
                  label="Choose a country"
                  variant="outlined"
                />
              )}
              onChange={(e, data) => {
                data && props.onSelectCountry(data.country_name);
                return data;
              }}
              {...params}
            />
            )}
            onChange={([, data]) => data}
            name="country"
            control={control}
          />
        </Box>
        {props.states.length > 0 &&
        <Box my={3}>
          <Controller
          render={({ onChange, ...params }) => (
            <Autocomplete
              options={props.states}
              getOptionLabel={option => option.state_name}
              renderOption={option => (
                <span>
                  {option.state_name}
                </span>
              )}
              renderInput={params => (
                <TextField
                  {...params}
                  label="Choose a state"
                  variant="outlined"
                />
              )}
              onChange={(e, data) => {
                data && props.onSelectState(data.state_name);
                return data;
              }}
              {...params}
            />
            )}
            onChange={([, data]) => data}
            defaultValue={props.states[0]}
            name="state"
            control={control}
          />
        </Box>
        }
      {props.cities.length > 0 &&
        <Box my={3}>
          <Controller
          render={({ onChange, ...params }) => (
            <Autocomplete
              options={props.cities}
              getOptionLabel={option => option.city_name}
              renderOption={option => (
                <span>
                  {option.city_name}
                </span>
              )}
              renderInput={params => (
                <TextField
                  {...params}
                  label="Choose a city"
                  variant="outlined"
                />
              )}
              onChange={(e, data) => {
                return data;
              }}
              {...params}
            />
            )}
            onChange={([, data]) => data}
            defaultValue={props.cities[0]}
            name="city"
            control={control}
          />
        </Box>
        }
        <Box my={3}>
          <TextField
            id="phone"
            name="phone"
            defaultValue={props.profile.phone || ''}
            type="text"
            variant="outlined"
            label="Phone"
            inputRef={register}
            fullWidth
          />
        </Box>
        <Box my={3}>
          <TextField
            id="website"
            name="website"
            defaultValue={props.profile.website || ''}
            type="text"
            variant="outlined"
            label="Website"
            inputRef={register}
            fullWidth
          />
        </Box>
        <Box my={3}>
          <TextField
            id="type"
            name="type"
            defaultValue={props.profile.type || ''}
            type="text"
            variant="outlined"
            label="Type"
            inputRef={register}
            fullWidth
          />
        </Box>
        <Typography variant="overline" display="block" gutterBottom>
          Social Links
        </Typography>
        <Divider variant="middle" />
        <Box my={3}>
          <TextField
            id="facebook"
            name="facebook"
            type="text"
            variant="outlined"
            label="Facebook"
            inputRef={register}
            fullWidth
          />
        </Box>
        <Box my={3}>
          <TextField
            id="linkedin"
            name="linkedin"
            type="text"
            variant="outlined"
            label="LinkedIn"
            inputRef={register}
            fullWidth
          />
        </Box>
        <Box my={3}>
          <TextField
            id="twitter"
            name="twitter"
            type="text"
            variant="outlined"
            label="Twitter"
            inputRef={register}
            fullWidth
          />
        </Box>
        <Box my={3}>
          <TextField
            id="instagram"
            name="instagram"
            type="text"
            variant="outlined"
            label="Instagram"
            inputRef={register}
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
