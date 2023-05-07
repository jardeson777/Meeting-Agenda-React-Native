import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../../global/colors';

enum NameIcon {
  'time',
  'check',
  'plus',
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

  if (name === 'plus') {
    return <Entypo name="plus" size={size} color={colors[color]} />;
  }

  return <Ionicons name="time-outline" size={size} color={colors[color]} />;
};

export default Icon;
