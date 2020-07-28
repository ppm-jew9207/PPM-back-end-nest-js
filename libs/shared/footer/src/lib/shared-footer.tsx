import React from 'react';

import './shared-footer.scss';
import {
  Box,
  Container,
  Grid,
  Link,
  Typography,
  Paper } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

/* eslint-disable-next-line */
export interface SharedFooterProps {}

export const SharedFooter = (props: SharedFooterProps) => {
  return (
    <Paper className="footer" elevation={3} >
        <Container maxWidth="75%">
          <Grid container>
          <Grid item xs={3}>
            <Box>
              <Link className="footer-link" href="#">
              <HomeIcon/> PPM
              </Link>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Link className="footer-link" href="#">
              Link 1
            </Link>
            <Link className="footer-link" href="#">
              Link 2
            </Link>
            <Link className="footer-link" href="#">
              Link 3
            </Link>
            <Link className="footer-link" href="#">
              Link 4
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Link className="footer-link" href="#">
              Link 1
            </Link>
            <Link className="footer-link" href="#">
              Link 2
            </Link>
            <Link className="footer-link" href="#">
              Link 3
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Link className="footer-link" href="#">
              Link 1
            </Link>
            <Link className="footer-link" href="#">
              Link 2
            </Link>
            <Link className="footer-link" href="#">
              Link 3
            </Link>
          </Grid>
        </Grid>
        </Container>
        <Container maxWidth="75%">
          <Typography variant="body1" color="inherit">
            &copy; 2020 PPM
          </Typography>
        </Container>
    </Paper>
  );
};

export default SharedFooter;
