import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import colors from '../../global/colors';
import MarkedDatesCalendar from '../../components/MarkedDatesCalendar';
import CardMeeting from '../../components/CardMeeting';
import {Meet} from '../../module/Meet';
import Text from '../../components/Text';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue100,
    paddingTop: 25,
  },
  flatList: {
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  listHeaderComponent: {
    gap: 40,
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
          <View style={styles.listHeaderComponent}>
            <MarkedDatesCalendar meets={meets} />

            <Text variant="semiBold-xl" color="gray700">
              This month
            </Text>
          </View>
        }
        renderItem={({item}) => {
          return <CardMeeting meet={item} variant="dateFull" />;
        }}
      />
    </SafeAreaView>
  );
};

export default HomeMonthly;
