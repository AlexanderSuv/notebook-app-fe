import { ColorizeOutlined, Done } from '@material-ui/icons';
import { makeStyles, ThemeProvider, useTheme } from '@material-ui/styles';
import React, { useContext, useState } from 'react';
import { ClickAwayListener, Fab, Grid, IconButton, Paper, Popover, Theme } from '@material-ui/core';
import { blueDarkTheme, blueTheme, deepPurpleDarkTheme, deepPurpleTheme, SetThemeContext } from '../styles/theme/theme';

const useStyles = makeStyles({
  themeButton: {
    margin: 5,
    cursor: 'pointer'
  }
});

export function ThemePicker() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();
  const setTheme = useContext(SetThemeContext);
  const theme = useTheme();

  function handleClose() {
    setAnchorEl(null);
  }

  function setThemeAndClose(theme: Theme) {
    setTheme(theme);
    handleClose();
  }

  return (
    <>
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
              <Grid item xs>
                <ThemeProvider theme={blueTheme}>
                  <Fab className={classes.themeButton} size={'small'} color={'primary'} onClick={() => setThemeAndClose(blueTheme)}>
                    {theme === blueTheme ? <Done/> : <></>}
                  </Fab>
                </ThemeProvider>
              </Grid>
              <Grid item xs>
                <ThemeProvider theme={deepPurpleTheme}>
                  <Fab className={classes.themeButton} size={'small'} color={'primary'} onClick={() => setThemeAndClose(deepPurpleTheme)}>
                    {theme === deepPurpleTheme ? <Done/> : <></>}
                  </Fab>
                </ThemeProvider>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs>
                <ThemeProvider theme={blueDarkTheme}>
                  <Fab className={classes.themeButton} size={'small'} color={'primary'} onClick={() => setThemeAndClose(blueDarkTheme)}>
                    {theme === blueDarkTheme ? <Done/> : <></>}
                  </Fab>
                </ThemeProvider>
              </Grid>
              <Grid item xs>
                <ThemeProvider theme={deepPurpleDarkTheme}>
                  <Fab className={classes.themeButton} size={'small'} color={'primary'} onClick={() => setThemeAndClose(deepPurpleDarkTheme)}>
                    {theme === deepPurpleDarkTheme ? <Done/> : <></>}
                  </Fab>
                </ThemeProvider>
              </Grid>
            </Grid>
          </Paper>
        </ClickAwayListener>
      </Popover>
    </>
  );
}
