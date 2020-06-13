import React, { useEffect, useState } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
// import { SharedMenuButton } from '@ppm/shared/menu-button';
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
    const dbDate = '2020-06-13 16:34:10';
    // const yyyy: number = +dbDate.slice(0, 4);
    // const mm: number = +dbDate.slice(5, 7);
    // const dd: number = +dbDate.slice(8, 10);
    const date = dbDate.slice(0, 10);
    // const h: number = +dbDate.slice(11, 13);
    // const m: number = +dbDate.slice(14, 16);
    // const s: number = +dbDate.slice(17, 19);
    const time = dbDate.slice(11, 19);
    // console.log('dbDate - time', yyyy, mm, dd, ' ', h, m, s);
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
      setTimeState(`${hours} hours, ${minutes} minutes and ${seconds} seconds`);
    } else if (minutes) {
      setTimeState(`${minutes} minute and ${seconds} seconds`);
    } else if (seconds) {
      setTimeState(`${seconds} seconds`);
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
            <span>{`${props.author.firstName} ${props.author.lastName} `}</span>
          </a>

          <span>posted on {props.title}</span>
          <p>{`${timeState} ago`}</p>
        </div>

        {/* <SharedMenuButton /> */}
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
