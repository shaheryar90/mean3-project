/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import Header from '../header/header';
import Slider from '../components/Slider/slider';
import Middle from '../components/middle/middle';
import Features from '../components/Features/features';
import Slider1 from '../components/slider1/slider1';
import {ScrollView} from 'react-native-gesture-handler';
import Last from '../components/last section/last';
import SliderModal from '../components/Slider/sliderModal';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ModalVisible: false,
    };
  }

  handleModalVisible = () => {
    this.setState({ModalVisible: true});
  };
  unhandleModalVisible = () => {
    this.setState({ModalVisible: false});
  };

  render() {
    return (
      <>
        {this.state.ModalVisible ? (
          <SliderModal
            navigation={this.props.navigation}
            unshowModal={this.unhandleModalVisible}
          />
        ) : null}
        <View style={styles.container}>
          <Header
            title="My home"
            showSearch={true}
            showMenu={true}
            showBack={true}
            showCart={true}
            navigation={this.props.navigation}
          />
          <ScrollView>
            <Slider showModal={this.handleModalVisible} />
            <Middle />
            <Features />
            <Slider1 />
            <Last />
          </ScrollView>
          {/* <Button onClick={this.handleClick}>Click Me</Button>; */}
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  Text2: {
    paddingTop: 300,
    fontSize: 30,
  },
});
export default Home;
