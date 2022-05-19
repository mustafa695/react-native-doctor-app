import {View, Image} from 'react-native';
import React from 'react';

const TabIcon = ({focused, icon}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: 45,
        height: 45,
        backgroundColor: `${focused ? '#F2F6FD' : '#fff'}`,
        borderRadius: 55,
      }}>
      {icon}
    </View>
  );
};

export default TabIcon;
