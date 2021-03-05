/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Categories from '../../Screen/categories';
import Home from '../../Screen/home';
import Account from '../../Screen/account';
import Cart from '../../Screen/cart';
import {createStackNavigator} from '@react-navigation/stack';
import Screen1 from '../Features/screen1';
import Screen2 from '../Features/screen2';
import Screen3 from '../Features/screen3';
import Screen4 from '../Features/screen4';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../profilePage/profile';
import Login from '../login/login';
import Register from '../login/Register';
import Forgot from '../login/Forgot';
import Order from '../orderPage/order';
import CustomDrawer from '../Navigation/customDrawer';
import Map from '../../Map/Map';
import WrapperComponent from '../../modal/modal';
import Slider from '../Slider/slider';
import Furniture from '../categories/furniture';
import Kitchen from '../categories/kitchen';
import BedRoom from '../categories/Bedroom';
import fieldValidation from '../../fieldValidation/fieldValidation';
import SliderModal from '../Slider/sliderModal';
import FoodPandaUsage from '../foodPanda/foodpanda';

import UsageArrays from '../Arrays/usageArrays';
import DataListUsage from '../DataList/DataList';
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// function DrawerNavigation() {
//   return (
// <Tab.Navigator
//   screenOptions={({route}) => ({
//     tabBarIcon: ({focused, color, size}) => {
//       let iconName;

//       if (route.name === 'Home') {
//         iconName = focused ? 'ios-home-outline' : 'ios-home';
//       } else if (route.name === 'Categories') {
//         iconName = focused ? 'ios-list' : 'ios-list';
//       } else if (route.name === 'Cart') {
//         iconName = focused ? 'ios-cart' : 'ios-cart-outline';
//       } else if (route.name === 'Account') {
//         iconName = focused ? 'ios-person-outline' : 'ios-person-outline';
//       }

//       // You can return any component that you like here!
//       return <Ionicons name={iconName} size={size} color={color} />;
//     },
//   })}
//   tabBarOptions={{
//     activeTintColor: 'red',
//     inactiveTintColor: 'gray',
//   }}>
//   <Tab.Screen name="Home" component={NewScreen} />
//   <Tab.Screen name="Categories" component={Categories} />
//   <Tab.Screen name="Cart" component={Cart} />
//   <Tab.Screen name="Account" component={ProfileScreen} />
// </Tab.Navigator>
//     <Drawer.Navigator
//       headerMode="none"
//       initialRouteName="Home"
//       screenOptions={{
//         unmountOnBlur: true,
//       }}
//       drawerContent={(props) => <CustomDrawer {...props} />}
//       drawerContentOptions={{
//         activeTintColor: 'red',
//         itemStyle: {},
//       }}>
//       <Drawer.Screen name="Home" component={NewScreen} />
//       <Drawer.Screen name="Cart" component={Cart} />
//       <Drawer.Screen name="Categories" component={Categories} />
//       <Drawer.Screen name="Account" component={Account} />
//     </Drawer.Navigator>
//   );
// }

function NewScreen() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      {/* <Stack.Screen name="SliderModal" component={SliderModal} /> */}
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="Screen3" component={Screen3} />
      <Stack.Screen name="Screen4" component={Screen4} />
      {/* <Stack.Screen name="Categories" component={Categories} /> */}
    </Stack.Navigator>
  );
}

function CategoriesScreen() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Categories">
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="furniture" component={Furniture} />
      <Stack.Screen name="Kitchen" component={Kitchen} />
      <Stack.Screen name="BedRoom" component={BedRoom} />
    </Stack.Navigator>
  );
}

function ProfileScreen() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Account">
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Login" component={RegisterPage} />
      <Stack.Screen name="Order" component={OrderScreen} />
      <Stack.Screen name="fieldValidation" component={fieldValidation} />
      <Stack.Screen name="FoodPandaUsage" component={FoodPandaUsage} />
      <Stack.Screen name="DataListUsage" component={DataListUsage} />
      <Stack.Screen name="UsageArrays" component={UsageArrays} />
    </Stack.Navigator>
  );
}

function OrderScreen() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Order">
      <Stack.Screen name="Order" component={Order} />
    </Stack.Navigator>
  );
}
// function CurrentLocation() {
//   return (
//     <Stack.Navigator headerMode="none" initialRouteName="Categories">
//       <Stack.Screen name="Categories" component={Categories} />
//       <Stack.Screen name="Map" component={WrapperComponent} />
//       {/* <Stack.Screen name="Login" component={RegisterPage} /> */}
//     </Stack.Navigator>
//   );
// }

function RegisterPage() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Forgot" component={Forgot} />
      {/* <Stack.Screen name="customDrawer" component={CustomDrawer} /> */}
    </Stack.Navigator>
  );
}

// function ForgotPassword() {
//   return (
//     <Stack.Navigator headerMode="none" initialRouteName="Register">
//       <Stack.Screen name="Register" component={Register} />
//       <Stack.Screen name="Register" component={ForgotPassword} />
//     </Stack.Navigator>
//   );
// }

export default function Navigation() {
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator
        headerMode="none"
        initialRouteName="Home"
        screenOptions={{
          unmountOnBlur: true,
        }}
        drawerContent={(props) => <CustomDrawer {...props} />}
        drawerContentOptions={{
          activeTintColor: 'red',
          itemStyle: {},
        }}>
        <Drawer.Screen name="Home" component={DrawerNavigation} />
        <Drawer.Screen name="Cart" component={Cart} />
        <Drawer.Screen name="Categories" component={Categories} />
        <Drawer.Screen name="Account" component={Account} />
      </Drawer.Navigator> */}

      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home-outline' : 'ios-home';
            } else if (route.name === 'Categories') {
              iconName = focused ? 'ios-list' : 'ios-list';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'ios-cart' : 'ios-cart-outline';
            } else if (route.name === 'Account') {
              iconName = focused ? 'ios-person-outline' : 'ios-person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={NewScreen} />
        <Tab.Screen name="Categories" component={CategoriesScreen} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Account" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
