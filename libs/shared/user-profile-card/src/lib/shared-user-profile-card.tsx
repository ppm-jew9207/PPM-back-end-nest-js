import React from 'react';

import './shared-user-profile-card.scss';

import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Icon,
  CardActions,
  IconButton,
  Button,
} from '@material-ui/core';

import { Person as PersonIcon, Room as RoomIcon } from '@material-ui/icons';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function LogoutDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button  color="secondary" onClick={handleClickOpen}>
        Log out
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm logout"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to log out?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Agree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Disagree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export interface SharedUserProfileCardProps {
  mentorImage?: string;
  fullName: string;
  aboutMentor: string;
  mentorLocation?: string;
  socialLinks?: Array<SocialLink>;
}
export interface SocialLink {
  icon: string;
  link: string;
  color: string;
}

export const SharedUserProfileCard = (props: SharedUserProfileCardProps) => {
  return (
    <Card className="profile-card">
      <CardContent>
        <CardMedia
          className="profile-card-media"
          title="Mentor image"
          image={props.mentorImage}
        >
          {!props.mentorImage && <PersonIcon />}
        </CardMedia>
        <Typography variant="h5" component="h2" align="center" gutterBottom>
          {props.fullName}
        </Typography>
        {!!props.mentorLocation && (
          <Typography
            variant="subtitle2"
            component="p"
            align="center"
            color="textSecondary"
            gutterBottom
            className="profile-card-location"
          >
            <Icon aria-label="location" className="profile-card-location-icon">
              <RoomIcon />
            </Icon>{' '}
            {props.mentorLocation}
          </Typography>
        )}
        <Typography
          variant="body2"
          component="p"
          align="center"
          color="textSecondary"
          paragraph
        >
          {props.aboutMentor}
        </Typography>
        {!!props.socialLinks && (
          <Typography
            variant="subtitle1"
            component="h5"
            align="center"
            color="textSecondary"
            gutterBottom
          >
            Get Connected
          </Typography>
         
        )}

        <CardActions>
          {!!props.socialLinks &&
            !!props.socialLinks.length &&
            props.socialLinks.map((socialLink) => (
              <IconButton
                key={socialLink.icon}
                aria-label={socialLink.icon}
                href={socialLink.link}
                disabled={!socialLink.link}
                className="profile-card-social-button"
              >
                <Icon
                  className={`profile-card-social-icon fab fa-${socialLink.icon}`}
                  style={{ color: socialLink.color }}
                ></Icon>
              </IconButton>
            ))}
        </CardActions>
      </CardContent>
      <LogoutDialog
            />
    </Card>
  );
};
