import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text} from 'react-native';
import colors from '../../global/colors';
import MarkedDatesCalendar from '../../components/MarkedDatesCalendar';
import CardMeeting from '../../components/CardMeeting';
import {Meet} from '../../module/Meet';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue100,
    paddingTop: 25,
  },
  flatList: {
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
});

const HomeMonthly = () => {
  const meets: Meet[] = [
    {title: 'Teste', date: '2023-05-04T20:45:49.770Z'},
    {title: 'teste 2', date: '2023-05-07T20:45:49.770Z'},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={meets}
        contentContainerStyle={styles.flatList}
        ListHeaderComponent={
          <>
            <MarkedDatesCalendar meets={meets} />

            <Text>This month</Text>
          </>
        }
        renderItem={({item}) => {
          return <CardMeeting meet={item} variant="dateFull" />;
        }}
      />
    </SafeAreaView>
  );
};

export default HomeMonthly;
