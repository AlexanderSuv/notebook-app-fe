import { createMuiTheme, Theme } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

const defaultTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
  }
});

export const secondaryTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: blue
  },
});

type ThemeContextType = Dispatch<SetStateAction<Theme>>;

export const SetThemeContext = createContext<ThemeContextType>(() => {});

type Props = {
  children?: ReactNode;
};

export function AppTheme(props: Props) {
  const [theme, setTheme] = useState(defaultTheme);

  return (
    <ThemeProvider theme={theme}>
      <SetThemeContext.Provider value={setTheme}>
        {props.children}
      </SetThemeContext.Provider>
    </ThemeProvider>
  );
}
