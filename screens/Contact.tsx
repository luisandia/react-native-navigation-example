import { DrawerNavigationProp } from '@react-navigation/drawer';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Header from '../header/Header';
import { DrawerParamList } from '../navigators/DrawerNavigation';

export const ContactRoute = 'Contact';

type ProfileScreenNavigationProp = DrawerNavigationProp<DrawerParamList, typeof ContactRoute>;

interface Props {
  navigation: ProfileScreenNavigationProp;
}

export default function Contact({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Header title="Contact" hasBackButton={true} navigation={navigation} />
      <View style={styles.content}>
        <Text style={styles.text}>Contact is here!</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
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
    backgroundColor: '#c203fc',
  },
  text: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: '800',
  },
});
