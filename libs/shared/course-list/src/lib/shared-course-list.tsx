import React from 'react';
import {
  Button,
  Typography,
  TextField,
  Grid,
  FormControl,
  Select,
  MenuItem,
  Link,
} from '@material-ui/core';

import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import moment from 'moment';
import { SystemUpdateAlt as SystemUpdateAltIcon } from '@material-ui/icons';
import { useForm } from 'react-hook-form';
import MoreIcon from '@material-ui/icons/More';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

import './shared-course-list.scss';

export interface CourseFormData {
  title: string;
  description: string;
  courseImage: string;
  _id: string;
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

  return (
    <div className="course-list">
      <Grid container spacing={2}>
        <Grid item md={4} className="">
          <Link>
            <img
              className="course-image"
              src={
                props?.imgUrl ||
                'https://cdn.shopify.com/s/files/1/0002/4680/8603/products/sjDBHUW_1600x1600.png?v=1606994170'
              }
              alt="Course image"
            />
          </Link>
        </Grid>

        <Grid container item md={8}>
          <Grid item md={1}>
            <img
              className="mentor-img"
              src={props?.author?.img}
              alt="Course image"
            />
          </Grid>
          <Grid item md={11} className="title-content">
            <Typography>
              <span className="author">{`
                  ${props.author.firstName || ''} ${
                props.author.lastName || ''
              } `}</span>
              posted on
              <span className="title">{` ${props.title}`}</span>
            </Typography>
            <Typography className="created-at">{`${timeCalculator(
              props.createAt
            )} ago`}</Typography>
          </Grid>
          <Grid item md={12} className="description">
            <p>{`${props.description.substring(0, 250)}...`}</p>
          </Grid>
          <Grid container md={12}>
            <Grid md={6}>
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
            <Grid md={6} container justify="flex-end">
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
    </div>
  );
}

export default SharedCourseList;
