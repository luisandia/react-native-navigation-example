import { NavigationContainer } from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
import * as React from 'react';
import { Animated, Button, Text, View } from 'react-native';

function Home({ navigation }: any) {
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
      <Button title="Go to Contact" onPress={() => navigation.navigate('Contact')} />
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
      <Button title="Go to About" onPress={() => navigation.navigate('About')} />
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
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const forFade = ({ current, next }: any) => {
  const opacity = Animated.add(current.progress, next ? next.progress : 0).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  return {
    leftButtonStyle: { opacity },
    rightButtonStyle: { opacity },
    titleStyle: { opacity },
    backgroundStyle: { opacity },
  };
};
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'green' },
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
        }}
      />
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{ cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid }}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{ cardStyleInterpolator: CardStyleInterpolators.forNoAnimation }}
      />
    </Stack.Navigator>
  );
}

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
