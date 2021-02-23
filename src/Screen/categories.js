/* eslint-disable prettier/prettier */
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
import GetScreenWidth from '../dimension/width';
import Accordion from 'react-native-collapsible/Accordion';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Categories extends Component {
  constructor() {
    super();
  }

  // _renderSectionTitle = (section) => {
  //   return (
  //     <View style={styles.content}>
  //       <Text>pakistan</Text>
  //     </View>
  //   );
  // };

  renderSerperator = () => {
    return <View style={styles.VerticalLine} />;
  };
  render() {
    return (
      <>
        <View style={styles.container}>
          <Header
            title="Categories"
            // showMenu={true}
            // showSearch={true}
            showSearch={true}
            showCart={true}
            navigation={this.props.navigation}
          />
          <ScrollView>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('furniture')}
              style={{backgroundColor: 'whiteSmoke'}}>
              <View
                style={{
                  margin: 20,

                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: GetScreenWidth(90),
                }}>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      backgroundColor: 'red',
                      width: 40,
                      height: 40,
                      borderRadius: 40,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: 5,
                    }}>
                    <Text style={{fontSize: 15, color: 'white'}}>F</Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 18,
                      color: 'red',
                      margin: 10,
                    }}>
                    Furniture
                  </Text>
                </View>
                <View>
                  <Icon
                    style={styles.icon}
                    name="ios-arrow-forward"
                    size={22}
                    color="red"
                  />
                </View>
              </View>
            </TouchableOpacity>
            <View>{this.renderSerperator()}</View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Kitchen')}
              style={{backgroundColor: 'whiteSmoke'}}>
              <View
                style={{
                  margin: 20,

                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: GetScreenWidth(90),
                }}>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      backgroundColor: 'red',
                      width: 40,
                      height: 40,
                      borderRadius: 40,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: 5,
                    }}>
                    <Text style={{fontSize: 15, color: 'white'}}>K</Text>
                  </View>
                  <Text style={{fontSize: 18, color: 'red', margin: 10}}>
                    Kitchen
                  </Text>
                </View>
                <View>
                  <Icon
                    style={styles.icon}
                    name="ios-arrow-forward"
                    size={22}
                    color="red"
                  />
                </View>
              </View>
            </TouchableOpacity>
            <View>{this.renderSerperator()}</View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('BedRoom')}
              style={{backgroundColor: 'whiteSmoke'}}>
              <View
                style={{
                  margin: 20,

                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: GetScreenWidth(90),
                }}>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      backgroundColor: 'red',
                      width: 40,
                      height: 40,
                      borderRadius: 40,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: 5,
                    }}>
                    <Text style={{fontSize: 15, color: 'white'}}>B</Text>
                  </View>
                  <Text style={{fontSize: 18, color: 'red', margin: 10}}>
                    Bed Room
                  </Text>
                </View>
                <View>
                  <Icon
                    style={styles.icon}
                    name="ios-arrow-forward"
                    size={22}
                    color="red"
                  />
                </View>
              </View>
            </TouchableOpacity>
            <View>{this.renderSerperator()}</View>
          </ScrollView>
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
});
