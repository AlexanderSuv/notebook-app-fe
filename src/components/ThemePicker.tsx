import { ColorizeOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import React, { useState } from 'react';
import { Avatar, Button, ClickAwayListener, Grid, GridList, GridListTile, Grow, IconButton, Menu, MenuItem, Paper, Popper } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import { blueTheme, deepPurpleTheme } from '../styles/theme/theme';

const useStyles = makeStyles(theme => {
  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    blueTheme: {
      backgroundColor: blueTheme.palette.primary.main,
      margin: 10,
    },
    deepPurpleTheme: {
      backgroundColor: deepPurpleTheme.palette.primary.main,
      margin: 10,
    },
    gridList: {
      width: 'auto',
      height: 'auto',
    },
    menu: {
      margin: '6px'
    }
  };
});

export function ThemePicker() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>

      <IconButton color="secondary"
                  aria-label="Change theme"
                  aria-owns={open ? 'fade-menu' : undefined}
                  aria-haspopup="true"
                  onClick={(e) => setAnchorEl(e.currentTarget)}>
        <ColorizeOutlined/>
      </IconButton>

      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        MenuListProps={{
          style: {
            padding: '6px'
          }
        }}
      >
        <Avatar aria-label="blue-theme" className={classes.blueTheme}/>
        <Avatar aria-label="deep-purple-theme" className={classes.deepPurpleTheme}/>
        <Avatar aria-label="blue-theme" className={classes.blueTheme}/>
        <Avatar aria-label="deep-purple-theme" className={classes.deepPurpleTheme}/>
      </Menu>
    </div>
  );
}
