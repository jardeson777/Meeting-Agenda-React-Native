import React, {ReactNode} from 'react';
import {StyleProp, StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import colors from '../../global/colors';

type VariantButtonProps = {
  circle: {};
};

type ButtonProps = {
  children: ReactNode;
  variant: keyof VariantButtonProps;
  style?: StyleProp<ViewStyle>;
};

const styles = StyleSheet.create<VariantButtonProps>({
  circle: {
    backgroundColor: colors.blue500,
    width: 50,
    height: 50,
    position: 'absolute',
    bottom: 25,
    right: 25,
    zIndex: 1,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Button = ({children, variant, style}: ButtonProps) => {
  return (
    <TouchableOpacity style={[styles[variant], style]}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;
