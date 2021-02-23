import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Header from '../header/header';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
// import GetScreenWidth from '../dimension/width';
// import Accordion from 'react-native-collapsible/Accordion';
import Icon from 'react-native-vector-icons/Ionicons';

export default class fieldValidation extends Component {
  constructor() {
    super();

    this.state = {
      isValid: false,
      errors: false,
      emailerrors: false,
      passworderrors: false,
      usererrors: false,
      email: '',
      password: '',
      number: '',
      color: 'lightgrey',
      button: false,
      opacity: 0.2,
      user: '',
      borderColor: 'lightgray',
    };
  }

  //   checkTextInput = () => {
  //     //Check for the Name TextInput
  //     if (!this.state.email.trim()) {
  //       alert('Please Enter email');
  //       return;
  //     }
  //     //Check for the Email TextInput
  //     if (!this.state.password.trim()) {
  //       this.setState({isValid: true, errors: false});
  //       alert('Please Enter password');
  //       return;
  //     }
  //     //Checked Successfully
  //     //Do whatever you want
  //     alert('Success');
  //   };

  onNextStep = () => {
    const {email, password, user, isValid} = this.state;
    if (email.trim() == 0 || user.trim() == 0 || password.trim() == 0) {
      if (email.trim() == 0) {
        console.warn('email');
        if (!this.state.isValid) {
          this.setState({emailerrors: true, errors: true});
          // alert('email field is empty');
        }
      }
      if (user.trim() == 0) {
        console.warn('user');

        if (!isValid) {
          console.warn('valid');
          this.setState({usererrors: true, errors: true});
          // alert('user field is empty');
        }
      }

      if (password.trim() == 0) {
        console.warn('pass');

        if (!isValid) {
          this.setState({passworderrors: true, errors: true});
          // alert('password field is empty');
        }
      }
    } else {
      this.setState({
        emailerrors: false,
        passworderrors: false,
        usererrors: false,
        errors: false,
        isValid: true,
      });
    }
  };
  render() {
    const buttonTextStyle = {
      //   color: this.state.color === 'lightgrey' ? 'lightgrey' : 'red',
      color: 'white',
      backgroundColor: 'darkseagreen',
      padding: 10,
      borderRadius: 5,
      //   opacity: this.state.opacity,

      //   backgroundColor: 'red',
      //   disabled: false,
    };
    return (
      <>
        <View style={styles.container}>
          <Header
            title="Categories"
            // showMenu={true}
            // showSearch={true}
            showSearch={true}
            showCart={true}
            showArrow={true}
            navigation={this.props.navigation}
          />

          <View style={{flex: 1}}>
            <ProgressSteps>
              <ProgressStep
                // disabled={true}
                nextBtnTextStyle={this.state.button ? {buttonTextStyle} : null}
                nextBtnTextStyle={buttonTextStyle}
                // previousBtnTextStyle={buttonTextStyle}
                // onPrevious={() => {
                //   alert('sajdasjk');
                //   this.setState({errors: true, isValid: false});
                // }}
                onNext={this.onNextStep}
                errors={this.state.errors}
                onPress={this.checkTextInput}
                label="First Step">
                <View style={{alignItems: 'center'}}>
                  <Text>This is the content within step 1!</Text>
                  <TextInput
                    style={[
                      styles.TextInputEmail,
                      {
                        borderColor: this.state.emailerrors
                          ? 'red'
                          : 'lightgrey',
                      },
                    ]}
                    value={this.state.email}
                    placeholder="email"
                    onChangeText={(value) =>
                      this.setState({email: value, emailerrors: false})
                    }></TextInput>
                  <TextInput
                    style={[
                      styles.TextInputEmail,
                      {
                        borderColor: this.state.usererrors
                          ? 'red'
                          : 'lightgrey',
                      },
                    ]}
                    value={this.state.user}
                    placeholder="user"
                    onChangeText={(value) =>
                      this.setState({user: value, usererrors: false})
                    }></TextInput>
                  <TextInput
                    style={[
                      styles.TextInputEmail,
                      {
                        borderColor: this.state.passworderrors
                          ? 'red'
                          : 'lightgrey',
                      },
                    ]}
                    value={this.state.password}
                    placeholder="password"
                    onChangeText={(value) =>
                      this.setState({password: value, passworderrors: false})
                    }></TextInput>
                </View>
              </ProgressStep>
              <ProgressStep
                label="Second Step"
                onPrevious={() => {
                  alert('sajdasjk');
                  this.setState({errors: true, isValid: false});
                  console.log(this.state);
                }}>
                <View style={{alignItems: 'center'}}>
                  <Text>This is the content within step 2!</Text>
                  <TextInput
                    placeholder="password"
                    onChangeText={(value) =>
                      this.setState({password: value})
                    }></TextInput>
                </View>
              </ProgressStep>
              <ProgressStep label="Third Step">
                <View style={{alignItems: 'center'}}>
                  <Text>This is the content within step 3!</Text>
                  <TextInput placeholder="mobile number"></TextInput>
                </View>
              </ProgressStep>
            </ProgressSteps>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  VerticalLine: {
    height: 1,
    backgroundColor: 'lightgrey',
    // marginVertical: 10,
    // marginTop: 5,
    // marginBottom: 30,
  },
  icon: {
    margin: 10,
  },
  TextInputEmail: {
    height: 50,
    borderRadius: 10,
    borderColor: 'lightgrey',
    borderWidth: 1,

    padding: 10,
    width: 310,
  },
});
