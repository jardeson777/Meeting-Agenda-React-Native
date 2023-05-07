import React, {ReactNode} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text as TextComponent,
  TextStyle,
} from 'react-native';
import fonts from '../../global/fonts';
import colors from '../../global/colors';

type TextProps = {
  children: ReactNode;
  variant: keyof typeof fonts;
  color?: keyof typeof colors;
  style?: StyleProp<TextStyle>;
};

const styles = StyleSheet.create<typeof fonts>(fonts);

const Text = ({children, variant, color = 'black', style}: TextProps) => {
  return (
    <TextComponent style={[style, styles[variant], {color: colors[color]}]}>
      {children}
    </TextComponent>
  );
};

export default Text;
