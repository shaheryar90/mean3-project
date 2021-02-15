import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import Header from '../../header/header';
import Icon from 'react-native-vector-icons/Ionicons';

export default class CustomDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: true,
    };
  }

  render() {
    return (
      <>
        <View style={{backgroundColor: 'red', height: 300}}>
          <View style={styles.profileIcon}>
            <Icon
              style={styles.icon}
              name="md-person-circle"
              size={90}
              color="white"
            />
          </View>
          {this.state.showLogin ? (
            <>
              <View style={styles.profileText}>
                <Text style={{color: 'white', fontSize: 12}}>
                  shaheryar Khan
                </Text>
              </View>
              <View style={styles.profileText}>
                <Text style={{color: 'white', fontSize: 10}}>
                  shaheryar724@gmail.com
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.closeDrawer(),
                      this.setState({showLogin: false});
                  }}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 3,
                    padding: 5,
                    marginTop: 5,
                  }}>
                  <Text style={{color: 'red', fontSize: 12}}>LogOut</Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.closeDrawer(),
                    this.setState({showLogin: true});
                }}
                style={{
                  backgroundColor: 'white',
                  borderRadius: 3,
                  padding: 10,
                  marginTop: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'red', fontSize: 12}}>LogIn</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View style={{margin: 20}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}
            style={{marginVertical: 20}}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon style={styles.icon} name="home" size={25} color="red" />
              </View>
              <View style={{flex: 4}}>
                <Text style={{fontSize: 15, marginTop: 5}}>Home</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Categories')}
            style={{marginVertical: 20}}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  style={styles.icon}
                  name="ios-document-sharp"
                  size={25}
                  color="red"
                />
              </View>
              <View style={{flex: 4}}>
                <Text style={{fontSize: 15, marginTop: 5}}>Categories</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Cart')}
            style={{marginVertical: 20}}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon style={styles.icon} name="cart" size={25} color="red" />
              </View>
              <View style={{flex: 4}}>
                <Text style={{fontSize: 15, marginTop: 5}}>Cart</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Account')}
            style={{marginVertical: 20}}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  style={styles.icon}
                  name="ios-person"
                  size={25}
                  color="red"
                />
              </View>
              <View style={{flex: 4}}>
                <Text style={{fontSize: 15, marginTop: 5}}>Account</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  profileIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  profileText: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
