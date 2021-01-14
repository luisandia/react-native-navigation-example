import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React, { ReactElement } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import About, { AboutParams, AboutRoute } from '../screens/About';
import Contact, { ContactRoute } from '../screens/Contact';
import Home, { HomeRoute } from '../screens/Home';
import BottomTabNavigation from './BottomTabNavigation';

const CustomDrawerContent = (props: any) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.drawerHeader}>
        <View>
          <Text style={styles.drawerHeaderText}>Drawer Menu</Text>
        </View>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          icon={() => (
            <Icon name={Platform.OS === 'ios' ? 'ios-close' : 'md-close'} color="black" size={22} />
          )}
          label="Close drawer"
          onPress={() => props.navigation.closeDrawer()}
        ></DrawerItem>
      </DrawerContentScrollView>
    </ScrollView>
  );
};

export type DrawerParamList = {
  [HomeRoute]: undefined;
  [ContactRoute]: { userId: string };
  [AboutRoute]: AboutParams | undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

function MyDrawer() {
  return (
    <Drawer.Navigator
      backBehavior="history"
      drawerContent={(props: DrawerContentComponentProps): ReactElement => (
        <CustomDrawerContent {...props} />
      )}
    >
      <Drawer.Screen name={HomeRoute} component={Home} />
      <Drawer.Screen name={ContactRoute} component={Contact} />
      <Drawer.Screen name={AboutRoute} component={About} />
    </Drawer.Navigator>
  );
}

function DrawerNavigation() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: '#03cafc',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
export default DrawerNavigation;
