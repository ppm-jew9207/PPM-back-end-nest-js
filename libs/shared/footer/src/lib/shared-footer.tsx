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

export interface SharedFooterProps {
  column1: MenuBox;
  column2: MenuBox;
  column3: MenuBox;
  home: string;
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
            <Box className="footer-home">
              <HomeIcon className="footer-icon" />
              <Typography variant="body1">
                <Link className="footer-link" color="textPrimary" href="#">
                  {props.home}
                </Link>
              </Typography>
            </Box>
          </Grid>
          {!!menu &&
            Object.keys(menu).map((menuKey, menuIndex) => (
              <Grid key={menuIndex} item xs={3}>
                <Typography className="footer-link" variant="body1">
                  {menu[menuKey].title}
                </Typography>
                {!!menu[menuKey] &&
                  !!menu[menuKey].allMenu &&
                  menu[menuKey].allMenu.map((item, index) => (
                    <Typography variant="body2" key={index}>
                      <Link
                        className="footer-link"
                        color="textSecondary"
                        href={item.path}
                      >
                        {item.tittle}
                      </Link>
                    </Typography>
                  ))}
              </Grid>
            ))}
        </Grid>
      </Container>
      <Container maxWidth="xl">
        <Typography
          className="footer-copy"
          variant="body2"
          color="textSecondary"
        >
          Copyright &copy; 2020 PPM
        </Typography>
      </Container>
    </Paper>
  );
};

export default SharedFooter;
