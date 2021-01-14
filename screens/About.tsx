import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Header from '../header/Header';
import { DrawerParamList } from '../navigators/DrawerNavigation';

export const AboutRoute = 'About';

export interface AboutParams {
  sort: 'latest' | 'top';
}

type ProfileScreenNavigationProp = DrawerNavigationProp<DrawerParamList, typeof AboutRoute>;

type AboutScreenRouteProp = RouteProp<DrawerParamList, typeof AboutRoute>;

type Props = {
  route: AboutScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
};

const About: React.FC<Props> = (props) => {
  const { route, navigation } = props;
  return (
    <View style={styles.container}>
      <Header title="About" navigation={navigation} />
      <View style={styles.content}>
        <Text style={styles.text}>About is here!</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#48d969',
  },
  text: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: '800',
  },
});

export default About;
