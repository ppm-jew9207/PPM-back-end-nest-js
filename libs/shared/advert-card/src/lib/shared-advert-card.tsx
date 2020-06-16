import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
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
  timeStamp: string;
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

  function timeCalculator(createdAt: string) {
    const dateKeys = ['months', 'days', 'hours', 'minutes', 'seconds'];
    const then = moment(createdAt);
    const now = moment();
    const duration = moment.duration(now.diff(then));
    let string = '';
    for (const key of dateKeys) {
      const count = duration[key]();
      string += `${
        count > 0
          ? `${count} ${key.slice(0, key.length - 1)}${count > 1 ? 's' : ''} `
          : ''
      }`;
    }
    return string;
  }

  return (
    <div className="advert-card">
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
          <p>{`${timeCalculator(props.timeStamp)} ago`}</p>
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
          <div>{props.shared}</div>
        </Button>

        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          startIcon={<ShareIcon />}
          onClick={props.onLikeClick}
        >
          <p>Share</p>
          <div>{props.like}</div>
        </Button>
      </div>
    </div>
  );
};
