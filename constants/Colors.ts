import { screen } from "./general";

const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';


function ColorTheme(){
  if(screen > 1.5) return '#fff'
  if(screen <= 1.5) return '#dedede'
  else return '#dedede'
}

export default {
  light: {
    text: '#000',
    background: ColorTheme(),
    layoutBg : '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
    toolbarColor : '#fff',
    elementBack : 'white',
    lineColor : '#eee',
    placeholderColor : '#888'
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
    toolbarColor : '#333',
    elementBack : '#111222',
    lineColor : '#222',
    placeholderColor : '#444'
  },
};
