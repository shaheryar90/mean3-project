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

const renderSerperator = () => {
  return <View style={styles.VerticalLine} />;
};
class Forgot extends Component {
  render() {
    return (
      <View style={styles.Maincontainer}>
        <Header
          showArrow={true}
          title="forgot Password"
          navigation={this.props.navigation}
        />

        <ScrollView
          contentContainerStyle={{
            paddingBottom: 30,
          }}>
          <View style={styles.ViewForgotPassword}>
            <View>
              <Text style={styles.PasswordText}>Forgot Password</Text>
            </View>

            <View style={{marginTop: 10}}>{renderSerperator()}</View>
            <View>
              <TextInput
                style={styles.TextInputEmail}
                placeholder="Mobile Number or Email Address"
              />
            </View>

            <View style={styles.ViewButton}>
              <TouchableOpacity style={styles.SearchButton}>
                <Text style={{color: 'white', fontSize: 17}}>Search </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Maincontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ViewForgotPassword: {
    backgroundColor: 'white',
    borderWidth: 2,
    // borderWidthColor: 'red',
    padding: 30,
    borderRadius: 20,
    borderColor: 'red',
    // elevation: 4,
    justifyContent: 'center',
    marginTop: 200,
  },

  PasswordText: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
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
  SearchButton: {
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
  ViewButton: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Forgot;
