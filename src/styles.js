import { CSS } from 'electron-css';

const fontSizeBase = 12;

const main = CSS({
  fontFamily: 'Open Sans Regular, Helvetica, Arial, sans-serif',
  fontSize: fontSizeBase,
  fontSmoothing: 'antialiased',
  color: '#3b4153',
});

export {
  main
};
