import React, { useState } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';

import './shared-advert-card.scss';
import { Button } from '@material-ui/core';

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
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  })
);

export const SharedAdvertCard = (props: SharedAdvertCardProps) => {
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

  const saveEdit = () => {
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
        <form noValidate autoComplete="off">
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
                posted on <TextField id="title" defaultValue={props.title} />
              </span>

              <p>{`${timeCalculator(props.createAt)}`}</p>
            </div>
            <div className="editing-holder editing">
              <SaveIcon onClick={() => saveEdit()} />
            </div>
          </div>

          <div className="card-content">
            <TextField
              id="description"
              multiline
              fullWidth
              defaultValue={props.description}
            />
            <div className="image-container">
              <img src={props.imgUrl} alt="" />
              <div className="middle">
                <div className="text">Upload</div>
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
