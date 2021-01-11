import React, { ReactElement } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContentComponentProps,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import { ScrollView } from 'react-native-gesture-handler';
import Home, { HomeRoute } from '../screens/Home';
import Contact, { ContactRoute } from '../screens/Contact';
import About, { AboutParams, AboutRoute } from '../screens/About';
import { NavigationContainer, NavigationState, RouteProp } from '@react-navigation/native';

const CustomDrawerContent = (props: any) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.drawerHeader}>
        <View>
          <Text style={styles.drawerHeaderText}>Drawer Menu</Text>
        </View>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props}>
          <DrawerItem
            // icon={}
            label="Close drawer"
            onPress={() => props.navigation.closeDrawer()}
          ></DrawerItem>
        </DrawerItemList>
      </DrawerContentScrollView>
    </ScrollView>
  );
};

export type DrawerParamList = {
  [HomeRoute]: undefined;
  [ContactRoute]: { userId: string };
  [AboutRoute]: AboutParams | undefined;
};
type BlurredSuccessRouteProp = RouteProp<DrawerParamList, typeof AboutRoute>;

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
