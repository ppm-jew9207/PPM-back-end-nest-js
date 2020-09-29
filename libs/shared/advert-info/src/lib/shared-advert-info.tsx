import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';

import './shared-advert-info.scss';

interface Category {
  title: string;
  value: string;
}

/* eslint-disable-next-line */
export interface SharedAdvertInfoProps {
  title: string;
  description: string;
  creator: string;
  image?: string;
  categories?: Category[];
  onGetStartedClick: () => void;
}

export const SharedAdvertInfo = (props: SharedAdvertInfoProps) => {
  return (
    <div className="main-part">
      <img
        className="bg-image"
        alt={props.title}
        src={
          props.image
            ? props.image
            : 'https://images.ctfassets.net/nm1bt7p4165n/7aK9MEwnD0Y1weylWYzTy7/d2cfb80b084f72d7c6bb275af5423efb/Birstonas2_small.png?w=1920&q=50'
        }
      />
      <Container fixed className="info">
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Typography variant="h5" component="h1">
              {props.title}
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
              Creator: {props.creator}
            </Typography>
            <Typography variant="body1" display="block" gutterBottom>
              {props.description}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="button" display="block" gutterBottom>
              Categories
            </Typography>
            {props.categories &&
              props.categories.map((category, i) => {
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
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => props.onGetStartedClick()}
            >
              Get Started
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SharedAdvertInfo;
