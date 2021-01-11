import { DrawerNavigationProp } from '@react-navigation/drawer';
import React, { ReactElement } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../header/Header';
import { DrawerParamList } from '../navigators/DrawerNavigation';
import { AboutRoute } from './About';

export const HomeRoute = 'Home';

type ProfileScreenNavigationProp = DrawerNavigationProp<DrawerParamList, typeof HomeRoute>;

interface Props {
  navigation: ProfileScreenNavigationProp;
}

export default function Home({ navigation }: Props): ReactElement {
  navigation.navigate(AboutRoute, { sort: 'latest' });
  return (
    <View style={styles.container}>
      <Header title="Home" navigation={navigation} />
      <View style={styles.content}>
        <Text style={styles.text}>Home is here!</Text>
        {/* <Button title="Main Menu" onPress={() => navigation.navigate(App)} /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#03cafc',
  },
  text: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: '800',
  },
});
