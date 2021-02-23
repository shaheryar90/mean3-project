/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../header/header';
import AsyncStorage from '@react-native-community/async-storage';

const renderLine = () => {
  return (
    <View
      style={{
        height: 2,
        backgroundColor: '#d3d3d3',
        marginVertical: 10,
      }}></View>
  );
};
class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false};
  }

  componentDidMount() {
    this.getLocalStorage();
  }

  getLocalStorage = async () => {
    const loginData = await AsyncStorage.getItem('response');
    const parsed = JSON.parse(loginData);
    console.log('lOCAL::', parsed);
    if (parsed.token !== null) {
      this.setState({isLoggedIn: true});
    }
  };

  LogOut = async () => {
    await AsyncStorage.removeItem('response');

    this.props.navigation.navigate('Home');

    this.setState({isLoggedIn: false});
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          title="Account"
          // showMenu={true}
          // showSearch={true}
          navigation={this.props.navigation}
        />
        <ScrollView>
          <View>
            <View style={styles.View2}>
              <Text style={styles.Text1}>Terms And policies</Text>
            </View>
          </View>
          <View style={styles.View4}>
            <View style={styles.View5}>
              <TouchableOpacity>
                <Icon
                  style={styles.icon}
                  name="ios-document-text"
                  size={30}
                  color="red"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.View6}>
              <Text>Terms And Services</Text>
            </View>
            <View style={styles.View7}>
              <TouchableOpacity>
                <Icon
                  style={styles.icon}
                  name="ios-chevron-forward"
                  size={30}
                  color="red"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.View4}>
            <View style={styles.View5}>
              <TouchableOpacity>
                <Icon
                  style={styles.icon}
                  name="ios-document-text-outline"
                  size={30}
                  color="red"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.View6}>
              <Text>Privacy Policy</Text>
            </View>
            <View style={styles.View7}>
              <TouchableOpacity>
                <Icon
                  style={styles.icon}
                  name="ios-chevron-forward"
                  size={30}
                  color="red"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View style={styles.View8}>
              <Text style={styles.Text4}>About</Text>
            </View>
          </View>
          <View style={styles.View4}>
            <View style={styles.View5}>
              <TouchableOpacity>
                <Icon
                  style={styles.icon}
                  name="ios-information-circle-sharp"
                  size={30}
                  color="red"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.View6}>
              <Text>About us</Text>
            </View>
            <View style={styles.View7}>
              <TouchableOpacity>
                <Icon
                  style={styles.icon}
                  name="ios-chevron-forward"
                  size={30}
                  color="red"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.View4}>
            <View style={styles.View5}>
              <TouchableOpacity>
                <Icon
                  style={styles.icon}
                  name="md-call-sharp"
                  size={30}
                  color="red"
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('fieldValidation')}
              style={styles.View6}>
              <Text>Contact Us</Text>
            </TouchableOpacity>
            <View style={styles.View7}>
              <TouchableOpacity>
                <Icon
                  style={styles.icon}
                  name="ios-chevron-forward"
                  size={30}
                  color="red"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <View style={styles.View2}>
              <Text style={styles.Text1}>Account</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Profile')}
            style={styles.View10}>
            <View style={styles.View5}>
              <View>
                <Icon style={styles.icon} name="person" size={30} color="red" />
              </View>
            </View>
            <View style={styles.View6}>
              <Text>My profile</Text>
            </View>
          </TouchableOpacity>
          <View>{renderLine()}</View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Order')}
            style={styles.View10}>
            <View style={styles.View5}>
              <TouchableOpacity>
                <Icon
                  style={styles.icon}
                  name="cart-sharp"
                  size={30}
                  color="red"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.View6}>
              <Text>My Order</Text>
            </View>
          </TouchableOpacity>
          <View>{renderLine()}</View>

          {!this.state.isLoggedIn ? (
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}
              style={styles.View10}>
              <View style={styles.View5}>
                <TouchableOpacity>
                  <Icon
                    style={styles.icon}
                    name="log-in"
                    size={30}
                    color="red"
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.View6}>
                <Text>Login</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              // onPress={() => this.props.navigation.navigate('Home')}>
              onPress={this.LogOut}>
              <View style={styles.View10}>
                <View style={styles.View5}>
                  <TouchableOpacity>
                    <Icon
                      style={styles.icon}
                      name="log-out"
                      size={30}
                      color="red"
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.View6}>
                  <Text>Logout</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}

          <View>{renderLine()}</View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  Text1: {
    fontSize: 20,
    color: 'red',
    marginLeft: 5,
    paddingLeft: 5,
  },
  View2: {
    backgroundColor: '#dcdcdc',
    height: 50,
    justifyContent: 'center',
  },
  View4: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 10,
  },
  View5: {
    justifyContent: 'flex-start',
    flex: 2,
    paddingLeft: 10,
  },
  View6: {
    justifyContent: 'center',
    flex: 6,
  },
  View7: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  Text4: {
    fontSize: 20,
    color: 'red',
    marginLeft: 5,
  },
  View8: {
    marginTop: 5,
    backgroundColor: '#dcdcdc',
    height: 50,
    justifyContent: 'center',
  },
  View10: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
});
export default Account;
