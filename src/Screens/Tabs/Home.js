import React from 'react';
import {View, Text, ScrollView, StyleSheet, StatusBar, Dimensions} from 'react-native';
import Header from '../../components/Header';
import Listingdoctors from '../../components/Listingdoctors';
import Upcomming from '../../components/Upcomming';
import {colors} from '../../constants/colors';

const Home = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      {/* header */}
      <Header />
      {/* upcomming schedule */}
      <Upcomming />
      {/* find your doctor */}
      <Listingdoctors navigation={navigation}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightWhite,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 25,
  },
});

export default Home;
