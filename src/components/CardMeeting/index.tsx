import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../../global/colors';
import Icon from '../Icon';
import {Meet as MeetProps} from '../../module/Meet';
import Text from '../Text';

type CardMeetingProps = {
  meet: MeetProps;
  variant: 'dateFull' | 'justHour';
};

const styles = StyleSheet.create({
  containerCard: {
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
    elevation: 1,
    shadowColor: colors.blue500,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentFirst: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  textSpied: {
    textDecorationLine: 'line-through',
  },
});

const months = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

const CardMeeting = ({meet, variant}: CardMeetingProps) => {
  const [isSpied, setIsSpied] = useState(false);
  const date = new Date(meet.date);

  const meetingWasSpied = useCallback(() => {
    const dateNow = new Date().getTime();
    const dateOfMeet = new Date(meet.date).getTime();

    return dateNow > dateOfMeet;
  }, [meet.date]);

  useEffect(() => {
    setIsSpied(() => {
      const newValue = meetingWasSpied();

      return newValue;
    });
  }, [meetingWasSpied]);

  return (
    <View style={styles.containerCard}>
      <View style={styles.contentFirst}>
        {isSpied ? (
          <Icon name="check" color="blue500" size={16} />
        ) : (
          <Icon name="time" color="gray700" size={20} />
        )}
        <Text
          variant="regular-xs"
          color={isSpied ? 'blue500' : undefined}
          style={isSpied ? styles.textSpied : undefined}>
          {meet.title}
        </Text>
      </View>

      {variant === 'dateFull' ? (
        <Text
          variant="regular-xs"
          color={isSpied ? 'blue500' : undefined}
          style={isSpied ? styles.textSpied : undefined}>
          {`${date.getDate()} ${
            months[date.getMonth()]
          } · ${date.getHours()}:${date.getMinutes()}`}
        </Text>
      ) : null}

      {variant === 'justHour' ? (
        <Text variant="regular-xs">{` ${date.getHours()}:${date.getMinutes()}`}</Text>
      ) : null}
    </View>
  );
};

export default CardMeeting;
