/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText, View as DefaultView } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

import { screen } from '../constants/general';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
  Bold? : boolean;
  Light?: boolean
};

function TextSize(){
  if(screen > 1.5) return 18
  if(screen <= 1.5) return 14
  else return 16
}

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, Bold, Light, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={
    Bold
    ? [{ color, fontSize : TextSize(), fontFamily : "Montserrat-Bold"}, style]
    : Light 
    ? [{ color, fontSize : TextSize(), fontFamily : "Montserrat-Light"}, style]
    : [{ color, fontSize : TextSize(), fontFamily : "Montserrat"}, style]

  } {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[ style]} {...otherProps} />;
}
