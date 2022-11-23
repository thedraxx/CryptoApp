import React from 'react';
import Home from '../screens/Home/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AddCrypto from '../screens/AddCrypto/AddCrypto';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#000',
        },
        tabBarIcon: () => {
          if (route.name === 'Home') {
            return <Icon name="home" size={20} color="#fff" />;
          }
          if (route.name === 'AddCrypto') {
            return <Icon name="plus" size={20} color="#fff" />;
          }
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="AddCrypto" component={AddCrypto} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
