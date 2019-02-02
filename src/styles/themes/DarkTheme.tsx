const primary: IPalette = {
  main: '#546E7A',
  light: '#819CA9',
  dark: '#29434E',
  text: '#ffffff'
};

const secondary: IPalette = {
  main: '#546E7A',
  light: '#819CA9',
  dark: '#29434E',
  text: '#FFFFFF'
};

const warn: IPalette = {
  main: '#e10000',
  light: '#ea4d4d',
  dark: '#cd0000',
  text: '#FFFFFF'
};

export interface IPalette {
  main: string;
  light: string;
  dark: string;
  text: string;
}

export interface ITheme {
  primary: IPalette;
  secondary: IPalette;
  warn: IPalette;
}

export const darkTheme: ITheme = { primary, secondary, warn };
