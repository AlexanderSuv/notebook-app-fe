import { css, StyleAttribute } from 'glamor';
import React, { PureComponent, ReactNode } from 'react';

const baseStyles = css({
  display: 'flex',
  boxSizing: 'border-box'
});

interface Props {
  layout?: 'row' | 'column';
  align?: string;
  styles?: StyleAttribute;
}

export class FlexBox extends PureComponent<Props> {

  buildStyles = () => {
    const [mainAxis, crossAxis] = (this.props.align || '').split(' ');

    const alignCss: { [key: string]: string } = {};

    // Main axis
    switch (mainAxis) {
      case 'center':
        alignCss['justifyContent'] = 'center';
        break;
      case 'space-around':
        alignCss['justifyContent'] = 'space-around';
        break;
      case 'space-between':
        alignCss['justifyContent'] = 'space-between';
        break;
      case 'space-evenly':
        alignCss['justifyContent'] = 'space-evenly';
        break;
      case 'end':
      case 'flex-end':
        alignCss['justifyContent'] = 'flex-end';
        break;
      case 'start':
      case 'flex-start':
      default :
        alignCss['justifyContent'] = 'flex-start';  // default main axis
        break;
    }

    // Cross-axis
    switch (crossAxis) {
      case 'start':
      case 'flex-start':
        alignCss['alignItems'] = alignCss['alignContent'] = 'flex-start';
        break;
      case 'center':
        alignCss['alignItems'] = alignCss['alignContent'] = 'center';
        break;
      case 'end':
      case 'flex-end':
        alignCss['alignItems'] = alignCss['alignContent'] = 'flex-end';
        break;
      case 'space-between':
        alignCss['alignContent'] = 'space-between';
        alignCss['alignItems'] = 'stretch';
        break;
      case 'space-around':
        alignCss['alignContent'] = 'space-around';
        alignCss['alignItems'] = 'stretch';
        break;
      case 'baseline':
        alignCss['alignContent'] = 'stretch';
        alignCss['alignItems'] = 'baseline';
        break;
      case 'stretch':
      default : // 'stretch'
        alignCss['alignItems'] = alignCss['alignContent'] = 'stretch';   // default cross axis
        break;
    }

    return css(
      baseStyles,
      alignCss,
      { flexDirection: this.props.layout }
    );
  };

  render(): ReactNode {
    return <div {...this.props.styles} {...this.buildStyles()}>{this.props.children}</div>;
  }
}
