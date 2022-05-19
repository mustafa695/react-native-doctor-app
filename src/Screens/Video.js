import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import images from '../constants/images';

const Video = ({navigation}) => {
  return (
    <View style={{
        flex: 1,
    }}>
      <Image source={images.video} resizeMode="contain" style={{
          width:'100%',
          height:'100%'
      }}/>
      <TouchableOpacity
        onPress={() => navigation.navigate("myTabs")}
        style={{
          position: 'absolute',
          top: 20,
          left: 20,
          width: 50,
          height: 80,
        }}>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => navigation.navigate("myTabs")}
        style={{
          position: 'absolute',
          bottom: Dimensions.get('window').height * 0.08,
          left: Dimensions.get('window').height * 0.15,
          width: 120,
          height: Dimensions.get('window').height * 0.1,
        }}>
        </TouchableOpacity>
    </View>
  );
};

export default Video;
