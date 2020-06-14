import React, { useEffect, useState } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import './shared-advert-card.scss';
import { Button } from '@material-ui/core';

export interface SharedAdvertCardProps {
  title: string;
  author?: {
    _id: string;
    firstName: string;
    lastName: string;
    img: string;
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
    const dbDate = '2020-06-13 18:33:30';
    const date = dbDate.slice(0, 10);
    const time = dbDate.slice(11, 19);
    console.log('dbDate', date, time);

    const startTime: any = new Date(`${date}T${time}`);
    console.log('Start Time', startTime);

    const endTime: any = new Date();
    console.log('endTime', endTime);
    const timeDiff = (endTime - startTime) / 1000;

    let totalSeconds = Math.round(timeDiff);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds %= 3600) / 60);
    const seconds = totalSeconds % 60;

    if (hours > 0) {
      setTimeState(`
				${hours} hour${hours > 1 ? 's' : ''},
				${minutes} minute${minutes > 1 ? 's' : ''} and 
				${seconds} second${seconds > 1 ? 's' : ''}
			`);
    } else if (minutes) {
      setTimeState(`
				${minutes} minute${minutes > 1 ? 's' : ''} and 
				${seconds} second${seconds > 1 ? 's' : ''}
			`);
    } else if (seconds) {
      setTimeState(`
				${seconds} second${seconds > 1 ? 's' : ''}
			`);
    }
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
