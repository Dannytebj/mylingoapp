const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';


export const  COLORS = {
  primary: "#701e2e",
  secondary: "#444262",
  tertiary: "#FF7754",

  gray: "#83829A",
  gray2: "#C1C0C8",
  lightGray: '#9c9c9c',
  tintGray: '#f5f6fa',

  white: '#ffffff',
  offWhite: "#F3F4F8",
  lightWhite: "#FAFAFC",

  green: '#00ff7f',

  wine: '#8d1346',

  black: "#000",
};

export default {
  light: {
    text: '#701e2e',
    background: '#fff',
    // tint: tintColorLight,
    // tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#701e2e',
    // tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};
