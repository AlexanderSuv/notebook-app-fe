import { ColorizeOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import React, { useContext, useState } from 'react';
import { Avatar, ClickAwayListener, Grid, IconButton, Paper, Popover, Theme } from '@material-ui/core';
import { blueTheme, deepPurpleTheme, SetThemeContext } from '../styles/theme/theme';

const useStyles = makeStyles(theme => {
  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    themeButton: {
      margin: 10,
      cursor: 'pointer'
    },
    blueTheme: {
      backgroundColor: blueTheme.palette.primary.main
    },
    deepPurpleTheme: {
      backgroundColor: deepPurpleTheme.palette.primary.main
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
  const setTheme = useContext(SetThemeContext);

  function handleClose() {
    setAnchorEl(null);
  }

  function setThemeAndClose(theme: Theme) {
    setTheme(theme);
    handleClose();
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

      <Popover open={open} anchorEl={anchorEl}>
        <ClickAwayListener onClickAway={handleClose}>
          <Paper>
            <Grid container>
              <Grid item xs aria-label={'blue-theme'}>
                <Avatar aria-label="blue-theme" className={`${classes.blueTheme} ${classes.themeButton}`} onClick={() => setThemeAndClose(blueTheme)}/>
              </Grid>
              <Grid item xs aria-label={'deep-purple-theme'}>
                <Avatar aria-label="deep-purple-theme" className={`${classes.deepPurpleTheme} ${classes.themeButton}`}
                        onClick={() => setThemeAndClose(deepPurpleTheme)}/>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs aria-label={'blue-theme-1'}>
                <Avatar aria-label="blue-theme" className={`${classes.blueTheme} ${classes.themeButton}`} onClick={() => setThemeAndClose(blueTheme)}/>
              </Grid>
              <Grid item xs aria-label={'deep-purple-theme-1'}>
                <Avatar aria-label="deep-purple-theme" className={`${classes.deepPurpleTheme} ${classes.themeButton}`}
                        onClick={() => setThemeAndClose(deepPurpleTheme)}/>
              </Grid>
            </Grid>
          </Paper>
        </ClickAwayListener>
      </Popover>
    </div>
  );
}
