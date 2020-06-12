import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { SharedMenuButton } from '../../../menu-button/src/lib/shared-menu-button';

import './shared-advert-card.scss';

export interface SharedAdvertCardProps {
  title: string;
  author: {
    _id: number;
    firstName: string;
    lastName: string;
    img: string;
  };
  timeStamp: number;
  description: string;
  like: number;
  shared: number;
  imgUrl: string;
}

export const SharedAdvertCard = (props: SharedAdvertCardProps) => {
  const onViewClick = (authId: number): void => {
    // event.preventDefault();
    // console.log(authId);
  };

  const onLikeClick = (): void => {
    // console.log('onLikeClick');
  };

  const onSharedClick = (): void => {
    // console.log('onSharedClick');
  };

  return (
    <div className="card">
      <div className="card-title-wrap flex-wrap">
        <button type="button" onClick={() => onViewClick(props.author._id)}>
          <img
            className="card-img"
            src={props.author.img}
            alt=""
            height="40"
            width="40"
          />
        </button>

        <div className="card-title">
          <a href="url" onClick={() => onViewClick(props.author._id)}>
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
          onClick={onLikeClick}
        >
          <FavoriteIcon />
          <p>Like</p>
          <div>{props.shared}</div>
        </button>

        <button
          type="button"
          className="wrapper-share flex-wrap"
          onClick={onSharedClick}
        >
          <ShareIcon />
          <p>Share</p>
          <div>{props.like}</div>
        </button>
      </div>
    </div>
  );
};
