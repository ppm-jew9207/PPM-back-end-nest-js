import React, { useEffect } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { SharedMenuButton } from '@ppm/shared/menu-button';

import './shared-advert-card.scss';

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

function timeCalculator() {
  const dbDate = '2020-06-13 17:34:10';
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

  // const d = new Date();
  // console.log(d.getHours(), d.getMinutes(), d.getSeconds());

  const endTime: any = new Date();
  console.log('endTime', endTime);
  const timeDiff = (endTime - startTime) / 1000;

  let totalSeconds = Math.round(timeDiff);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds %= 3600) / 60);
  const seconds = totalSeconds % 60;
  // console.log(`${hours} hour, ${minutes} minute and ${seconds} seconds`);

  if (hours) {
    console.log(`${hours} hour, ${minutes} minute and ${seconds} seconds`);
  } else if (minutes) {
    console.log(`${minutes} minute and ${seconds} seconds`);
  } else if (seconds) {
    console.log(`${seconds} seconds`);
  }
}

timeCalculator();

export const SharedAdvertCard = (props: SharedAdvertCardProps) => {
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

          <span>posted on your timeline</span>
          <p>{`${props.timeStamp} Minutes ago`}</p>
        </div>

        <SharedMenuButton />
      </div>

      <div className="card-content">
        <p>{props.description}</p>
        <img src={props.imgUrl} alt="" />
      </div>

      <div className="social-wrapper flex-wrap">
        <button
          type="button"
          className="wrapper-like flex-wrap"
          onClick={props.onLikeClick}
        >
          <FavoriteIcon />
          <p>Like</p>
          <div>{props.shared}</div>
        </button>

        <button
          type="button"
          className="wrapper-share flex-wrap"
          onClick={props.onSharedClick}
        >
          <ShareIcon />
          <p>Share</p>
          <div>{props.like}</div>
        </button>
      </div>
    </div>
  );
};
