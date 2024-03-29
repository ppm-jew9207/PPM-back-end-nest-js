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
  OutlinedInput,
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
    color: '#3b5998',
  },
  {
    icon: 'twitter',
    link: '',
    color: '#00acee',
  },
  {
    icon: 'linkedin',
    link: '',
    color: '#0e76a8',
  },
  {
    icon: 'instagram',
    link: '',
    color: '#8134af',
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
  city: { cityName: string };
  company: string;
  country: {
    countryName: string;
    countryShortName: string;
    countryPhoneCode: number;
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
  state: { stateName: string };
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
  cities?: { cityName: string }[];
  countries: { countryName: string }[];
  states?: { stateName: string }[];
  profile: Profile;
  onCancel?: Function;
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
    setCategories(event.target.value.limit());
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
              <OutlinedInput key={value} label={categories[value].title} />
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

    //TODO:
    SOCIAL_LINKS.map((item) => {
      switch (item.icon) {
        case 'twitter': {
          if (twitter.length) item.link = twitter;
          else item.link = '';
          break;
        }
        case 'linkedin': {
          if (linkedin.length) item.link = linkedin;
          else item.link = '';
          break;
        }
        case 'facebook': {
          if (facebook.length) item.link = facebook;
          else item.link = '';
          break;
        }
        case 'instagram': {
          if (instagram.length) item.link = instagram;
          else item.link = '';
          break;
        }
      }
    });

    const profileData: Profile = {
      description,
      firstName,
      lastName,
      email,
      photo: imageUrl.length ? imageUrl : props?.profile?.photo,
      fieldOfProfession,
      company,
      categories,
      state: state?.stateName,
      city: city?.cityName,
      country: country?.countryName,
      phone,
      website,
      type,
      socialLinks: SOCIAL_LINKS,
    };
    if (props.profile && props.profile._id) profileData._id = props.profile._id;
    props.onSubmit(profileData);
  };

  return (
    <form
      className="profileForm"
      autoComplete="off"
      onSubmit={handleSubmit(onSubmitForm)}
    >
      <div className="profile-form-container">
        <Grid container spacing={2}>
          <Grid item md={12}>
            <Typography className="header" component="h1" variant="h5">
              Update Profile
            </Typography>
            <Divider />
          </Grid>
          <Grid item md={4}>
            <TextField
              className="firstName"
              id="firstName"
              name="firstName"
              defaultValue={(props.profile && props.profile.firstName) || ''}
              type="text"
              label="First Name"
              variant="outlined"
              inputRef={register({
                required: 'Required',
              })}
              error={!!errors.firstName}
              helperText={errors.firstName ? 'This field is required' : ''}
              fullWidth
            />
          </Grid>
          <Grid item md={4}>
            <TextField
              className="lastName"
              id="lastName"
              name="lastName"
              defaultValue={(props.profile && props.profile.lastName) || ''}
              type="text"
              variant="outlined"
              label="Last Name"
              inputRef={register}
              fullWidth
            />
          </Grid>
          <Grid item md={4}>
            <TextField
              className="email"
              id="email"
              name="email"
              defaultValue={(props.profile && props.profile.email) || ''}
              type="email"
              variant="outlined"
              label="Email"
              inputRef={register}
              fullWidth
            />
          </Grid>
          <Grid item md={12}>
            <div className="inner-container">
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
          </Grid>
          <Grid item md={12} className="padding-none">
            <TextField
              id="description"
              name="description"
              defaultValue={(props.profile && props.profile.description) || ''}
              multiline
              rows={2}
              variant="outlined"
              label="Description"
              inputRef={register}
              fullWidth
            />
          </Grid>

          <Grid item md={6}>
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
          </Grid>

          <Grid item md={6}>
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
          </Grid>

          <Grid item md={6}>
            <FormControl
              variant="outlined"
              fullWidth
              error={!!errors.categories}
            >
              <InputLabel id="categoriesLabel">Categories</InputLabel>
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
                    input={
                      <OutlinedInput
                        id="select-multiple-chip"
                        label="Categories"
                      />
                    }
                    inputRef={register}
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
                    {!!newCategory.title.length && (
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
                            if (!!newCategory.title.length) {
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
          </Grid>
          <Grid item md={6}>
            <Controller
              render={({ onChange, ...params }) => (
                <Autocomplete
                  defaultValue={
                    props.profile && props.countries && props.profile.country
                      ? props.countries.filter(
                          (item) => item.countryName === props.profile.country
                        )[0]
                      : props.countries[0]
                  }
                  options={props.countries}
                  getOptionLabel={(option) => option.countryName}
                  renderOption={(option) => <span>{option.countryName}</span>}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Choose a country"
                      variant="outlined"
                      autoComplete="off"
                    />
                  )}
                  onChange={(e, data) => {
                    data && props.onSelectCountry(data.countryName);
                    return onChange(data);
                  }}
                  {...params}
                />
              )}
              name="country"
              control={control}
            />

            {props.states.length > 0 && (
              <Controller
                render={({ onChange, ...params }) => (
                  <Autocomplete
                    defaultValue={
                      props.states && props.profile && props.profile.state
                        ? props.states.filter(
                            (item) => item.stateName === props.profile.state
                          )[0]
                        : []
                    }
                    options={props.states}
                    getOptionLabel={(option) => option.stateName}
                    renderOption={(option) => <span>{option.stateName}</span>}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Choose a state"
                        variant="outlined"
                        autoComplete="off"
                      />
                    )}
                    onChange={(e, data) => {
                      data && props.onSelectState(data.stateName);
                      return onChange(data);
                    }}
                    {...params}
                  />
                )}
                defaultValue={props.states[0]}
                name="state"
                control={control}
              />
            )}
            {!!props.cities.length && (
              <Controller
                render={({ onChange, ...params }) => (
                  <Autocomplete
                    defaultValue={
                      props.cities && props.profile && props.profile.city
                        ? props.cities.filter(
                            (item) => item.cityName === props.profile.city
                          )[0]
                        : props.cities[0]
                    }
                    options={props.cities}
                    getOptionLabel={(option) => option.cityName}
                    renderOption={(option) => <span>{option.cityName}</span>}
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
            )}
          </Grid>
          <Grid item md={4}>
            <TextField
              className="phone"
              id="phone"
              name="phone"
              defaultValue={(props.profile && props.profile.phone) || ''}
              type="text"
              variant="outlined"
              label="Phone"
              inputRef={register}
              fullWidth
            />
          </Grid>
          <Grid item md={4}>
            <TextField
              className="type"
              id="type"
              name="type"
              defaultValue={(props.profile && props.profile.type) || ''}
              type="text"
              variant="outlined"
              label="Type"
              inputRef={register}
              fullWidth
            />
          </Grid>
          <Grid item md={4}>
            <TextField
              className="website"
              id="website"
              name="website"
              defaultValue={(props.profile && props.profile.website) || ''}
              type="text"
              variant="outlined"
              label="Website"
              inputRef={register}
              fullWidth
            />
          </Grid>
          <Grid item md={12}>
            <Typography variant="overline" display="block" gutterBottom>
              Social Links
            </Typography>
            <Divider />
          </Grid>

          <Grid item md={6}>
            <TextField
              className="facebook"
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
          </Grid>

          <Grid item md={6}>
            <TextField
              className="twitter"
              id="twitter"
              name="twitter"
              type="text"
              variant="outlined"
              label="Twitter"
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
          </Grid>

          <Grid item md={6}>
            <TextField
              className="linkedin"
              id="linkedin"
              name="linkedin"
              type="text"
              variant="outlined"
              label="LinkedIn"
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
          </Grid>

          <Grid item md={6}>
            <TextField
              className="instagram"
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
          </Grid>

          <Grid item md={6}>
            <Button
              fullWidth
              className="submit-form"
              name="submit"
              variant="contained"
              color="primary"
              type="submit"
            >
              Save
            </Button>
          </Grid>
          <Grid item md={6}>
            <Button
              fullWidth
              className="cancel-form"
              name="submit"
              variant="contained"
              color="secondary"
              type="reset"
              onClick={() => {
                props.onCancel();
              }}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </div>
    </form>
  );
};

export default SharedProfileForm;
