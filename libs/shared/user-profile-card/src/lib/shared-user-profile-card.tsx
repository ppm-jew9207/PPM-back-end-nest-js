import React from 'react';

import './shared-user-profile-card.scss';

import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Icon,
  CardActions,
  IconButton
} from '@material-ui/core';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import RoomIcon from '@material-ui/icons/Room';
import PersonIcon from '@material-ui/icons/Person';

/* eslint-disable-next-line */
interface SharedUserProfileCardProps {
  mentorImage?: string;
  fullName: string;
  aboutMentor: string;
  mentorLocation?: string;
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  instagram?: string;
}

export const SharedUserProfileCard = (props: SharedUserProfileCardProps) => {

  return (
    <Card className="profile-card">
      <CardContent>
        {props.mentorImage ?
        <CardMedia className="profile-card-media" image={props.mentorImage} title="Mentor image"/>
        : <CardMedia className="profile-card-media" title="Mentor image">
            <PersonIcon style={{ fontSize: 75 }}/>
          </CardMedia>}
        <Typography variant="h5" component="h2" align="center" gutterBottom>
          {props.fullName}
        </Typography>
        {!!props.mentorLocation && 
        <Typography variant="subtitle2" component="p" align="center" color="textSecondary" gutterBottom className="profile-card-location"> 
          <Icon aria-label="location" className="profile-card-location-icon"> 
            <RoomIcon style={{ fontSize: 14 }} />
          </Icon> {props.mentorLocation} 
        </Typography>}       
        <Typography variant="body2" component="p" align="center" color="textSecondary" paragraph>
          {props.aboutMentor}
        </Typography>
        {!!(props.facebook || props.twitter || props.linkedin || props.instagram) &&
        <Typography variant="subtitle1" component="h5" align="center" color="textSecondary" gutterBottom>
          Get Connected
        </Typography>}
        <CardActions>
          <IconButton aria-label="facebook" href={props.facebook} disabled={!props.facebook}>
            <FacebookIcon style={{ fontSize: 32, color: props.facebook ? '#3b5999' : 'rgba(0, 0, 0, 0.26)' }} />
          </IconButton>
          <IconButton aria-label="twitter" href={props.twitter} disabled={!props.twitter}>
            <TwitterIcon style={{ fontSize: 32, color: props.twitter ? '#55acee' : 'rgba(0, 0, 0, 0.26)' }} />
          </IconButton>
          <IconButton aria-label="linkedin" href={props.linkedin} disabled={!props.linkedin}>
            <LinkedInIcon style={{ fontSize: 32, color: props.linkedin ? '#0077B5' : 'rgba(0, 0, 0, 0.26)' }} />
          </IconButton>
          <IconButton aria-label="instagram" href={props.instagram} disabled={!props.instagram}>
            <InstagramIcon style={{ fontSize: 32, color: props.instagram ? '#e4405f' : 'rgba(0, 0, 0, 0.26)' }} />
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
};