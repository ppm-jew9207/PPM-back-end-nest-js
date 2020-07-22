import React from 'react';

import './shared-user-profile-card.scss';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Icon from '@material-ui/core/Icon';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import RoomIcon from '@material-ui/icons/Room';


/* eslint-disable-next-line */
export interface SharedUserProfileCardProps {
  mentorImage: string;
  fullName: string;
  aboutMentor: string;
  location: string;
  facebook: string;
  twitter: string;
  linkedin: string;
  instagram: string;
}

export const SharedUserProfileCard = (props: SharedUserProfileCardProps) => {

  return (
    <Card className="profile-card">
      <CardContent>
        <CardMedia className="profile-card-media" image={props.mentorImage} title="Mentor image"/>
        <Typography variant="h5" component="h2" align="center" gutterBottom>
          {props.fullName}
        </Typography>
        <Typography variant="subtitle2" component="p" align="center" color="textSecondary" gutterBottom className="profile-card-location">
          <Icon aria-label="location" className="profile-card-location-icon">
            <RoomIcon style={{ fontSize: 14 }}/>
          </Icon>
          {props.location}
        </Typography>
        <Typography variant="body2" component="p" align="center" color="textSecondary" paragraph>
          {props.aboutMentor}
        </Typography>
        <Typography variant="subtitle1" component="h5" align="center" color="textSecondary" gutterBottom>
          Get Connected
        </Typography>
        <CardActions >
          <IconButton aria-label="facebook" href={props.facebook}>
            <FacebookIcon style={{ fontSize: 32 }}/>
          </IconButton>
          <IconButton aria-label="twitter" href={props.twitter}>
            <TwitterIcon style={{ fontSize: 32 }}/>
          </IconButton>
          <IconButton aria-label="linkedin" href={props.linkedin}>
            <LinkedInIcon style={{ fontSize: 32 }}/>
          </IconButton>
          <IconButton aria-label="instagram" href={props.instagram}>
            <InstagramIcon style={{ fontSize: 32 }}/>
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
};
