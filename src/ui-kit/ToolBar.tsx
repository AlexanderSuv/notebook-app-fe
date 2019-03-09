import React, { Component, ReactNode } from 'react';
import { ITheme } from '../styles/themes/Theme';
import { withTheme } from '../styles/ThemeProvider';
import { css } from 'glamor';
import { FlexBox } from './FlexBox';
import { level_2 } from './styles/elevation';

const baseStyles = css({
    height: '64px',
    padding: '1rem',
    boxSizing: 'border-box'
  },
  level_2);

type Props = {
  theme: ITheme;
  children?: ReactNode;
};

class ToolBar extends Component<Props> {

  render(): React.ReactNode {
    const styles = css(baseStyles,
      {
        backgroundColor: this.props.theme.primary.main,
        color: this.props.theme.primary.text
      });

    return <FlexBox styles={styles} layout="row" align="start center">{this.props.children}</FlexBox>;
  }
}

export default withTheme()(ToolBar);
