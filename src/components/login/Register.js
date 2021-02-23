import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Header from '../../header/header';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import WrapperComponent from '../../modal/modal';

import {NavigationContainer, CommonActions} from '@react-navigation/native';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      showMapModal: false,
      currentLoc: '',
      exactlocation: '',
    };
  }
  renderSerperator = () => {
    return <View style={styles.VerticalLine} />;
  };

  getRegisterApi = () => {
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json', Accept: 'application/json'},
      body: JSON.stringify({
        email: 'eve.holt@reqres.in',
        password: 'pistol',
      }),
    };
    fetch('https://reqres.in/api/register', requestOptions)
      .then((response) => response.json())
      .then((response) => {
        console.log('API RESPO', response);
        AsyncStorage.setItem('response', JSON.stringify(response));
        console.log(response.id);
        this.props.navigation.dispatch(
          CommonActions.reset({
            index: 2,
            routes: [
              {name: 'Register'},
              {
                name: 'Login',
                // params: { user: 'jane' },
              },
            ],
          }),
        );
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
        alert('SUCCESSFULLY SAVED IN LOCAL STORAGE');
        alert('Succesfully register');
        // const data = await response.json();
        this.props.navigation.navigate('Home');
      })
      .catch((error) => {
        // this.setState({errorMessage: error.toString()});
        console.error('There was an error!', error);
      });
  };
  componentDidMount() {
    console.log('PARAMS===>', this.props.route);
  }
  getAddressFromMap = (address) => {
    this.setState({showMapModal: false, currentLoc: address});
    console.log('Address from Map', address);
  };
  getExactLocation = (user) => {
    this.setState({showMapModal: false, exactlocation: user});
    console.log('Address from Map', user);
  };
  render() {
    return (
      <>
        {this.state.showMapModal ? (
          <WrapperComponent
            getAddress={this.getAddressFromMap}
            getExactLocation={this.getExactLocation}
          />
        ) : null}
        <View style={styles.RegisterContainer}>
          <Header
            showArrow={true}
            title="Sign up"
            navigation={this.props.navigation}
          />

          <ScrollView
            contentContainerStyle={{
              paddingBottom: 30,
            }}>
            <View style={styles.RegisterView}>
              <View style={styles.loginView}>
                <Text style={styles.loginText}>Sign Up</Text>
                <Text> It's easy and quick </Text>
              </View>

              <View style={{marginTop: 10}}>{this.renderSerperator()}</View>

              <View style={{flexDirection: 'row'}}>
                <TextInput
                  style={styles.TextFirstName}
                  placeholder="First Name"
                  value={this.state.exactlocation}
                />
                <TextInput
                  style={styles.TextLastName}
                  placeholder="Last Name"
                />
              </View>
              <View style={{marginTop: 20}}>
                <TextInput
                  style={styles.TextInputEmail}
                  placeholder="Mobile Number or Email Address"
                />
              </View>
              <View style={{marginTop: 20}}>
                <TextInput
                  style={styles.TextInputEmail}
                  placeholder="New Password"
                />
              </View>
              <View style={{marginTop: 20}}>
                <TextInput
                  style={styles.TextInputEmail}
                  placeholder="Confirm Password"
                />
              </View>
              <TouchableOpacity
                onPress={() => this.setState({showMapModal: true})}
                style={{marginTop: 20}}>
                <TextInput
                  editable={false}
                  selectTextOnFocus={false}
                  placeholder="Current location"
                  value={this.state.currentLoc}
                  selection={{start: 0, end: 0}}
                  style={styles.TextInputEmail}
                  placeholder="Current Location"
                />
              </TouchableOpacity>

              <View style={styles.SignUpView}>
                <TouchableOpacity
                  onPress={this.getRegisterApi}
                  style={styles.SignUpButton}>
                  <Text style={{color: 'white', fontSize: 17}}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  RegisterView: {
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
  profileText: {
    fontSize: 40,
    color: 'white',
  },
  userName: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flex: 1,
    marginTop: 30,
    // marginBottom: 30,
  },
  RegisterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextInput1: {
    height: 40,
    borderColor: 'gray',
  },
  TextFirstName: {
    height: 50,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    width: 150,
  },
  TextLastName: {
    height: 50,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginLeft: 10,
    padding: 10,
    width: 150,
  },
  TextInputEmail: {
    height: 50,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,

    padding: 10,
    width: 310,
  },
  VerticalLine: {
    height: 2,
    backgroundColor: '#d3d3d3',
    marginVertical: 10,
    marginTop: 5,
    marginBottom: 30,
  },
  SignUpButton: {
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
  SignUpView: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Register;
