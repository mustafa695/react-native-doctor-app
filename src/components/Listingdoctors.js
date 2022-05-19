import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import {AirbnbRating} from 'react-native-ratings';
import {Shadow} from 'react-native-shadow-2';
import {colors} from '../constants/colors';
import fonts from '../constants/fonts';
import icons from '../constants/icons';
import images from '../constants/images';

const Listingdoctors = ({navigation}) => {
  const listingData = [
    {
      id: 1,
      name: 'Dr. Alan Hathaway',
      desig: 'Cardiovascular',
      rating: 4,
      review: 177,
      avatar: images.doctor1,
      patient: 2000,
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      reviews: [
        {
          uid: 99,
          avatar: images.user1,
          name: 'Alex John',
          rating: 4,
        },
        {
          uid: 92,
          avatar: images.user2,
          name: 'Kim David',
          rating: 5,
        },
        {
          uid: 88,
          avatar: images.user3,
          name: 'Mustafa Ahmed',
          rating: 5,
        },
      ],
    },
    {
      id: 2,
      name: 'Dr. Marry John',
      desig: 'Dentist',
      rating: 3,
      review: 180,
      avatar: images.doctor2,
      patient: 2000,
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      reviews: [
        {
          uid: 99,
          avatar: images.user3,
          name: 'Alex John',
          rating: 4,
        },
        {
          uid: 92,
          avatar: images.user2,
          name: 'Kim David',
          rating: 5,
        },
        {
          uid: 88,
          avatar: images.user1,
          name: 'Mustafa Ahmed',
          rating: 5,
        },
      ],
    },
    {
      id: 3,
      name: 'Dr. Alan Hathaway',
      desig: 'Cardiovascular',
      rating: 5,
      review: 127,
      avatar: images.doctor3,
      patient: 3000,
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      reviews: [
        {
          uid: 99,
          avatar: images.user1,
          name: 'Alex John',
          rating: 4,
        },
        {
          uid: 92,
          avatar: images.user2,
          name: 'Kim David',
          rating: 5,
        },
        {
          uid: 88,
          avatar: images.user3,
          name: 'Mustafa Ahmed',
          rating: 5,
        },
      ],
    },
  ];

  const tabs = [
    {
      id: 1,
      icon: icons.hearth,
      title: 'Heart surgeon',
    },
    {
      id: 2,
      icon: icons.capsol,
      title: 'Psychologist',
    },
    {
      id: 3,
      icon: icons.teeth,
      title: 'Dentist',
    },
  ];
  const [tabIndx, setTabIndx] = useState(0);

  const handleTabs = ind => {
    setTabIndx(ind);
  };
  return (
    <View
      style={{
        paddingBottom: Dimensions.get('window').height * 0.22,
      }}>
      <View style={styles.head}>
        <Text style={styles.txthead}>Lets find your doctor</Text>
        <Image
          source={require('../assets/icons/Filter.png')}
          resizeMode="cover"
        />
      </View>

      {/* tabs horizontal */}

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{marginBottom: 15}}>
        {tabs.map((item, ind) => {
          return (
            <TouchableOpacity
              style={[
                styles.tabWrapp,
                {backgroundColor: tabIndx === ind ? '#fff' : '#F3F3F3'},
              ]}
              key={ind}
              onPress={() => handleTabs(ind)}>
              <View style={styles.tabRow}>
                <View style={styles.imageWrapp}>
                  <Image
                    style={{width: 14, height: 14}}
                    source={item.icon}
                    resizeMode="contain"
                  />
                </View>
                <Text style={styles.tabText}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Listing */}

      <FlatList
        data={listingData}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.listWrapper}
            onPress={() =>
              navigation.navigate('Detail', {
                data: item,
              })
            }>
            <View style={styles.listRow}>
              <View style={styles.listImgWrap}>
                <Image
                  style={{width: '100%', height: '100%', borderRadius: 12}}
                  source={item.avatar}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.listContentWrapp}>
                <Text style={styles.listTitle}>{item.name}</Text>
                <Text style={styles.listSubTitle}>{item.desig}</Text>
                <View style={styles.ratingWrapp}>
                  <AirbnbRating
                    isDisabled={true}
                    showRating={false}
                    defaultRating={item.rating}
                    size={11.5}
                  />
                  <Text
                    style={{
                      fontSize: 10.5,
                      color: colors.silver,
                      fontFamily: fonts.fontMedium,
                      marginLeft: 10,
                    }}>
                    {` 4.8 | ${item.review} Reviews`}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 24,
  },
  txthead: {
    fontFamily: fonts.fontSemiBold,
    color: colors.darkBlue,
    fontSize: 16,
  },
  tabWrapp: {
    paddingVertical: 10,
    borderRadius: 15,
    marginRight: 15,
  },
  tabRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabText: {
    marginHorizontal: 14,
    fontFamily: fonts.fontMedium,
    fontSize: 11,
  },
  imageWrapp: {
    width: 24,
    height: 25,
    borderRadius: 50,
    backgroundColor: '#F2F6FD',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 14,
  },

  listWrapper: {
    backgroundColor: colors.white,
    padding: 15,
    marginVertical:8,
    borderRadius: 10,
  },
  listRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listContentWrapp: {
    marginLeft: 20,
    width: '75%',
  },
  listImgWrap: {
    width: '25%',
    height: 75,
  },
  listTitle: {
    color: colors.darkBlue,
    fontFamily: fonts.fontSemiBold,
    fontSize: 14,
    lineHeight: 21,
  },
  listSubTitle: {
    color: colors.silver,
    fontSize: 12,
    lineHeight: 18,
    fontFamily: fonts.fontRegular,
  },
  ratingWrapp: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
});

export default Listingdoctors;
