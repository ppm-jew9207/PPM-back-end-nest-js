import React from 'react';

import './shared-footer.scss';
import HomeIcon from '@material-ui/icons/Home';
import {
  Box,
  Container,
  Grid,
  Link,
  Typography,
  Paper } from '@material-ui/core';


/* eslint-disable-next-line */
export interface SharedFooterProps {}

export const SharedFooter = (props: SharedFooterProps) => {
  return (
    <Paper className="footer" elevation={3} >
        <Container maxWidth="75%">
          <Grid container>
          <Grid item xs={3}>
            <Box>
              <Typography>
                <Link className="footer-link" href="#">
                  <HomeIcon/> PPM
                </Link>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body1" color="textPrimary">
              Title 1
            </Typography>
            <Typography>
              <Link className="footer-link" href="#">
                Link 1
              </Link>
            </Typography>
            <Typography>
              <Link className="footer-link" href="#">
                Link 2
              </Link>
            </Typography>
            <Typography>
              <Link className="footer-link" href="#">
                Link 3
              </Link>
            </Typography>
            <Typography>
              <Link className="footer-link" href="#">
                Link 4
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body1" color="textPrimary">
              Title 2
            </Typography>
            <Typography>
              <Link className="footer-link" href="#">
                Link 1
              </Link>
            </Typography>
            <Typography>
              <Link className="footer-link" href="#">
                Link 2
              </Link>
            </Typography>
            <Typography>
              <Link className="footer-link" href="#">
                Link 3
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body1" color="textPrimary">
              Title 3
            </Typography>
            <Typography>
              <Link className="footer-link" href="#">
                Link 1
              </Link>
            </Typography>
            <Typography>
              <Link className="footer-link" href="#">
                Link 2
              </Link>
            </Typography>
            <Typography>
              <Link className="footer-link" href="#">
                Link 3
              </Link>
            </Typography>
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
