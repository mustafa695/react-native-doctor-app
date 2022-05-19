import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/Screens/Tabs/Home';
import Detail from './src/Screens/Detail';
import TabIcon from './src/components/TabIcon';
import IconHome from 'react-native-vector-icons/Entypo';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import DocumentTab from './src/Screens/Tabs/DocumentTab';
import Calander from './src/Screens/Tabs/Calander';
import Profile from './src/Screens/Tabs/Profile';
import Video from './src/Screens/Video';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: '#FEFEFF',
          borderTopColor: 'transparent',
          height: 100,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icon={<IconHome name="home" size={28} color="#585CE5" />} />
          ),
        }}
      />
      <Tab.Screen
        name="Document"
        component={DocumentTab}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icon={<IconIonicons name="document-text-outline" size={28} color="#585CE5" />} />
          ),
        }}
      />
       <Tab.Screen
        name="Calander"
        component={Calander}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icon={<Fontisto name="date" size={22} color="#585CE5" />} />
          ),
        }}
      />
       <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} icon={<IconIonicons name="person-outline" size={25} color="#585CE5" />} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="myTabs" component={MyTabs} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Video" component={Video} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
