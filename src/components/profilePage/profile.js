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

const renderSerperator = () => {
  return <View style={styles.VerticalLine} />;
};
class Profile extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header navigation={this.props.navigation} />
        <View style={styles.container}>
          <Text style={styles.profileText}>Profile</Text>
        </View>
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 30,
            // marginBottom: 20,
            // marginHorizontal: 20,
            // paddingTop: 20,
            // backgroundColor: 'lightgray',
            // borderRadius: 15,
            // elevation: 3,
          }}>
          <View style={styles.userName}>
            <View style={styles.icon1}>
              <Icon
                style={styles.icon}
                name="person-outline"
                size={30}
                color="red"
              />
            </View>
            <View style={styles.TextInput}>
              <TextInput style={styles.TextInput1} placeholder="userName" />
            </View>
          </View>
          <View>{renderSerperator()}</View>
          <View style={styles.userName}>
            <View style={styles.icon1}>
              <Icon
                style={styles.icon}
                name="call-outline"
                size={30}
                color="red"
              />
            </View>
            <View style={styles.TextInput}>
              <TextInput style={styles.TextInput1} placeholder="Phone" />
            </View>
          </View>
          <View>{renderSerperator()}</View>

          <View style={styles.userName}>
            <View style={styles.icon1}>
              <Icon
                style={styles.icon}
                name="mail-outline"
                size={30}
                color="red"
              />
            </View>
            <View style={styles.TextInput}>
              <TextInput
                style={styles.TextInput1}
                placeholder="info@gmail.com"
              />
            </View>
          </View>
          <View>{renderSerperator()}</View>
          <View style={styles.userName}>
            <View style={styles.icon1}>
              <Icon
                style={styles.icon}
                name="key-outline"
                size={30}
                color="red"
              />
            </View>
            <View style={styles.TextInput}>
              <TextInput style={styles.TextInput1} placeholder="password" />
            </View>
          </View>
          <View>{renderSerperator()}</View>
          <View style={styles.userName}>
            <View style={styles.icon1}>
              <Icon
                style={styles.icon}
                name="key-outline"
                size={30}
                color="red"
              />
            </View>
            <View style={styles.TextInput}>
              <TextInput style={styles.TextInput1} placeholder="password" />
            </View>
          </View>
          <View>{renderSerperator()}</View>
          <View style={styles.View1}>
            <TouchableOpacity style={styles.Button}>
              <Text style={{color: 'white', fontSize: 17}}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'red',
    width: '160%',
    height: 300,
    borderBottomLeftRadius: 800,
    borderBottomRightRadius: 800,
    // position: 'absolute',
    top: -60,
    marginBottom: -30,
  },
  profileText: {
    fontSize: 40,
    color: 'white',
  },
  userName: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flex: 1,
    // marginBottom: 30,
  },
  icon1: {
    flex: 1,
    alignItems: 'center',
  },
  TextInput: {
    flex: 4,
    // marginLeft: 10,
  },
  TextInput1: {
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
  Button: {
    backgroundColor: 'red',
    borderRadius: 10,
    // height: 40,
    // width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    padding: 10,
    marginHorizontal: 20,
  },
  View1: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Profile;
