import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import './shared-advert-details.scss';

export interface SharedAdvertDetailsProps {
  learnItems: string[];
  preRequisites?: string;
}

export const SharedAdvertDetails = (props: SharedAdvertDetailsProps) => {
  return (
    <Container fixed className="info">
      <Typography
        className="learn-title"
        variant="h6"
        component="h2"
        gutterBottom
      >
        What you will learn
      </Typography>

      <Grid container className="learn-list">
        {props.learnItems.map((item, i) => {
          return (
            <Grid key={i} item xs={4}>
              <Typography className="item" variant="body1" component="li">
                {item}
              </Typography>
            </Grid>
          );
        })}
      </Grid>

      <Typography
        className="learn-title"
        variant="h6"
        component="h2"
        gutterBottom
        style={{display: !props.preRequisites && 'none'}}
      >
        Pre-requisites
      </Typography>
      <Typography className="description" variant="body1" component="p">
        {props.preRequisites}
      </Typography>
    </Container>
  );
};

export default SharedAdvertDetails;
