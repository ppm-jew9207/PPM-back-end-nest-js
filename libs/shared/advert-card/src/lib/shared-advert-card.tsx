import React from 'react';
import IconButton from '@material-ui/core/IconButton';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

// import './shared-advert-card.scss';

const MenuButton = () => {
  // const options = ['1', '2'];

  // const ITEM_HEIGHT = 48;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  // const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  // const handleClose = (): void => {
  //   setAnchorEl(null);
  // };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>

      {/* <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === 'Pyxis'}
            onClick={handleClose}
          >
            {option}
          </MenuItem>
        ))}
      </Menu> */}
    </div>
  );
};

export interface SharedAdvertCardProps {
  title: string;
  author: Author;
  timeStamp: number;
  description: string;
  like: number;
  shared: number;
  imgUrl: string;
}

export interface Author {
  _id: number;
  firstName: string;
  lastName: string;
  img: string;
}

const SharedAdvertCard = (props: SharedAdvertCardProps) => {
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
            <span style={{ fontWeight: 'bold' }}>
              {`${props.author.firstName} ${props.author.lastName} `}
            </span>
          </a>

          <span>posted on your timeline</span>
          <p style={{ color: '#8B8B8B' }}>{`${props.timeStamp} Minutes ago`}</p>
        </div>

        <MenuButton />
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

export default SharedAdvertCard;
