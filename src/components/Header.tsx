import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { ColorizeOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import React, { useContext } from 'react';
import { SetThemeContext, deepPurpleTheme } from '../styles/theme/theme';
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
  const setTheme = useContext(SetThemeContext);

  function toggleTheme() {
    setTheme(deepPurpleTheme);
  }

  return (
    <AppBar position={'static'} color={'primary'}>
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          Notes
        </Typography>
        <IconButton color="secondary" aria-label="Change theme" onClick={toggleTheme}>
          <ColorizeOutlined/>
        </IconButton>
        <ThemePicker/>
      </Toolbar>
    </AppBar>
  );
}
