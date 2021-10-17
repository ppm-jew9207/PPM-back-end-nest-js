import React, { useState } from 'react';
import {
  Button,
  Typography,
  TextField,
  Grid,
  FormControl,
  Select,
  MenuItem,
  Link,
  Chip,
} from '@material-ui/core';

import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import moment from 'moment';
import {
  Category,
  SystemUpdateAlt as SystemUpdateAltIcon,
} from '@material-ui/icons';
import { useForm } from 'react-hook-form';
import MoreIcon from '@material-ui/icons/More';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import StarIcon from '@material-ui/icons/Star';

import './shared-course-list.scss';

export interface CourseFormData {
  title: string;
  description: string;
  courseImage: string;
  _id: string;
}
interface Category {
  _id: string;
  title: string;
  value: string;
  checked: boolean;
}
/* eslint-disable-next-line */
export interface SharedCourseListProps {
  id: string;
  title: string;
  author?: {
    _id: string;
    firstName?: string;
    lastName?: string;
    img?: string;
  };
  createAt: string;
  description: string;
  like: number;
  shared: number;
  imgUrl: string;
  categories: Category[];
  editable?: boolean;
  onViewClick?: (id: string) => void;
  onLikeClick?: () => void;
  onSharedClick?: () => void;
  onSaveClick?: (data: CourseFormData) => void;
}

export function SharedCourseList(props: SharedCourseListProps) {
  const getSortedTimeNames = (key: string) => {
    switch (key) {
      case 'months':
        return 'month.';
      case 'days':
        return 'd.';
      case 'hours':
        return 'h';
      case 'minutes':
        return 'min.';
      case 'seconds':
        return 's';
      default:
        return key;
    }
  };

  const timeCalculator = (createdAt: string) => {
    const dateKeys = ['months', 'days', 'hours', 'minutes', 'seconds'];
    const then = moment(createdAt);
    const now = moment();
    const duration = moment.duration(now.diff(then));
    let string = '';
    for (const key of dateKeys) {
      const count = duration[key]();
      string += `${count > 0 ? `${count} ${getSortedTimeNames(key)} ` : ''}`;

      if (
        count > 0 &&
        (key === 'months' || key === 'days' || key === 'hours')
      ) {
        break;
      }
    }
    return string;
  };
  const [editing, setEditing] = useState(false);
  const [uploadedImg, setUploadedImg] = useState<ArrayBuffer | string>(null);

  const { handleSubmit, register } = useForm();

  const onFileLoad = (e: any) => {
    const file = e.currentTarget.files[0];

    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      setUploadedImg(e.target.result);
    };
    if (file) fileReader.readAsDataURL(file);
  };

  const saveEdit = (data: CourseFormData) => {
    props.onSaveClick(data);
    setEditing(false);
  };

  if (!editing) {
    return (
      <div className="course-list">
        <Grid container>
          <Grid item md={4}>
            <Link href={`/courses/${props.id}`}>
              <img
                className="course-image full"
                src={
                  props?.imgUrl ||
                  'https://cdn.shopify.com/s/files/1/0002/4680/8603/products/sjDBHUW_1600x1600.png?v=1606994170'
                }
                alt="Course image"
              />
            </Link>
          </Grid>
          <Grid item md={8} container>
            <Grid item md container direction="row">
              <Grid item md={1}>
                <img
                  className="mentor-img"
                  src={props?.author?.img}
                  alt="Course image"
                />
              </Grid>
              <Grid item md={10}>
                <Typography>
                  <a href={`/mentor/${props.author._id}`}>
                    <span className="author">{`
                  ${props.author.firstName || ''} ${
                      props.author.lastName || ''
                    } `}</span>
                  </a>
                  posted on
                  <a href={`/courses/${props.id}`}>
                    <span className="title">{` ${props.title}`}</span>
                  </a>
                </Typography>
                <Typography className="created-at">{`${timeCalculator(
                  props.createAt
                )} ago`}</Typography>
              </Grid>
              <Grid item md={1}>
                {props.editable ? (
                  <div className="editing-holder">
                    <EditIcon onClick={() => setEditing(true)} />
                  </div>
                ) : (
                  ''
                )}
              </Grid>
              <Grid item md={12} className="description full">
                <Typography variant="body2">
                  {`${props.description.substring(0, 150)}...`}
                </Typography>
              </Grid>
              <Grid item md={12} className="categories">
                {props.categories.map((category: Category) => {
                  return (
                    <Chip
                      className="chip-tag"
                      size="small"
                      variant="outlined"
                      label={category.title}
                      key={category._id}
                    />
                  );
                })}
              </Grid>
              <Grid item md={12} className="rating">
                <Typography className="rating-text" variant="h6">
                  <span>Rating:</span> 5
                </Typography>
              </Grid>
              <Grid item md={8}>
                <Button
                  className="space-between"
                  variant="outlined"
                  size="small"
                  color="secondary"
                  startIcon={<FavoriteIcon />}
                  onClick={props.onLikeClick}
                >
                  {`like ${props.like}`}
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  startIcon={<ShareIcon />}
                  onClick={props.onSharedClick}
                >
                  {`share ${props.shared}`}
                </Button>
              </Grid>
              <Grid item md={4}>
                <Grid container item md justify="flex-end">
                  <Button
                    className="show-more"
                    variant="outlined"
                    size="small"
                    color="primary"
                    startIcon={<MoreIcon />}
                    href={`/courses/${props.id}`}
                  >
                    Read More
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
  return (
    <div className="course-list">
      <form noValidate autoComplete="off" onSubmit={handleSubmit(saveEdit)}>
        <Grid container>
          <Grid item md={4}>
            <div className="image-container draggable-container">
              <img
                className="files-preview-container__image course-image"
                src={
                  props.imgUrl ||
                  'https://cdn.shopify.com/s/files/1/0002/4680/8603/products/sjDBHUW_1600x1600.png?v=1606994170'
                }
                alt="Course image"
              />
              <div className="middle">
                <Typography variant="body1" component="p" align="center">
                  Drag and Drop Images Here
                </Typography>
                <SystemUpdateAltIcon display="inline" />
                <TextField
                  className="file-browser-input"
                  inputRef={register()}
                  type="file"
                  id="file-browser-input"
                  name="courseImage"
                  onDragOver={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onDrop={onFileLoad}
                  onChange={onFileLoad}
                />
              </div>
            </div>
          </Grid>
          <Grid item md={8} container>
            <Grid item md container direction="row">
              <Grid item md={1}>
                <img
                  className="mentor-img"
                  src={props?.author?.img}
                  alt="Course image"
                />
              </Grid>
              <Grid item md={10}>
                <div>
                  <span className="author">{`
          ${props.author.firstName || ''} ${
                    props.author.lastName || ''
                  } `}</span>
                  {`posted on `}
                  <TextField
                    inputRef={register()}
                    id="title"
                    name="title"
                    defaultValue={props.title}
                  />
                </div>
                <Typography className="created-at">{`${timeCalculator(
                  props.createAt
                )} ago`}</Typography>
              </Grid>
              <Grid item md={1}>
                <div className="editing-holder editing">
                  <button type="submit">
                    <SaveIcon fontSize="small" />
                  </button>
                </div>
              </Grid>
              <Grid item md={12} className="description full">
                <TextField
                  inputRef={register()}
                  name="description"
                  id="description"
                  multiline
                  fullWidth
                  defaultValue={props.description}
                />
              </Grid>
              <Grid item md={12} className="categories">
                {props.categories.map((category: Category) => {
                  return (
                    <Chip
                      className="chip-tag"
                      size="small"
                      variant="outlined"
                      label={category.title}
                      key={category._id}
                    />
                  );
                })}
              </Grid>
              <Grid item md={12} className="rating">
                <Typography className="rating-text" variant="h6">
                  <span>Rating:</span> 5
                </Typography>
              </Grid>
              <Grid item md={8}>
                <Button
                  className="space-between"
                  variant="outlined"
                  size="small"
                  color="secondary"
                  startIcon={<FavoriteIcon />}
                  onClick={props.onLikeClick}
                >
                  {`like ${props.like}`}
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  startIcon={<ShareIcon />}
                  onClick={props.onSharedClick}
                >
                  {`share ${props.shared}`}
                </Button>
              </Grid>
              <Grid item md={4}>
                <Grid container item md justify="flex-end">
                  <Button
                    className="show-more"
                    variant="outlined"
                    size="small"
                    color="primary"
                    startIcon={<MoreIcon />}
                    href={`/courses/${props.id}`}
                  >
                    Read More
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <TextField
          inputRef={register()}
          id="id"
          name="id"
          defaultValue={props.id}
          className="hidden"
        />
      </form>
    </div>
  );
}

export default SharedCourseList;
