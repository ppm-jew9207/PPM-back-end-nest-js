import React, { useState, useEffect, ChangeEvent, useRef } from 'react';
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
import { green, red } from '@material-ui/core/colors';

import {
  SystemUpdateAlt as SystemUpdateAltIcon,
  Clear as ClearIcon,
  Check as CheckIcon,
} from '@material-ui/icons';

import Autocomplete from '@material-ui/lab/Autocomplete';
import './shared-profile-form.scss';
import { profile } from 'console';

const SOCIAL_LINKS = [
  {
    icon: 'facebook',
    link: '',
    color: '#3b5999',
  },
  {
    icon: 'twitter',
    link: '',
    color: '#55acee',
  },
  {
    icon: 'linkedin',
    link: '',
    color: '#55acee',
  },
  {
    icon: 'instagram',
    link: '',
    color: '#55acee',
  },
];

interface SocialLink {
  icon: string;
  link: string;
  color: string;
}

export interface Category {
  _id?: string;
  title: string;
  value: string;
}

interface RawInput {
  categories: string[];
  city: { city_name: string };
  company: string;
  country: {
    country_name: string;
    country_short_name: string;
    country_phone_code: number;
  };
  description: string;
  email: string;
  facebook: string;
  fieldOfProfession: string;
  firstName: string;
  imageUrl: string | FileList;
  instagram: string;
  lastName: string;
  linkedin: string;
  phone: string;
  state: { state_name: string };
  twitter: string;
  type: string;
  website: string;
  courseId?: string;
}
export interface Profile {
  _id?: string;
  description: string;
  firstName: string;
  lastName: string;
  email: string;
  photo: string | ArrayBuffer | FileList;
  fieldOfProfession: string;
  company: string;
  categories: string[];
  state: string;
  city: string;
  country: string;
  phone: string;
  website: string;
  type: string;
  socialLinks: SocialLink[];
  courseId?: string;
}
export interface SharedProfileFormProps {
  onSelectCountry: (countryName: string) => void;
  onSelectState: (stateName: string) => void;
  onSubmit: (submitData: Profile) => void;
  onAddCategory: (submitData: Category) => void;
  categories: Category[];
  cities?: { city_name: string }[];
  countries: { country_name: string }[];
  states?: { state_name: string }[];
  profile: Profile;
}

export const SharedProfileForm = (props: SharedProfileFormProps) => {
  const [newCategory, setNewCategory] = React.useState<Category>({
    title: '',
    value: '',
  });
  const [uploadedImg, setUploadedImg] = useState<
    ArrayBuffer | string | FileList
  >();
  const { handleSubmit, register, control, errors } = useForm();
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    props.profile && !uploadedImg && setUploadedImg(props.profile.photo);
  }, [props, uploadedImg]);

  const handleNewCategoryInput = (event: ChangeEvent<{ value: string }>) => {
    const newCategory = {
      title: event.target.value,
      value: event.target.value.toLowerCase().replace(/[^a-zA-Z0-9]/gi, '_'),
    };
    setNewCategory(newCategory);
  };

  const stopImmediatePropagation = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
  };

  const handleCategoriesChange = (event: ChangeEvent<{ value }>) => {
    setCategories(event.target.value);
  };

  const renderCategoryValue = (selected) => {
    const categories = {};
    props.categories.map((category) => {
      categories[category.value] = category;
    });
    return (
      <div>
        {selected.map(
          (value: string) =>
            categories[value] && (
              <Chip key={value} label={categories[value].title} />
            )
        )}
      </div>
    );
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

  const onSubmitForm = (formData: RawInput) => {
    const {
      categories,
      city,
      company,
      country,
      description,
      email,
      facebook,
      fieldOfProfession,
      firstName,
      imageUrl,
      instagram,
      lastName,
      linkedin,
      phone,
      state,
      twitter,
      type,
      website,
    } = formData;

    SOCIAL_LINKS.map((item) => {
      switch (item.icon) {
        case 'twitter': {
          if (twitter.length) item.link = twitter;
          break;
        }
        case 'linkedin': {
          if (linkedin.length) item.link = linkedin;
          break;
        }
        case 'facebook': {
          if (facebook.length) item.link = facebook;
          break;
        }
        case 'instagram': {
          if (instagram.length) item.link = instagram;
          break;
        }
      }
    });

    const profileData: Profile = {
      description,
      firstName,
      lastName,
      email,
      photo: imageUrl.length ? imageUrl : props.profile.photo,
      fieldOfProfession,
      company,
      categories,
      state: state.state_name,
      city: city.city_name,
      country: country.country_name,
      phone,
      website,
      type,
      socialLinks: SOCIAL_LINKS,
    };
    if (props.profile && props.profile._id) profileData._id = props.profile._id;

    props.onSubmit(profileData);
  };

  return (
    <Grid container direction="column" className="profileForm">
      <form autoComplete="off" onSubmit={handleSubmit(onSubmitForm)}>
        <Box my={3}>
          <TextField
            id="firstName"
            name="firstName"
            defaultValue={(props.profile && props.profile.firstName) || ''}
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
            defaultValue={(props.profile && props.profile.lastName) || ''}
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
            defaultValue={(props.profile && props.profile.email) || ''}
            type="email"
            variant="outlined"
            label="Email"
            inputRef={register}
            fullWidth
          />
        </Box>
        <Box my={3}>
          <InputLabel id="photoLabel">Photo</InputLabel>
          <div className="image-container">
            <div
              className={`draggable-container ${!uploadedImg ? 'empty' : ''}`}
            >
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
            defaultValue={(props.profile && props.profile.description) || ''}
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
            defaultValue={
              (props.profile && props.profile.fieldOfProfession) || ''
            }
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
            defaultValue={(props.profile && props.profile.company) || ''}
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
              defaultValue={
                props.profile && props.profile.categories
                  ? props.profile.categories
                  : []
              }
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
                  <MenuItem
                    dense
                    divider
                    value={[]}
                    onClickCapture={stopImmediatePropagation}
                    onKeyDown={(event) => event.stopPropagation()}
                    className="new-category__form"
                  >
                    <TextField
                      id="new-category"
                      name="new-category"
                      type="text"
                      variant="outlined"
                      size="small"
                      label="Add new"
                      className="new-category__input"
                      value={newCategory.title}
                      onChange={handleNewCategoryInput}
                    />
                  </MenuItem>
                  {newCategory.title.length > 0 && (
                    <div className="new-category__control">
                      <Button
                        size="small"
                        variant="contained"
                        style={{ color: '#fff', background: green[600] }}
                        endIcon={
                          <CheckIcon
                            className="new-category__add"
                            display="inline"
                          />
                        }
                        className="new-category__add"
                        type="button"
                        onClick={() => {
                          if (newCategory.value.length > 0) {
                            props.onAddCategory(newCategory);
                            setNewCategory({ title: '', value: '' });
                          }
                        }}
                      ></Button>
                      <Button
                        className="new-category__clear"
                        onClick={() => {
                          setNewCategory({ title: '', value: '' });
                        }}
                        style={{ color: '#fff', background: red[600] }}
                      >
                        <ClearIcon display="inline" />
                      </Button>
                    </div>
                  )}
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
                defaultValue={
                  props.profile && props.countries && props.profile.country
                    ? props.countries.filter(
                        (item) => item.country_name === props.profile.country
                      )[0]
                    : props.countries[0]
                }
                options={props.countries}
                getOptionLabel={(option) => option.country_name}
                renderOption={(option) => <span>{option.country_name}</span>}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Choose a country"
                    variant="outlined"
                    autoComplete="off"
                  />
                )}
                onChange={(e, data) => {
                  data && props.onSelectCountry(data.country_name);
                  return onChange(data);
                }}
                {...params}
              />
            )}
            name="country"
            control={control}
          />
        </Box>
        {props.states.length > 0 && (
          <Box my={3}>
            <Controller
              render={({ onChange, ...params }) => (
                <Autocomplete
                  defaultValue={
                    props.states && props.profile && props.profile.state
                      ? props.states.filter(
                          (item) => item.state_name === props.profile.state
                        )[0]
                      : []
                  }
                  options={props.states}
                  getOptionLabel={(option) => option.state_name}
                  renderOption={(option) => <span>{option.state_name}</span>}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Choose a state"
                      variant="outlined"
                      autoComplete="off"
                    />
                  )}
                  onChange={(e, data) => {
                    data && props.onSelectState(data.state_name);
                    return onChange(data);
                  }}
                  {...params}
                />
              )}
              defaultValue={props.states[0]}
              name="state"
              control={control}
            />
          </Box>
        )}
        {props.cities.length > 0 && (
          <Box my={3}>
            <Controller
              render={({ onChange, ...params }) => (
                <Autocomplete
                  defaultValue={
                    props.cities && props.profile && props.profile.city
                      ? props.cities.filter(
                          (item) => item.city_name === props.profile.city
                        )[0]
                      : props.cities[0]
                  }
                  options={props.cities}
                  getOptionLabel={(option) => option.city_name}
                  renderOption={(option) => <span>{option.city_name}</span>}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Choose a city"
                      variant="outlined"
                      autoComplete="off"
                    />
                  )}
                  onChange={(e, data) => {
                    return onChange(data);
                  }}
                  {...params}
                />
              )}
              name="city"
              control={control}
            />
          </Box>
        )}
        <Box my={3}>
          <TextField
            id="phone"
            name="phone"
            defaultValue={(props.profile && props.profile.phone) || ''}
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
            defaultValue={(props.profile && props.profile.website) || ''}
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
            defaultValue={(props.profile && props.profile.type) || ''}
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
            defaultValue={
              props.profile &&
              props.profile.socialLinks[0] &&
              props.profile.socialLinks[0].link
                ? props.profile.socialLinks[0].link
                : ''
            }
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
            defaultValue={
              props.profile &&
              props.profile.socialLinks[1] &&
              props.profile.socialLinks[1].link
                ? props.profile.socialLinks[1].link
                : ''
            }
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
            defaultValue={
              props.profile &&
              props.profile.socialLinks[2] &&
              props.profile.socialLinks[2].link
                ? props.profile.socialLinks[2].link
                : ''
            }
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
            defaultValue={
              props.profile &&
              props.profile.socialLinks[3] &&
              props.profile.socialLinks[3].link
                ? props.profile.socialLinks[3].link
                : ''
            }
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
