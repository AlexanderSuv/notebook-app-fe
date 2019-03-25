import { createMuiTheme, Theme } from '@material-ui/core';
import { blue, deepOrange, deepPurple, pink } from '@material-ui/core/colors';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

export const blueTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: blue,
    secondary: pink
  },
});

export const deepPurpleTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: deepPurple,
    secondary: deepOrange
  },
});

type ThemeContextType = Dispatch<SetStateAction<Theme>>;

export const SetThemeContext = createContext<ThemeContextType>(() => {});

type Props = {
  children?: ReactNode;
};

export function AppTheme(props: Props) {
  const [theme, setTheme] = useState(blueTheme);

  return (
    <ThemeProvider theme={theme}>
      <SetThemeContext.Provider value={setTheme}>
        {props.children}
      </SetThemeContext.Provider>
    </ThemeProvider>
  );
}
