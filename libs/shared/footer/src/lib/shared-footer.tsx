import React from 'react';

import './shared-footer.scss';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

/* eslint-disable-next-line */
export interface SharedFooterProps {}

export const SharedFooter = (props: SharedFooterProps) => {
  return (
    <AppBar position="static" color="primary">
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
