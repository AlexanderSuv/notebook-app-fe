import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { ThemePicker } from './ThemePicker';

const useStyles = makeStyles(theme => {
  return {
    background: {
      backgroundColor: theme.palette.primary.main
    },
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };
});

export function Header() {
  const classes = useStyles();

  return (
    <AppBar position={'static'} color={'primary'}>
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          Notes
        </Typography>
        <ThemePicker/>
      </Toolbar>
    </AppBar>
  );
}
