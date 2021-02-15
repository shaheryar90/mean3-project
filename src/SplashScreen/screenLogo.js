import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
// import Header from '../../header/header';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ScreenLogo extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          marginTop: 200,
        }}>
        <Image
          style={{width: 300, height: 300, resizeMode: 'contain'}}
          source={{
            uri:
              'https://cdn.shopify.com/s/files/1/0429/7654/2881/files/UR_habitt_RGB_8297ec2b-b830-4232-b4a5-a6d2036da0d4.png?v=1599156950',
          }}
        />
      </View>
    );
  }
}
