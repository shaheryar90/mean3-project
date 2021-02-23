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
  Dimensions,
} from 'react-native';

export default function GetScreenWidth(per) {
  const onepercent = Dimensions.get('screen').width / 100;
  return onepercent * per;
}
