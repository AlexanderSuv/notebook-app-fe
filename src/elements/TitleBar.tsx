import React, { Component } from 'react';
import { darkTheme } from '../styles/themes/DarkTheme';
import { ITheme, theme } from '../styles/themes/Theme';
import { themeConfig, withTheme } from '../styles/ThemeProvider';
import { css } from 'glamor';

const baseStyles = css({
  height: '75px',
  color: 'white',
  padding: '1rem',
  boxSizing: 'border-box'
});

interface Props {
  theme: ITheme;
}

class TitleBar extends Component<Props> {
  isDarkTheme = false;

  toggleTheme = () => {
    if (!this.isDarkTheme) {
      themeConfig.setTheme(darkTheme);
    } else {
      themeConfig.setTheme(theme);
    }
    this.isDarkTheme = !this.isDarkTheme;
  };

  render(): React.ReactNode {
    const styles = css(baseStyles,
      {
        backgroundColor: this.props.theme.primary.main,
        color: this.props.theme.primary.text
      });

    return (
      <div {...styles}>
        <span>Game board</span>
        <button onClick={this.toggleTheme}>Toggle theme</button>
      </div>
    );
  }
}

export default withTheme()(TitleBar);
