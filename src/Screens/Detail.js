import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors} from '../constants/colors';
import fonts from '../constants/fonts';
import images from '../constants/images';
import {AirbnbRating} from 'react-native-ratings';

const Detail = ({route, navigation}) => {
  const {data} = route.params;
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.head}>
          <View style={styles.shadowContainer}>
            <TouchableOpacity
              style={styles.headCircle}
              onPress={() => navigation.navigate('myTabs')}>
              <MaterialIcons name="arrow-back-ios" size={18} />
            </TouchableOpacity>
          </View>
          <View style={styles.shadowContainer}>
            <TouchableOpacity style={styles.headCircle}>
              <Ionicons name="notifications-outline" size={20} />
            </TouchableOpacity>
          </View>
        </View>

        {/* intro */}

        <View style={styles.intrWrapp}>
          <View style={styles.intrImgWrap}>
            <Image
              source={data?.avatar}
              resizeMode="cover"
              style={styles.imgIntr}
            />
          </View>
          <View style={styles.intrDetailWrap}>
            <Text style={styles.intrName}>{data?.name}</Text>
            <Text style={styles.intrDesig}>{data?.desig}</Text>
            <View style={[styles.intrBotomWrap, styles.mb4]}>
              <View style={styles.intrBox}>
                <FontAwesome name="star" size={18} color={colors.yellow} />
              </View>
              <View style={{marginTop: 1}}>
                <Text style={styles.intrBoxRatText}>Rating</Text>
                <Text style={styles.intrBoxRating}>4.8 out of 5</Text>
              </View>
            </View>
            <View style={styles.intrBotomWrap}>
              <View style={styles.intrBox}>
                <Ionicons name="people" size={18} color={colors.blue} />
              </View>
              <View style={{marginTop: 1}}>
                <Text style={styles.intrBoxRatText}>Patient</Text>
                <Text style={styles.intrBoxRating}>2000+</Text>
              </View>
            </View>
          </View>
        </View>

        {/*Bio*/}

        <View style={styles.bioWrapper}>
          <Text style={styles.bioTitle}>Biography</Text>
          <Text style={styles.bioPara}>
            Dr. Alan Hathaway is an indonesian Heart surgeon specialist. She
            practices general at Elisabeth Hospital in Semarang...
          </Text>
          <View style={{marginTop: 24}}>
            <Text style={styles.bioTitle}>Location</Text>
            <Image source={images.map} resizeMode="cover" />
          </View>
          <View
            style={{
              marginTop: 28,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.bioTitle}>Reviews</Text>
            <Text
              style={{
                color: colors.blue,
                fontSize: 12,
                fontFamily: fonts.fontMedium,
              }}>
              See all
            </Text>
          </View>
          {data?.reviews.map((item, ind) => {
            return (
              <View style={styles.revWrapp} key={ind}>
                <View style={styles.revImageWrap}>
                  <Image
                    style={{width: '100%', height: '100%', borderRadius: 10}}
                    source={item.avatar}
                    resizeMode="cover"
                  />
                </View>
                <View style={{flex: 1}}>
                  <Text
                    style={{color: colors.navy, fontFamily: fonts.fontMedium}}>
                    {item.name}
                  </Text>
                  <View
                    style={{alignItems: 'flex-start', flexDirection: 'row'}}>
                    <AirbnbRating
                      isDisabled={true}
                      showRating={false}
                      defaultRating={item.rating}
                      size={11.5}
                    />
                    <Text
                      style={{
                        fontSize: 12,
                        color: colors.silver,
                        fontFamily: fonts.fontMedium,
                        marginLeft: 10,
                      }}>
                      {item.rating}.0
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <View style={styles.btnWrapp}>
        <TouchableOpacity
          style={styles.btnAppoint}
          onPress={() => navigation.navigate('Video')}>
          <Text style={styles.btnAppointTxt}>Make appointment</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.85,
    backgroundColor: colors.lightWhite,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 25,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  shadowContainer: {
    width: 50,
    height: 48,
    borderRadius: 55,
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,
    elevation: 12,
  },
  headCircle: {
    backgroundColor: colors.white,
    width: '100%',
    height: '100%',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  //intro styles
  intrWrapp: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 35,
  },
  intrImgWrap: {
    width: '40%',
    height: Dimensions.get('window').width * 0.52,
  },
  imgIntr: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  intrDetailWrap: {
    flex: 1,
    marginLeft: 20,
    marginBottom: Dimensions.get('window').height * 0.015,
  },
  intrName: {
    color: colors.darkBlue,
    fontFamily: fonts.fontSemiBold,
    fontSize: 16,
    lineHeight: 24,
  },
  intrDesig: {
    color: '#B7BFCC',
    fontSize: 12,
    lineHeight: 18,
    fontFamily: fonts.fontRegular,
    marginTop: 4,
    marginBottom: 16,
  },
  intrBotomWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  intrBox: {
    width: 40,
    height: 40,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginRight: 16,
  },
  intrBoxRatText: {
    fontFamily: fonts.fontMedium,
    color: colors.lightSilver,
    fontSize: 12,
  },
  intrBoxRating: {
    fontSize: 13,
    fontFamily: fonts.fontSemiBold,
    color: colors.darkBlue,
  },
  mb4: {
    marginBottom: Dimensions.get('window').height * 0.01,
  },
  //bio
  bioWrapper: {
    backgroundColor: '#fff',
    paddingHorizontal: 25,
    paddingVertical: 29,
    borderRadius: 10,
    marginVertical: 30,
  },
  bioTitle: {
    fontFamily: fonts.fontSemiBold,
    color: colors.darkBlue,
    fontSize: 15,
    marginBottom: 8,
  },
  bioPara: {
    lineHeight: 20,
    fontFamily: fonts.fontMedium,
    color: colors.lightSilver,
  },
  btnAppoint: {
    backgroundColor: colors.blue,
    padding: 22,
    borderRadius: 20,
  },
  btnAppointTxt: {
    color: colors.white,
    textAlign: 'center',
    fontFamily: fonts.fontMedium,
  },
  btnWrapp: {
    flex: 0.15,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  revWrapp: {
    flexDirection: 'row',
    marginTop: 12,
    marginBottom: 8,
  },
  revImageWrap: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
});

export default Detail;
