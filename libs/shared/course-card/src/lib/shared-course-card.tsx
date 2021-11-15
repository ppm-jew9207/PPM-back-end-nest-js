import React, { useState, useEffect } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { SystemUpdateAlt as SystemUpdateAltIcon } from '@material-ui/icons';
import { useForm } from 'react-hook-form';
import MoreIcon from '@material-ui/icons/More';
import { Link } from 'react-router-dom';
import './shared-course-card.scss';
import { SharedRank } from '@ppm/shared/rank';

export interface CourseFormData {
  title: string;
  description: string;
  courseImage: string;
  _id: string;
}
export interface SharedCourseCardProps {
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
  editable: boolean;
  onViewClick?: (id: string) => void;
  onLikeClick?: () => void;
  onSharedClick?: () => void;
  onSaveClick?: (data: CourseFormData) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  })
);

export const SharedCourseCard = (props: SharedCourseCardProps) => {
  useEffect(() => {
    setUploadedImg(props.imgUrl);
  }, [props]);

  const classes = useStyles();

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
      <div className="card">
        <div className="card-title-wrap flex-wrap">
          <button
            type="button"
            onClick={() => props.onViewClick(props.author._id)}
          >
            <img
              className="card-img"
              src={props?.author?.img}
              alt="Course image"
              height="40"
              width="40"
            />
          </button>

          <div className="card-title">
            <Link to="url" onClick={() => props.onViewClick(props.author._id)}>
              <span>
                {`
                  ${props.author.firstName || ''} ${props.author.lastName || ''}
                `}
              </span>
            </Link>
            <span>
              posted on&nbsp;
              <Link className="title" to={`/courses/${props.id}`}>
                {props.title}
              </Link>
            </span>

            <p>{timeCalculator(props.createAt)}</p>
          </div>
          {props.editable ? (
            <div className="editing-holder">
              <EditIcon onClick={() => setEditing(true)} />
            </div>
          ) : (
            ''
          )}
        </div>

        <div className="card-content">
          <p>{props.description}</p>
          <Link to={`/courses/${props.id}`}>
            <img
              src={
                props?.imgUrl ||
                'https://cdn.shopify.com/s/files/1/0002/4680/8603/products/sjDBHUW_1600x1600.png?v=1606994170'
              }
              alt="Course image"
            />
          </Link>
        </div>
        <div>
          <SharedRank value={0} isRanked={false} onUpdate={() => {}} />
        </div>
        <div className="social-wrapper">
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            startIcon={<ShareIcon />}
            onClick={props.onSharedClick}
          >
            <p>Share</p>
            <div>{props.shared}</div>
          </Button>
          <Button
            component={Link}
            variant="outlined"
            color="primary"
            className="rightButton"
            startIcon={<MoreIcon />}
            to={`/courses/${props.id}`}
          >
            <p>Read More</p>
          </Button>
        </div>
      </div>
    );
  }
  return (
    <div className="card">
      <form noValidate autoComplete="off" onSubmit={handleSubmit(saveEdit)}>
        <div className="card-title-wrap flex-wrap">
          <button
            type="button"
            onClick={() => props.onViewClick(props.author._id)}
          >
            <img
              className="card-img"
              src={props.author.img}
              alt="Course image"
              height="40"
              width="40"
            />
          </button>

          <div className="card-title">
            <Link to="url" onClick={() => props.onViewClick(props.author._id)}>
              <span>
                {`
                    ${props.author.firstName || ''} ${
                  props.author.lastName || ''
                }
                  `}
              </span>
            </Link>
            <span>
              {`posted on `}
              <TextField
                inputRef={register()}
                id="title"
                name="title"
                defaultValue={props.title}
              />
            </span>

            <p>{`${timeCalculator(props.createAt)}`}</p>
          </div>
          <div className="editing-holder editing">
            <button type="submit">
              <SaveIcon />
            </button>
          </div>
        </div>

        <div className="card-content">
          <TextField
            inputRef={register()}
            name="description"
            id="description"
            multiline
            fullWidth
            defaultValue={props.description}
          />
          <div className="image-container draggable-container">
            <img
              className="files-preview-container__image"
              src={!!uploadedImg && uploadedImg.toString()}
              alt="Course image"
            />
            <div className="middle">
              <Typography
                variant="body1"
                component="p"
                align="center"
                gutterBottom
              >
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
        </div>

        <div className="social-wrapper">
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            startIcon={<ShareIcon />}
            onClick={props.onLikeClick}
          >
            <p>Share</p>
            <div>{props.shared}</div>
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className="rightButton"
            startIcon={<MoreIcon />}
            href={`/courses/${props.id}`}
          >
            <p>Read More</p>
          </Button>
        </div>
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
};
