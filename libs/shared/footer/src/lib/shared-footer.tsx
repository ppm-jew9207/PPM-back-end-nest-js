import React, { useState, useEffect } from 'react';

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

interface MenuInterface {
  tittle: string;
  path: string;
}

interface MenuBox {
  allMenu: MenuInterface[];
  title: string;
}

/* eslint-disable-next-line */
export interface SharedFooterProps {
  menu1: MenuBox;
  menu2: MenuBox;
  menu3: MenuBox;
}

export const SharedFooter = (props: SharedFooterProps) => {
  const [menu, setMenu] = useState<SharedFooterProps>();
  useEffect(() => {
    setMenu({ ...props });
  }, [props]);
  return (
    <Paper className="footer" elevation={3}>
      <Container maxWidth="xl">
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
          {!!menu &&
            Object.keys(menu).map((menuKey, menuIndex) => (
              <Grid key={menuIndex} item xs={3}>
                <Typography variant="body1" color="textPrimary">
                  {menu[menuKey].title}
                </Typography>
                {!!menu[menuKey] &&
                  !!menu[menuKey].allMenu &&
                  menu[menuKey].allMenu.map((item, index) => (
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
