import React, { ComponentClass, PureComponent, ReactNode } from 'react';
import { ITheme, theme } from './themes/Theme';

const { EventEmitter } = require('events');

export const ThemeContext = React.createContext(theme);

class ThemeConfig extends EventEmitter {
  currentTheme = theme;

  setTheme(theme: ITheme) {
    this.currentTheme = theme;
    this.emit('theme', this.currentTheme);
  }
}

export const themeConfig = new ThemeConfig();

/**
 * All elements support theming by default, and therefore every element must be wrapped inside a ThemeProvider.
 * The ThemeProvider allows you to define the default colors for most elements.
 *
 * **Example**: If you want all you buttons to be red, instead of writing <Button color="red" />
 * all the time, you might want to set the "primary" color of your theme to red.
 **/

interface Props {
  children: ReactNode[];
}

export class ThemeProvider extends PureComponent<Props> {
  componentDidMount(): void {
    themeConfig.addListener('theme', this.onThemeChange);
  }

  componentWillUnmount(): void {
    themeConfig.removeListener('theme', this.onThemeChange);
  }

  onThemeChange = () => this.forceUpdate();

  render(): React.ReactNode {
    return (
      <ThemeContext.Provider value={themeConfig.currentTheme}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

interface IWithThemeProps {
  theme: ITheme;
}

interface OWithThemeProps {
  theme?: ITheme;
}

export const withTheme = <T extends IWithThemeProps>(mapThemeToProps?: (theme: ITheme, props: any) => any, displayName?: string) =>
  (WrappedComponent: ComponentClass<T>) =>
    class WithTheme extends PureComponent<Pick<T, Exclude<keyof T, 'theme'>> & OWithThemeProps> {
      // @ts-ignore
      static displayName = displayName || WrappedComponent.displayName;
      static component = WrappedComponent;

      componentDidMount(): void {
        themeConfig.addListener('theme', this.onThemeChange);
      }

      componentWillUnmount(): void {
        themeConfig.removeListener('theme', this.onThemeChange);
      }

      onThemeChange = () => this.forceUpdate();

      render() {
        const props = !mapThemeToProps ? { theme: themeConfig.currentTheme } : mapThemeToProps(themeConfig.currentTheme, this.props);
        return <WrappedComponent {...this.props} {...props} />;
      }
    };
