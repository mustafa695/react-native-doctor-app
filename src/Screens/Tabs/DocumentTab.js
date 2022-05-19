import {View, Text} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import React from 'react';

const DocumentTab = () => {
  return (
    <View
      style={{
        padding: 20,
      }}>
      <Shadow>
        <Text style={{margin: 20, fontSize: 20}}>DocumentTab</Text>
      </Shadow>
    </View>
  );
};

export default DocumentTab;
