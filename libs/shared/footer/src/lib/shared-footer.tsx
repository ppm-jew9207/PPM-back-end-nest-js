import React from 'react';

import './shared-footer.scss';
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Grid,
  Paper } from '@material-ui/core';

/* eslint-disable-next-line */
export interface SharedFooterProps {}

export const SharedFooter = (props: SharedFooterProps) => {
  return (
    <AppBar className="footer-bar" position="static" color="primary">
        <Grid container>
          <Grid item xs={3}>
            <p>Material UI</p>
          </Grid>
          <Grid item xs={3}>
            <p>Community</p>
            <p>Community</p>
            <p>Community</p>
            <p>Community</p>
          </Grid>
          <Grid item xs={3}>
            <p>Resources</p>
            <p>Resources</p>
            <p>Resources</p>
          </Grid>
          <Grid item xs={3}>
            <p>Company</p>
            <p>Company</p>
            <p>Company</p>
          </Grid>
        </Grid>

        <Container maxWidth="75%">
            <Toolbar>
              <Typography variant="body1" color="inherit">
                &copy; 2020 PPM
              </Typography>
            </Toolbar>
        </Container>
    </AppBar>
  );
};

export default SharedFooter;
