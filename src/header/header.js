/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Badge from '../badge/badge';

import {CardNumberCount} from '../../App';

export default function Header(props) {
  const [hidden, setHidden] = useState(true);
  const [iconName, setIconName] = useState('search-sharp');

  useEffect(() => {
    console.log('sadajkdhasjk', props.cardCount);
  });
  return (
    <>
      <View style={styles.container}>
        {props.showMenu ? (
          <View style={styles.left}>
            <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
              <Icon style={styles.icon} name="menu" size={20} color="white" />
            </TouchableOpacity>
          </View>
        ) : null}
        {props.showArrow ? (
          <View style={styles.left}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Icon
                style={styles.icon}
                name="arrow-back"
                size={20}
                color="white"
              />
            </TouchableOpacity>
          </View>
        ) : null}

        {hidden ? (
          <View style={styles.middle}>
            <Text style={styles.headerTitle}>{props.title}</Text>
          </View>
        ) : (
          <View style={styles.View2}>
            <TextInput
              style={styles.TextInput1}
              placeholder="Enter your product"
            />
          </View>
        )}
        {props.showSearch ? (
          <View style={styles.right}>
            <TouchableOpacity
              onPress={() => {
                setHidden(!hidden);
                setIconName(() =>
                  iconName === 'close' ? 'search-sharp' : 'close',
                );
              }}>
              <Icon
                style={styles.icon}
                name={iconName}
                size={20}
                color="white"
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.right} />
        )}

        {props.showCart ? (
          <View style={styles.right}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Cart')}>
              <Icon
                style={styles.icon}
                name="cart-outline"
                size={22}
                color="white"
              />
              <Badge cardCount={props.cardCount} />
              {/* <View style={styles.badge}>
                <Text style={{color: 'red'}}>1</Text>
              </View> */}
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.right} />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    height: 50,
    zIndex: 1,
  },
  left: {
    flex: 0.2,
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  middle: {
    flex: 3,
    alignItems: 'center',
  },
  right: {
    flex: 0.3,
    marginLeft: 10,
    // alignItems: 'flex-end',
    // paddingRight: 0,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
  },
  TextInput1: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    width: 270,
    borderRadius: 25,
    height: 40,
    paddingLeft: 20,
  },
  View2: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  badge: {
    position: 'absolute',
    right: 14,
    top: 2,
    backgroundColor: 'white',
    borderRadius: 9,
    width: 12,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
