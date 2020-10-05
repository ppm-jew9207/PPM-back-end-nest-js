import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import './shared-advert-details.scss';

export interface SharedAdvertDetailsProps {
  learnItems: string[];
  preRequisites: string;
}

export const SharedAdvertDetails = (props: SharedAdvertDetailsProps) => {
  return (
    <div>
      <Container fixed className="info">
        <Typography variant="h6" component="h2" gutterBottom>
          What you will learn
        </Typography>

        <Grid container className="learn-list">
          {props.learnItems.map((item, i) => {
            return (
              <Grid item xs={4}>
                <Typography variant="body1" component="li">
                  {item}
                </Typography>
              </Grid>
            );
          })}
        </Grid>

        <Typography variant="h6" component="h2" gutterBottom>
          Pre-requisites
        </Typography>
        <Typography variant="body1" component="p">
          {props.preRequisites}
        </Typography>
      </Container>
    </div>
  );
};

export default SharedAdvertDetails;
