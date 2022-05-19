import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import fonts from '../constants/fonts';

const Header = () => {
  return (
    <>
      <View style={styles.row}>
        <View style={styles.imageWrapper}>
          <Image
            style={{width: 25, height: 25}}
            source={require('../assets/img/dots.png')}
          />
        </View>
        <View>
          <Text style={styles.locText}>Current location</Text>
          <View style={styles.locWrapper}>
            <MaterialIcons
              size={14}
              name="location-pin"
              color={colors.blue}
              style={{paddingRight: 5}}
            />
            <Text style={styles.textLoc}>Los Angeles</Text>
          </View>
        </View>
        <View style={styles.imageWrapper}>
          <Image
            style={{width: 32, height: 32, borderRadius: 10}}
            source={require('../assets/img/avatar.jpg')}
          />
        </View>
      </View>
      <View style={styles.searchWrapper}>
        <Octicons name="search" size={18} color={colors.blue} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search a doctor or health issue"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageWrapper: {
    backgroundColor: colors.white,
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locText: {
    fontFamily: fonts.fontSemiBold,
    color: colors.extraLightNavy,
  },
  locWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLoc: {
    color: colors.navy,
    fontSize: 12,
    fontFamily: fonts.fontSemiBold,
  },
  searchWrapper: {
    flexDirection: 'row',
    marginTop: 44,
    backgroundColor: colors.white,
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  searchInput: {
    flex: 1,
    paddingLeft: 18,
  },
});

export default Header;
