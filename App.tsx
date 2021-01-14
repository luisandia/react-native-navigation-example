import React from 'react';
import { StyleSheet } from 'react-native';
import BottomTabNavigation from './navigators/BottomTabNavigation';
import DrawerNavigation from './navigators/DrawerNavigation';
import StackNavigation from './navigators/StackNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TopBarNavigation from './navigators/TopBarNavigation';

export default function App() {
  return (
    <SafeAreaProvider>
      {/* <DrawerNavigation /> */}
      {/* <BottomTabNavigation /> */}
      {/* <StackNavigation /> */}
      <TopBarNavigation/>
    </SafeAreaProvider>
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
