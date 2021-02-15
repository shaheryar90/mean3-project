import React, {Component} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';

export default class SliderModal extends Component {
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
  // other component code ...

  render() {
    return (
      <View>
        <Modal isVisible={true}>
          <TouchableOpacity onPress={this.props.unshowModal}>
            <Icon
              style={styles.icon}
              name="close-sharp"
              size={20}
              color="white"
            />
          </TouchableOpacity>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              alignItems: 'center',
              marginTop: 200,
            }}>
            <SliderBox
              sliderBoxHeight={300}
              images={this.state.images}
              //   autoplay
              //   circleLoop
            />
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
