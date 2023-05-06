import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../global/colors';

enum NameIcon {
  'time',
  'check',
}

type IconProps = {
  name: keyof typeof NameIcon;
  color: keyof typeof colors;
  size: number;
};

const Icon = ({name, color, size}: IconProps) => {
  if (name === 'time') {
    return <Ionicons name="time-outline" size={size} color={colors[color]} />;
  }

  if (name === 'check') {
    return <AntDesign name="checkcircleo" size={size} color={colors[color]} />;
  }

  return <Ionicons name="time-outline" size={size} color={colors[color]} />;
};

export default Icon;
