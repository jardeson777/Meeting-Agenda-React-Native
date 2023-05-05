import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import colors from '../../global/colors';
import MarkedDatesCalendar from '../../components/MarkedDatesCalendar';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue100,
    paddingHorizontal: 25,
  },
});

const HomeMonthly = () => {
  const markedDates = {
    ['2023-05-08']: {
      dotColor: colors.blue500,
      marked: true,
    },
    ['2023-05-07']: {
      dotColor: colors.blue500,
      marked: true,
    },
    ['2023-05-12']: {
      dotColor: colors.blue500,
      marked: true,
    },
  };

  return (
    <SafeAreaView style={styles.container}>
      <MarkedDatesCalendar markedDates={markedDates} />
    </SafeAreaView>
  );
};

export default HomeMonthly;
