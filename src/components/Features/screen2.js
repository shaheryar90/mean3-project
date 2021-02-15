/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../header/header';
// import * as changeCount from '../redux/action/count';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {cartNumberCount} from '../../store/action/action';

class Screen2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColor: 'brown',
      selectedSize: 'Small',
      selectedImage:
        'https://cdn.shopify.com/s/files/1/0429/7654/2881/products/hx0a9708_1024x1024.jpg?v=1596024862',
    };
    // console.log(changeCount);
  }
  Count() {
    const {cardNumber} = this.props;
    this.props.addCartNum(cardNumber + 1);
  }

  render() {
    const {cardNumber} = this.props;

    return (
      <View style={{flex: 1, marginBottom: 30}}>
        <View>
          <Header
            showCart={true}
            title="Product"
            navigation={this.props.navigation}
          />
        </View>

        <ScrollView>
          <View>
            <Image
              source={{
                uri: this.state.selectedImage,
              }}
              style={{width: '100%', height: 300}}
            />
          </View>

          <View style={{marginTop: 30, marginLeft: 20}}>
            <Text style={{fontSize: 20, color: 'red'}}>Habitt</Text>
          </View>
          <View style={{marginTop: 10, marginLeft: 20}}>
            <Text style={{fontSize: 15}}>Arlo Chair Patrick</Text>
          </View>

          <View style={{marginTop: 10, marginLeft: 20}}>
            <Text style={{fontSize: 20, marginTop: 10}}>Color:</Text>
          </View>
          <View style={styles.View4}>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  selectedColor: 'brown',
                  selectedImage:
                    'https://cdn.shopify.com/s/files/1/0429/7654/2881/products/hx0a9708_1024x1024.jpg?v=1596024862',
                })
              }
              style={[
                styles.View30,
                {
                  borderWidth: this.state.selectedColor === 'brown' ? 5 : 0,
                },
              ]}></TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  selectedColor: 'black',
                  selectedImage:
                    'https://cdn.shopify.com/s/files/1/0429/7654/2881/products/34371324-0-a_grande.jpg?v=1596024182',
                })
              }
              style={[
                styles.View31,
                {
                  borderWidth: this.state.selectedColor === 'black' ? 5 : 0,
                },
              ]}
            />
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  selectedColor: 'gray',
                  selectedImage:
                    'https://cdn.goto.com.pk/uploads/products/2019/11/470x470/5dbc2843a2a5a.jpg',
                })
              }
              style={[
                styles.View32,
                {
                  borderWidth: this.state.selectedColor === 'gray' ? 5 : 0,
                },
              ]}></TouchableOpacity>
          </View>

          <View style={{marginTop: 10, marginLeft: 20}}>
            <Text style={{fontSize: 20, marginTop: 10}}>Size:</Text>
          </View>
          <View style={styles.View25}>
            <TouchableOpacity
              onPress={() => this.setState({selectedSize: 'S'})}
              style={[
                styles.button1,
                {
                  backgroundColor:
                    this.state.selectedSize === 'S' ? 'red' : '#c0c0c0',
                },
              ]}>
              <Text style={{color: 'white', fontSize: 15}}>Small</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({selectedSize: 'Small'})}
              style={[
                styles.button1,
                {
                  backgroundColor:
                    this.state.selectedSize === 'Small' ? 'red' : '#c0c0c0',
                },
              ]}>
              <Text style={{color: 'white', fontSize: 15}}>Medium</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({selectedSize: 'large'})}
              style={[
                styles.button1,
                {
                  backgroundColor:
                    this.state.selectedSize === 'large' ? 'red' : '#c0c0c0',
                },
              ]}>
              <Text style={{color: 'white', fontSize: 15}}>large</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 10, marginLeft: 20}}>
            <Text style={{fontSize: 20, marginTop: 10}}>Price:</Text>
          </View>
          <View style={styles.View24}>
            <View style={{marginLeft: 20, marginTop: 10}}>
              <Text style={{color: 'red', fontWeight: 'bold', fontSize: 20}}>
                $ 39000.00
              </Text>
            </View>
          </View>
          <View style={styles.View1}>
            <TouchableOpacity
              style={styles.Button}
              onPress={() => this.Count()}>
              <Text style={{color: 'white', fontSize: 17}}>Add To Cart</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.View1}>
            <TouchableOpacity style={styles.Button}>
              <Text style={{color: 'white', fontSize: 17}}>Buy Now</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text>{cardNumber}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    cardNumber: state.root.cardNumber,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    addCartNum: (num) => {
      dispatch(cartNumberCount(num));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen2);
const styles = StyleSheet.create({
  View30: {
    backgroundColor: 'brown',
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 5,
    marginLeft: 20,
    borderColor: 'red',
  },
  View31: {
    backgroundColor: 'black',
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 5,
    borderColor: 'red',
  },
  button1: {
    marginRight: 5,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 5,
    // alignSelf: 'stretch',
    width: 70,
    height: 40,
    borderRadius: 5,
  },
  View32: {
    backgroundColor: 'gray',
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 5,
    borderColor: 'red',
  },
  View4: {
    flexDirection: 'row',
    marginTop: 4,
    paddingLeft: 5,
  },
  View25: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 20,
  },
  View24: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  View1: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
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
});
