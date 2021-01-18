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

import './shared-advert-card.scss';

export interface advertFormData {
  title: string;
  description: string;
  advertImage: string;
  // _id: string;
}
export interface SharedAdvertCardProps {
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
  onViewClick?: (id: string) => void;
  onLikeClick?: () => void;
  onSharedClick?: () => void;
  onSaveClick?: (d: advertFormData) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  })
);

export const SharedAdvertCard = (props: SharedAdvertCardProps) => {
  useEffect(() => {
    setUploadedImg(props.imgUrl);
  }, [props]);

  const classes = useStyles();

  const getSortedTimeNames = (key: string) => {
    switch (key) {
      case 'months':
        return 'mo.';
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

  const onFileLoad = (e) => {
    const file = e.currentTarget.files[0];

    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      setUploadedImg(e.target.result);
    };
    if (file) fileReader.readAsDataURL(file);
  };

  const saveEdit = (d: advertFormData) => {
    // alert(JSON.stringify(d));
    props.onSaveClick(d);
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
              src={props.author.img}
              alt=""
              height="40"
              width="40"
            />
          </button>

          <div className="card-title">
            <a href="url" onClick={() => props.onViewClick(props.author._id)}>
              <span>
                {`
                  ${props.author.firstName || ''} ${props.author.lastName || ''}
                `}
              </span>
            </a>
            <span>posted on {props.title}</span>

            <p>{`${timeCalculator(props.createAt)}`}</p>
          </div>
          <div className="editing-holder">
            <EditIcon onClick={() => setEditing(true)} />
          </div>
        </div>

        <div className="card-content">
          <p>{props.description}</p>
          <img src={props.imgUrl} alt="" />
        </div>

        <div className="social-wrapper">
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<FavoriteIcon />}
            onClick={props.onLikeClick}
          >
            <p>Like</p>
            <div>{props.like}</div>
          </Button>

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
        </div>
      </div>
    );
  } else {
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
                alt=""
                height="40"
                width="40"
              />
            </button>

            <div className="card-title">
              <a href="url" onClick={() => props.onViewClick(props.author._id)}>
                <span>
                  {`
                    ${props.author.firstName || ''} ${
                    props.author.lastName || ''
                  }
                  `}
                </span>
              </a>
              <span>
                posted on{' '}
                <TextField
                  inputRef={register({})}
                  id="title"
                  name="title"
                  defaultValue={props.title}
                />
              </span>

              <p>{`${timeCalculator(props.createAt)}`}</p>
            </div>
            <div className="editing-holder editing">
              <button type="submit">
                <SaveIcon onClick={(d) => saveEdit(d)} />
              </button>
            </div>
          </div>

          <div className="card-content">
            <TextField
              inputRef={register({})}
              name="description"
              id="description"
              multiline
              fullWidth
              defaultValue={props.description}
            />
            <div className="image-container draggable-container">
              <img
                className="files-preview-container__image"
                src={
                  (!!uploadedImg && uploadedImg.toString()) ||
                  uploadedImg.toString()
                }
                alt=""
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
                  inputRef={register({})}
                  type="file"
                  id="file-browser-input"
                  name="advertImage"
                  onDragOver={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onDrop={onFileLoad.bind(this)}
                  onChange={onFileLoad.bind(this)}
                />
              </div>
            </div>
          </div>

          <div className="social-wrapper">
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<FavoriteIcon />}
              onClick={props.onLikeClick}
            >
              <p>Like</p>
              <div>{props.like}</div>
            </Button>

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
          </div>
        </form>
      </div>
    );
  }
};
