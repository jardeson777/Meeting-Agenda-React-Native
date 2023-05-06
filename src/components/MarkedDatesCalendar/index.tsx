import React from 'react';
import {Calendar} from 'react-native-calendars';
import {StyleSheet} from 'react-native';
import colors from '../../global/colors';
import {MarkedDates} from 'react-native-calendars/src/types';
import {Meet} from '../../module/Meet';

type MarkedDatesCalendarProps = {
  meets: Meet[];
};

const styles = StyleSheet.create({
  calendar: {elevation: 5, shadowColor: colors.blue500},
});

const MarkedDatesCalendar = ({meets}: MarkedDatesCalendarProps) => {
  const markedDates: MarkedDates = meets.reduce((obj: MarkedDates, meet) => {
    const formattedDate = meet.date.slice(0, 10);
    obj[formattedDate] = {
      dotColor: colors.blue500,
      marked: true,
    };
    return obj;
  }, {});

  return (
    <Calendar
      theme={{textDayFontSize: 12, arrowColor: colors.black}}
      style={styles.calendar}
      markedDates={markedDates}
    />
  );
};

export default MarkedDatesCalendar;
