import React, { Component, ReactNode } from 'react';
import { darkTheme } from '../styles/themes/DarkTheme';
import { ITheme, theme } from '../styles/themes/Theme';
import { themeConfig, withTheme } from '../styles/ThemeProvider';
import ToolBar from '../ui-kit/ToolBar';

type Props = {
  theme: ITheme;
  children?: ReactNode;
};

class TitleBar extends Component<Props> {
  isDarkTheme = false;

  toggleTheme = () => {
    if (!this.isDarkTheme) {
      themeConfig.setTheme(darkTheme);
    } else {
      themeConfig.setTheme(theme);
    }
    this.isDarkTheme = !this.isDarkTheme;
  }

  render(): React.ReactNode {
    return (
      <ToolBar>
        <span>Notes</span>
        <button onClick={this.toggleTheme}>Toggle theme</button>
      </ToolBar>
    );
  }
}

export default withTheme()(TitleBar);
