//classic style 
const navColorClassicTheme = '#1F1641';
const primaryColorClassicTheme = '#012172';
const secondaryColorClassicTheme = '#2b668d';
const bgColorClassicTheme = '#4b83ab';
const textColorClassicTheme = '#55c3f7';

//gothic style
const navColorGothicTheme = '#404040';
const primaryColorGothicTheme = '#2E303E';
const secondaryColorGothicTheme = '#707487';
const bgColorGothicTheme = '#54678F';
const textColorGothicTheme = '#c4cdc9';

//magenta style
const navColorMagentaTheme = '#c9a9c9';
const primaryColorMagentaTheme = '#DBB4DA';
const secondaryColorMagentaTheme = '#be8cc9';
const bgColorMagentaTheme = '#afd9af';
const textColorMagentaTheme = '#5d0068';

//general values
const theme = {
  title: 'theme',
  fontFamily: 'Arial',
  textShadow: '1px 0px 2px #000',
  colors: {
    navColor: '',
    primaryColor: '',
    secondaryColor: '',
    bgColor: '',
    textColor: '',
  },
};

export const classicTheme = {
  ...theme,
  title: 'Classic',
  colors: {
    navColor: navColorClassicTheme,
    primaryColor: primaryColorClassicTheme,
    secondaryColor: secondaryColorClassicTheme,
    bgColor: bgColorClassicTheme,
    textColor: textColorClassicTheme,
  },
};

export const gothicTheme = {
  ...theme,
  title: 'Gothic',
  colors: {
    navColor: navColorGothicTheme,
    primaryColor: primaryColorGothicTheme,
    secondaryColor: secondaryColorGothicTheme,
    bgColor: bgColorGothicTheme,
    textColor: textColorGothicTheme,
  },
};

export const magentaTheme = {
  ...theme,
  title: 'Magenta',
  colors: {
    navColor: navColorMagentaTheme,
    primaryColor: primaryColorMagentaTheme,
    secondaryColor: secondaryColorMagentaTheme,
    bgColor: bgColorMagentaTheme,
    textColor: textColorMagentaTheme,
  },
};   