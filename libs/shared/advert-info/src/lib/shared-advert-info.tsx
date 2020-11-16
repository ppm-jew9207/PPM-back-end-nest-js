import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import moment from 'moment';

import './shared-advert-info.scss';

interface Category {
  title: string;
  value: string;
}

export interface SharedAdvertInfoProps {
  title: string;
  description: string;
  creator: string;
  image: string;
  categories?: Category[];
  getStartedButtonText: string;
  onGetStartedClick: () => void;
  startingDate?: string;
}

export const SharedAdvertInfo = (props: SharedAdvertInfoProps) => {
  return (
    <div className="main-part" style={{ backgroundImage: `url(${props.image})`}}>
      <Container fixed className="info">
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Typography variant="h5" component="h1">
              {props.title}
            </Typography>
            <Typography
              className="creator-text"
              variant="overline"
              display="block"
              gutterBottom
            >
              Creator: {props.creator}
            </Typography>
            <Typography
              className="advert-description"
              variant="body1"
              display="block"
              gutterBottom
            >
              {props.description}
            </Typography>
          </Grid>
          <Grid className="categories-holder" item xs={4}>
            <Typography
              className="categories-title"
              variant="button"
              display="block"
              gutterBottom
            >
              Categories
            </Typography>
            {props.categories.map((category, i) => {
                return (
                  <Chip
                    className="chip-tag"
                    variant="outlined"
                    label={category.title}
                    key={category.value}
                  />
                );
              })}
          </Grid>
          <Grid item xs={12}>
            <p className="starting-date" style={{ display: props.startingDate ? 'inherit' : 'none' }}><span>Lesson starts:</span> { props.startingDate && moment(props.startingDate).format('LLLL')}</p>
            <Button
              className="get-started"
              variant="outlined"
              color="secondary"
              onClick={props.onGetStartedClick}
            >
              {props.getStartedButtonText}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SharedAdvertInfo;
