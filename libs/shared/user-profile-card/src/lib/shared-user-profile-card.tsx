import React, { ObjectHTMLAttributes } from 'react';

import './shared-user-profile-card.scss';

import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Icon,
  CardActions,
  IconButton,
} from '@material-ui/core';

import { Person as PersonIcon, Room as RoomIcon } from '@material-ui/icons';

export interface SharedUserProfileCardProps {
  mentorImage?: string;
  fullName: string;
  aboutMentor: string;
  mentorLocation?: string;
  socialLinks?: Array;
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
          {props.socialLinks &&
            props.socialLinks.length &&
            props.socialLinks.map((socialLink) => (
              <IconButton
                key={socialLink.icon}
                aria-label={socialLink.icon}
                href={socialLink.link}
                disabled={!socialLink.link}
                className="profile-card-social-button"
              >
                {console.log(socialLink)}
                <Icon
                  className="profile-card-social-icon"
                  style={{ color: socialLink.color }}
                >
                  {socialLink.icon}
                </Icon>
              </IconButton>
            ))}
          {/*           
          <IconButton
            aria-label="twitter"
            href={props.twitter}
            disabled={!props.twitter}
            className="profile-card-social-button"
          >
            <TwitterIcon
              className="profile-card-social-icon"
              style={{ color: '#55acee' }}
            />
          </IconButton>
          <IconButton
            aria-label="linkedin"
            href={props.linkedin}
            disabled={!props.linkedin}
            className="profile-card-social-button"
          >
            <LinkedInIcon
              className="profile-card-social-icon"
              style={{ color: '#55acee' }}
            />
          </IconButton>
          <IconButton
            aria-label="instagram"
            href={props.instagram}
            disabled={!props.instagram}
            className="profile-card-social-button"
          >
            <InstagramIcon
              className="profile-card-social-icon"
              style={{ color: '#55acee' }}
            />
          </IconButton> */}
        </CardActions>
      </CardContent>
    </Card>
  );
};
