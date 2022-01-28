import { Theme } from './symbols';

export const lightTheme: Theme = {
  name: 'light',
  properties: {
    '--bg-color': '#f6f7f9',
    '--text-color': '#36383B',
    '--primary-color': '#d94f5c'
  }
};

export const darkTheme: Theme = {
  name: 'dark',
  properties: {
    '--bg-color': '#36383B',
    '--text-color': '#fff',
    '--primary-color': '#1E90FF'
  }
};
