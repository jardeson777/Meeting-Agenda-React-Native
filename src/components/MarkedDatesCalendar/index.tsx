import React from 'react';
import {Calendar} from 'react-native-calendars';
import {StyleSheet} from 'react-native';
import colors from '../../global/colors';
import {MarkedDates} from 'react-native-calendars/src/types';

type MarkedDatesCalendarProps = {
  markedDates: MarkedDates;
};

const styles = StyleSheet.create({
  calendar: {elevation: 5, shadowColor: colors.blue500},
});

const MarkedDatesCalendar = ({markedDates}: MarkedDatesCalendarProps) => {
  return (
    <Calendar
      theme={{textDayFontSize: 12, arrowColor: colors.black}}
      style={styles.calendar}
      markedDates={markedDates}
    />
  );
};

export default MarkedDatesCalendar;
