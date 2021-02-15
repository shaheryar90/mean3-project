/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {Text, View, Button, StyleSheet,Image} from 'react-native';


class Last extends Component {
  render () {
    return (
      <View style={styles.container}>
    <View style={{borderWidth:1}}>
        <Image source={{uri:"https://cdn.shopify.com/s/files/1/0429/7654/2881/files/FURNITURE_8983d3f5-2ae7-4465-8328-e566724a810b.jpg?v=1597824386"}} style={{width:180,height:150}}/>
    </View>
    <View style={{borderWidth:1}}>
  <Image source={{uri:"https://cdn.shopify.com/s/files/1/0429/7654/2881/files/KIDS_e8129bea-96e1-4469-a931-f9e51d09e8a4.jpg?v=1597830717"}} style={{width:180,height:150}}/>
    </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flexDirection:'row',
   justifyContent:'space-around',
   marginTop:5
  },
});
export default Last;
