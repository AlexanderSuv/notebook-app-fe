import React, { Component, ReactNode } from 'react';
import { FlexBox } from '../ui-kit/FlexBox';
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
  };

  render(): React.ReactNode {
    const styles = css(baseStyles,
      {
        backgroundColor: this.props.theme.primary.main,
        color: this.props.theme.primary.text
      });

    return (
      <FlexBox styles={styles} layout="row" align="space-between center">
        <span>Game board</span>
        <button onClick={this.toggleTheme}>Toggle theme</button>
      </FlexBox>
    );
  }
}

export default withTheme()(TitleBar);
