import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { Person as PersonIcon, Room as RoomIcon } from '@material-ui/icons';
import './shared-mentor-card.scss';

export interface MentorCardProps {
  mentorImage: string;
  fullName: string;
  aboutMentor: string;
  url: string;
  location?: string;
  socialLinks?: Array<SocialLink>;
}

export interface SocialLink {
  icon: string;
  link: string;
  color: string;
}

export function MentorCard(props: MentorCardProps) {
  return (
    <Card className="mentor-card">
      <a href={props.url} className="mentor-card-link">
        <CardActionArea>
          <CardMedia
            className="mentor-media"
            title={props.fullName}
            image={props.mentorImage}
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className="title"
            >
              {props.fullName}
            </Typography>
            {!!props.location && (
              <Typography
                variant="subtitle2"
                component="p"
                align="center"
                color="textSecondary"
                gutterBottom
                className="profile-card-location"
              >
                <Icon
                  aria-label="location"
                  className="profile-card-location-icon"
                >
                  <RoomIcon />
                </Icon>
                {props.location}
              </Typography>
            )}
            <Typography variant="body2" color="textSecondary" component="p">
              {props.aboutMentor}
            </Typography>
          </CardContent>
        </CardActionArea>
      </a>
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
    </Card>
  );
}

export default MentorCard;
