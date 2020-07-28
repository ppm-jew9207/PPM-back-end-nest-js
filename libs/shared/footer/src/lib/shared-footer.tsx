import React, { useState } from 'react';

import './shared-footer.scss';
import HomeIcon from '@material-ui/icons/Home';
import {
  Box,
  Container,
  Grid,
  Link,
  Typography,
  Paper,
} from '@material-ui/core';

/* eslint-disable-next-line */
export interface SharedFooterProps {}

export const SharedFooter = (props: SharedFooterProps) => {
  const [menu, setMenu] = useState({
    menu1: {
      allMenu: [
        { tittle: 'link1', path: '#' },
        { tittle: 'link2', path: '#' },
        { tittle: 'link3', path: '#' },
      ],
      tiitle: 'Title 1',
    },
    menu2: {
      allMenu: [
        { tittle: 'link1', path: '#' },
        { tittle: 'link2', path: '#' },
        { tittle: 'link3', path: '#' },
      ],
      tiitle: 'Title 2',
    },
    menu3: {
      allMenu: [
        { tittle: 'link1', path: '#' },
        { tittle: 'link2', path: '#' },
        { tittle: 'link3', path: '#' },
      ],
      tiitle: 'Title 3',
    },
  });
  return (
    <Paper className="footer" elevation={3}>
      <Container maxWidth="75%">
        <Grid container>
          <Grid item xs={3}>
            <Box>
              <Typography>
                <Link className="footer-link" href="#">
                  <HomeIcon /> PPM
                </Link>
              </Typography>
            </Box>
          </Grid>
          {Object.keys(menu).map((menuKey, menuIndex) => (
            <Grid key={menuIndex} item xs={3}>
              <Typography variant="body1" color="textPrimary">
                Title 1
              </Typography>
              {menu[menuKey].allMenu.map((item, index) => (
                <Typography key={index}>
                  <Link className="footer-link" href={item.path}>
                    {item.tittle}
                  </Link>
                </Typography>
              ))}
            </Grid>
          ))}
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
