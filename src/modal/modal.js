import React, {Component} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {
  Text,
  View,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Picker,
  Alert,
} from 'react-native';
import Modal from 'react-native-modal';
import Geocoder from 'react-native-geocoder';
import Icon from 'react-native-vector-icons/Ionicons';

import GetLocation from 'react-native-get-location';
export default class WrapperComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {lat: null, lng: null},
      loading: true,
      address: {},
      user: '',
    };
  }

  componentDidMount() {
    this.getcurrentPositionAddress();
  }
  updateUser = (user) => {
    this.setState({user: user});
  };
  getcurrentPositionAddress() {
    this.setState({loading: true, location: null});

    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 150000,
    })
      .then((location) => {
        this.setState({
          location,
          loading: false,
        });
        console.log(location);
        this.setState({
          location: {lat: location.latitude, lng: location.longitude},
        });
        // Position Geocoding
        var NY = {
          lat: this.state.location.lat,
          lng: this.state.location.lng,
        };

        Geocoder.geocodePosition(NY).then((res) => {
          console.log(res);
          const address = res[0].formattedAddress;
          console.log(address);
          this.setState({address: address});
          console.log('HGJHASGGDJASGDJSGDJGDSHDJASDGJSD', this.state.address);
          // res is an Array of geocoding object (see below)
        });
        // .catch((err) => console.log(err));

        // Address Geocoding
        // Geocoder.geocodeAddress('Pakistan')
        // .then((res) => {
        //   // res is an Array of geocoding object (see below)
        // })
        // .catch((err) => console.log(err));
      })
      .catch((ex) => {
        const {code, message} = ex;
        // console.warn(code, message);
        if (code === 'CANCELLED') {
          Alert.alert('Location cancelled by user or by another request');
        }
        if (code === 'UNAVAILABLE') {
          Alert.alert('Location service is disabled or unavailable');
        }
        if (code === 'TIMEOUT') {
          Alert.alert('Location request timed out');
        }
        if (code === 'UNAUTHORIZED') {
          Alert.alert('Authorization denied');
        }
        this.setState({
          location: null,
          loading: false,
        });
      });
  }
  getAddressGeocoder() {
    console.log('////////////', this.state.location);
    var NY = {
      lat: this.state.location.lat,
      lng: this.state.location.lng,
    };

    Geocoder.geocodePosition(NY)
      .then((res) => {
        if (res.length !== 0) {
          console.log('-=-=-=-=-=-=-', res);
          const address = res[0].formattedAddress;
          this.setState({address: address});
          console.log('====================', this.state.address);
        } else {
          this.getcurrentPositionAddress();
        }
      })

      .catch((ex) => {
        const {code, message} = ex;
        // console.warn(code, message);
        if (code === 'CANCELLED') {
          Alert.alert('Location cancelled by user or by another request');
        }
        if (code === 'UNAVAILABLE') {
          Alert.alert('Location service is disabled or unavailable');
        }
        if (code === 'TIMEOUT') {
          Alert.alert('Location request timed out');
        }
        if (code === 'UNAUTHORIZED') {
          Alert.alert('Authorization denied');
        }
        this.setState({
          location: null,
          loading: false,
        });
      });
  }
  // currentLocation1 = () => {
  //   console.warn(this.state.address);
  //   this.setState({address: this.state.address});
  // };
  saveLocation1 = () => {
    // console.warn(this.state.address);
    // this.props.navigation.navigate('Register', {address: this.state.address});
    this.props.getAddress(this.state.address);
    this.props.getExactLocation(this.state.user);
  };
  render() {
    return (
      <View
        style={{
          backgroundColor: 'green',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Modal
          style={{
            backgroundColor: 'white',
            flex: 1,
          }}
          isVisible={true}>
          {/* <View style={{width: 300, height: 400, backgroundColor: 'white'}}>
          <Text>I am the modal content!</Text>
        </View> */}
          <>
            <View style={{flex: 1}}>
              {this.state.loading ? (
                <View style={{flex: 1, justifyContent: 'center'}}>
                  <ActivityIndicator size="large" color="#0000ff" />
                </View>
              ) : (
                <View style={{flex: 1}}>
                  <View>
                    <Picker
                      selectedValue={this.state.user}
                      onValueChange={this.updateUser}>
                      <Picker.Item label="Home" value="Home" />
                      <Picker.Item label="Office" value="Office" />
                    </Picker>
                    <Text style={styles.text}>{this.state.user}</Text>
                  </View>
                  <View>
                    {/* <TouchableOpacity
          style={styles.TextInputEmail}> */}
                    <TextInput
                      // editable={false}
                      // selectTextOnFocus={false}
                      placeholder="Current location"
                      // value={this.props.route.params?.address ?? null}
                      value={this.state.address}
                      selection={{start: 0, end: 0}}
                    />

                    {/* <TouchableOpacity/> */}
                  </View>
                  <MapView
                    style={{flex: 1}}
                    onRegionChangeComplete={(region) => {
                      console.log('ON REGION CHaNGE', region.latitude);
                      this.setState(
                        {
                          location: {
                            lat: region.latitude,
                            lng: region.longitude,
                          },
                          // location: this.state.latitude,
                          // longitude: this.state.longitude,
                        },
                        () => this.getAddressGeocoder(),
                      );
                    }}
                    initialRegion={{
                      latitude: this.state.location.lat,
                      longitude: this.state.location.lng,
                      // latitude: 25.453453,
                      // longitude: 21341241,
                      latitudeDelta: 0.0922,
                      longitudeDelta: 0.0421,
                    }}>
                    {/* <Marker
                  style={{position: 'absolute', top: '50%', left: '50%'}}
                  // draggable
                  coordinate={{
                    latitude: this.state.location.lat,
                    longitude: this.state.location.lng,
                  }}
                  // onDragEnd={
                  //   (e) => console.log(e.nativeEvent.coordinate)
                  //   // this.setState({
                  //   //   lat: e.nativeEvent.coordinate.lat,
                  //   //   lng: e.nativeEvent.coordinate.lng,
                  //   // })
                  // }
                /> */}
                  </MapView>
                  <View
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      height: 50,
                      width: 50,
                      borderRadius: 30,
                      // backgroundColor: 'green',
                    }}>
                    <Icon
                      style={styles.icon}
                      name="md-location-sharp"
                      size={30}
                      color="red"
                    />
                  </View>

                  {/* <View
                    style={{
                      // width: 200,
                      margin: 10,
                      // justifyContent: 'center',
                      // alignItems: 'center',
                      // alignSelf: 'center',
                    }}>
                    <Button
                      onPress={this.currentLocation1}
                      style={{position: 'absolute', zIndex: 1}}
                      title="Add current location"
                    />
                  </View> */}
                  <View
                    style={{
                      // width: 200,
                      margin: 10,
                      // justifyContent: 'center',
                      // alignItems: 'center',
                      // alignSelf: 'center',
                    }}>
                    <Button
                      onPress={this.saveLocation1}
                      style={styles.saveButton}
                      title="save location"
                    />
                  </View>
                </View>
              )}
            </View>
          </>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  saveButton: {position: 'absolute', zIndex: 1},
  text: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'red',
  },
});
