import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Button, Platform, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import TopBarNavigation from './TopBarNavigation';

function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#03cafc',
      }}
    >
      <Text style={{ fontSize: 20, color: '#ffffff', fontWeight: '800' }}>Home is here!</Text>
    </View>
  );
}

function Contact({ navigation }: any) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c203fc',
      }}
    >
      <Text style={{ fontSize: 20, color: '#ffffff', fontWeight: '800' }}>Contact is here!</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function About({ navigation }: any) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#48d969',
      }}
    >
      <Text style={{ fontSize: 20, color: '#ffffff', fontWeight: '800' }}>About is here!</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        // component={Contact}
        component={TopBarNavigation}
        options={{
          tabBarLabel: 'Contact',
          tabBarIcon: ({ color, size }) => (
            <Icon
              name={Platform.OS === 'ios' ? 'ios-contacts' : 'md-contacts'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: 'About',
          tabBarIcon: ({ color, size }) => (
            <Icon
              name={Platform.OS === 'ios' ? 'ios-information-circle' : 'md-information-circle'}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const BottomTabNavigation = () => {
  return (
    <NavigationContainer independent={true}>
      <MyTabs />
    </NavigationContainer>
  );
};

export default BottomTabNavigation;
