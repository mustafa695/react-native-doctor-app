import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';
import fonts from '../constants/fonts';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Upcomming = () => {
  return (
    <View>
      <View style={styles.head}>
        <Text style={styles.headTxt}>Upcoming Schedule</Text>
        <Text style={styles.seeTxt}>See all</Text>
      </View>
      <View style={styles.cardWrap}>
        <View style={styles.card}>
          <View style={styles.cardHead}>
            <View style={styles.cardInnerHead}>
              <Image
                resizeMode="cover"
                source={require('../assets/img/user1.jpg')}
                style={{
                  width: 50,
                  height: 50,
                  marginRight: 15,
                  marginTop: 12,
                  borderRadius: 10,
                }}
              />
              <View>
                <Text
                  style={{
                    color: '#fff',
                    fontFamily: fonts.fontSemiBold,
                    fontSize: 14,
                  }}>
                  Dr. Alan Hathaway
                </Text>
                <Text
                  style={{
                    color: colors.lightSilver,
                    fontFamily: fonts.fontMedium,
                    fontSize: 12,
                  }}>
                  Cardiovascular
                </Text>
              </View>
            </View>
            <View style={styles.video}>
              <Feather name="video" size={12} color={colors.blue} />
            </View>
          </View>
          {/* card button */}
          <TouchableOpacity style={styles.cardBtn}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialIcons
                name="access-time"
                size={15}
                color={colors.white}
              />
              <Text style={styles.btnText}>Sun, Jan 15, 09.00am - 12.00am</Text>
            </View>
          </TouchableOpacity>
          <Image
            style={styles.cardminimal}
            source={require('../assets/img/shadowbig.png')}
          />
          <Image
            style={styles.cardminimalO}
            source={require('../assets/img/shadow.png')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  headTxt: {
    fontSize: 16,
    color: colors.navy,
    fontFamily: fonts.fontSemiBold,
  },
  seeTxt: {
    fontSize: 12,
    color: colors.blue,
    fontFamily: fonts.fontSemiBold,
  },
  cardWrap: {
    height: 240,
  },
  card: {
    backgroundColor: colors.blue,
    width: '100%',
    height: 180,
    marginTop: 20,
    paddingHorizontal: 20,
    borderRadius: 20,
    position: 'relative',
    zIndex: 10,
  },
  cardminimal: {
    position: 'absolute',
    top: 18,
    left: 15,
    zIndex: -2,
  },
  cardminimalO: {
    position: 'absolute',
    top: 26,
    left: 30,
    zIndex: -1,
  },
  cardHead: {
    flexDirection: 'row',
    paddingTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  cardInnerHead: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  video: {
    width: 30,
    height: 30,
    backgroundColor: '#fff',
    borderRadius: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardBtn: {
    backgroundColor: colors.lightBlue,
    justifyContent: 'center',
    alignItems: 'center',
    height: 65,
    borderRadius: 10,
  },
  btnText: {
    color: '#fff',
    fontFamily: fonts.fontMedium,
    fontSize: 12,
    marginTop: 3,
    marginLeft: 10,
  },
});

export default Upcomming;
