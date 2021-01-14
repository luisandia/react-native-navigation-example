import React from 'react';
import { StyleSheet } from 'react-native';
import BottomTabNavigation from './navigators/BottomTabNavigation';
import DrawerNavigation from './navigators/DrawerNavigation';

export default function App() {
  return (
    <>
      {/* <DrawerNavigation /> */}
      <BottomTabNavigation />

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
