import React, { useEffect, useState } from 'react';
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
  timeStamp: number;
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
  const [timeState, setTimeState] = useState('');
  const classes = useStyles();

  function timeCalculator() {
    const then = moment('2020-05-12 21:10:00');
    const now = moment('2020-06-14 22:10:50');
    const duration = moment.duration(now.diff(then));

    const months = duration.months();
    const days = duration.days();
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    setTimeState(`
			${months > 0 ? `${months} month${months > 1 ? 's' : ''},` : ''}
			${days > 0 ? `${days} day${days > 1 ? 's' : ''},` : ''}
			${hours > 0 ? `${hours} hour${hours > 1 ? 's' : ''},` : ''}
			${minutes > 0 ? `${minutes} minute${minutes > 1 ? 's' : ''} and ` : ''}
			${seconds > 0 ? `${seconds} second${seconds > 1 ? 's' : ''}` : ''}
		`);
  }

  useEffect(() => {
    timeCalculator();
  }, []);

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
          <p>{`${timeState} ago`}</p>
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
