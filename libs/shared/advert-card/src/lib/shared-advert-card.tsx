import React from 'react';
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

function addZero(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}

function timeCalculator() {
  const dbDate = '2020-06-13 16:21:10';
  // const yyyy: number = +dbDate.slice(0, 4);
  // const mm: number = +dbDate.slice(5, 7);
  // const dd: number = +dbDate.slice(8, 10);
  const date = dbDate.slice(0, 10);
  // const h: number = +dbDate.slice(11, 13);
  // const m: number = +dbDate.slice(14, 16);
  // const s: number = +dbDate.slice(17, 19);
  const time = dbDate.slice(11, 19);
  // console.log('dbDate - time', yyyy, mm, dd, ' ', h, m, s);
  console.log('dbDate - time', date, time);

  // const startTime: any = new Date(`${date}T16:00:10`);
  // const startTime: any = new Date(`2020-06-13T16:00:10`);
  const startTime: any = new Date('2020-06-13T14:00:10');
  console.log('Start Time', startTime);
  console.log(startTime.getMilliseconds());

  const d = new Date();

  console.log(d.getHours(), d.getMinutes(), d.getSeconds());

  // const date2 = new Date();
  // console.log(
  //   date2.getFullYear() + '-' + (date2.getMonth() + 1) + '-' + date2.getDate()
  // );
  // const today = new Date();
  // const dd = today.;

  // const mm = today.getMonth() + 1;
  // const yyyy = today.getFullYear();

  // const endTime: any = new Date(`${yyyy}:${mm}:${dd}T16:02:00`);
  // const endTime: any = new Date('2020-06-13T16:02:00');
  const endTime: any = new Date();
  console.log('endTime', endTime);
  const timeDiff = (endTime - startTime) / 1000;

  let totalSeconds = Math.round(timeDiff);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds %= 3600) / 60);
  const seconds = totalSeconds % 60;
  console.log(`${hours} hour, ${minutes} minute and ${seconds} seconds`);
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
