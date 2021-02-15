/* eslint-disable prettier/prettier */

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
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import {NavigationContainer, CommonActions} from '@react-navigation/native';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  // SaveData = async () => {
  //   let obj = {
  //     email: this.state.email,
  //     password: this.state.password,
  //   };
  //   AsyncStorage.setItem('email', JSON.stringify(obj));
  //   AsyncStorage.setItem('password', JSON.stringify(obj));

  //   this.props.navigation.navigate('Home');
  // };
  // displayData = async () => {
  //   try {
  //     let email = await AsyncStorage.getItem('email');
  //     let parsed = JSON.parse(email);
  //     let password = await AsyncStorage.getItem('password');

  //     alert(parsed.password);
  //     alert(parsed.email);
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  getapiData = async () => {
    const body = {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    };
    let resp = await axios
      .post('https://reqres.in/api/login', body)
      .then((resp) => {
        // console.log(resp);

        AsyncStorage.setItem('response', JSON.stringify(resp.data));
        this.props.navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [
              {name: 'Login'},
              {
                name: 'Account',
                // params: { user: 'jane' },
              },
            ],
          }),
        );
        alert('Successfully Login');
        this.props.navigation.navigate('Home');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // getapiData = async () => {
  //   const body = {
  //     email: 'eve.holt@reqres.in',
  //     password: 'cityslicka',
  //   };
  //   let resp = await axios
  //     .post('https://reqres.in/api/login', body)
  //     .then(function (resp) {
  //       console.log(resp);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  renderSerperator = () => {
    return <View style={styles.VerticalLine} />;
  };
  render() {
    return (
      <View style={styles.MainLoginView}>
        <Header title="Login" navigation={this.props.navigation} />

        <ScrollView
          contentContainerStyle={{
            paddingBottom: 30,
          }}>
          <View style={styles.LoginContainer}>
            <View style={styles.loginView}>
              <Text style={styles.loginText}>Welcome</Text>
            </View>

            <View style={styles.ViewEmail}>
              <View style={styles.Emailicon}>
                <Icon
                  style={styles.icon}
                  name="mail-outline"
                  size={30}
                  color="red"
                />
              </View>
              <View style={{flex: 4}}>
                <TextInput
                  onChangeText={(text) => this.setState({email: text})}
                  style={styles.TextInput1}
                  placeholder="info@gmail.com"
                />
              </View>
            </View>
            <View>{this.renderSerperator()}</View>
            <View style={styles.ViewPassword}>
              <View style={styles.Passwordicon}>
                <Icon
                  style={styles.icon}
                  name="key-outline"
                  size={30}
                  color="red"
                />
              </View>
              <View style={{flex: 4}}>
                <TextInput
                  onChangeText={(text) => this.setState({password: text})}
                  style={styles.TextInputPassword}
                  placeholder="password"
                  secureTextEntry={true}
                />
              </View>
            </View>
            <View>{this.renderSerperator()}</View>
            <TouchableOpacity
              style={styles.ForgottenPassword}
              onPress={() => this.props.navigation.navigate('Forgot')}>
              <Text style={{color: 'red', fontSize: 15}}>Forgot password?</Text>
            </TouchableOpacity>
            <View style={styles.LoginView}>
              <TouchableOpacity
                // onPress={() => this.props.navigation.navigate('Home')}
                // onPress={this.SaveData}
                onPress={this.getapiData}
                style={styles.LoginButton}>
                <Text style={{color: 'white', fontSize: 17}}>Login</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.LoginView}>
              <TouchableOpacity
                style={styles.LoginButton}
                onPress={() => this.props.navigation.navigate('Register')}>
                {/* // onPress={this.displayData}> */}
                <Text style={{color: 'white', fontSize: 17}}>Sign Up </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  LoginContainer: {
    backgroundColor: 'white',
    borderWidth: 2,

    padding: 30,
    borderRadius: 20,
    borderColor: 'red',
    // elevation: 4,
    justifyContent: 'center',
    marginTop: 100,
  },
  loginView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ForgottenPassword: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  loginText: {
    color: 'red',
    fontSize: 40,
    fontWeight: 'bold',
  },
  MainLoginView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    fontSize: 40,
    color: 'white',
  },
  ViewEmail: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flex: 1,
    marginTop: 30,
    // marginBottom: 30,
  },
  ViewPassword: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flex: 1,
    marginTop: 30,
    // marginBottom: 30,
  },
  Passwordicon: {
    flex: 1,
    alignItems: 'center',
  },
  Emailicon: {
    flex: 1,
    alignItems: 'center',
  },
  TextInput: {
    flex: 4,
    // marginLeft: 10,
  },
  TextInputPassword: {
    height: 40,
    borderColor: 'gray',
  },
  VerticalLine: {
    height: 2,
    backgroundColor: '#d3d3d3',
    marginVertical: 10,
    marginTop: 5,
    marginBottom: 30,
  },
  LoginButton: {
    backgroundColor: 'red',
    borderRadius: 10,
    // height: 40,
    // width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    padding: 10,
    width: 300,
    // marginHorizontal: 20,
  },
  LoginView: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Login;
