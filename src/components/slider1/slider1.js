/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

export default class Slider1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'https://cdn.shopify.com/s/files/1/0429/7654/2881/files/Website_Banner_1280px_x_378px_1_4972b4a6-681a-445b-ad6c-5b93660279e9_2100x.jpg?v=1607694436',
        'https://cdn.shopify.com/s/files/1/0429/7654/2881/files/Website_Banner_1280px_x_378px_1_2100x.jpg?v=1603908080',
        'https://cdn.shopify.com/s/files/1/0429/7654/2881/files/MAIN_BANNER_1_2100x.jpg?v=1597063002',
        'https://cdn.shopify.com/s/files/1/0429/7654/2881/files/FURNITURE_8983d3f5-2ae7-4465-8328-e566724a810b.jpg?v=1597824386', // Network image
      ],
    };
  }

  render() {
    return (
      <View style={{marginTop: 10}}>
        <SliderBox images={this.state.images} autoplay circleLoop />
      </View>
    );
  }
}
