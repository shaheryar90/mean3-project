// import React, {Component} from 'react';
// import {Text, View, Button, StyleSheet, TouchableOpacity} from 'react-native';
// import Header from '../header/header';
// import AsyncStorage from '@react-native-community/async-storage';
// import axios from 'axios';

// const SaveData = () => {
//   const user = 'shaheryar';
//   AsyncStorage.setItem('user', user);
// };

// const displayData = async () => {
//   try {
//     const user = await AsyncStorage.getItem('user');
//     alert(user);
//   } catch (error) {
//     alert(error);
//   }
// };
// const getapiData = async () => {
//   const body = {
//     email: 'eve.holt@reqres.in',
//     password: 'cityslicka',
//   };
//   let resp = await axios
//     .post('https://reqres.in/api/login', body)
//     .then(function (resp) {
//       console.log(resp);
//       this.props.naviagtion.navigate('Home');
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// };

// // const displayData = async () => {
// //   try {
// //     const user = await AsyncStorage.getItem('');
// //     alert(user);
// //   } catch (error) {
// //     alert(error);
// //   }
// // };

// class Cart extends Component {
//   constructor() {
//     super();
//     this.state = {
//       data: [],
//     };
//   }

//   ComponentDidMount() {
//     this.getapiData();
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Header
//           title="Cart"
//           showCart={true}
//           showMenu={true}
//           showSearch={true}
//           navigation={this.props.navigation}
//         />
//         <Text>Cart</Text>
//         <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
//           <TouchableOpacity
//             onPress={SaveData}
//             style={{marginBottom: 20, backgroundColor: 'red', padding: 10}}>
//             <Text style={{fontSize: 17, color: 'white'}}>
//               Click me to save data
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={displayData}
//             style={{marginBottom: 20, backgroundColor: 'red', padding: 10}}>
//             <Text style={{fontSize: 17, color: 'white'}}>
//               Click me to get data
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
// });
// export default Cart;
import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import Header from '../header/header';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import GetScreenWidth from '../dimension/width';

import {NavigationContainer, CommonActions} from '@react-navigation/native';

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header title="My Cart" navigation={this.props.navigation} />
        <ScrollView style={{flex: 1}}>
          <View style={styles.mainContainer}>
            <View style={styles.cartContainer}>
              <View style={styles.imageView}>
                <Image
                  style={styles.image}
                  source={{
                    uri:
                      'https://secure.img1-fg.wfcdn.com/im/10552943/resize-h600-w600%5Ecompr-r85/5877/58778971/Chambord+Adjustable+Height+Swivel+Bar+Stool.jpg',
                  }}
                />
              </View>
              <View style={styles.textView}>
                <View style={styles.textContentView}>
                  <View style={styles.habitTextView}>
                    <Text style={styles.habitText}>Habitt</Text>
                    <Text style={styles.LaurelPersonText}>
                      Laurel Person Table
                    </Text>
                  </View>
                  <View style={styles.deleteIconView}>
                    <Icon
                      style={styles.icon}
                      name="trash-sharp"
                      size={18}
                      color="red"
                    />
                  </View>
                </View>
                <View style={styles.quantityContentView}>
                  <View style={styles.quantityView}>
                    <Text style={styles.quantityTextView}>Quantity</Text>
                  </View>
                  <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.quantityButton}>
                      <Icon
                        style={styles.icon}
                        name="md-remove-sharp"
                        size={15}
                        color="black"
                      />
                    </TouchableOpacity>

                    <Text style={styles.quantityText}>1</Text>

                    <TouchableOpacity style={styles.quantityButton}>
                      <Icon
                        style={styles.icon}
                        name="add"
                        size={15}
                        color="black"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.amountQuantityView}>
                  <View>
                    <Text style={styles.subTotalText}>Sub Total</Text>
                  </View>
                  <View>
                    <Text style={styles.amountText}>$ 42500</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.cartContainer}>
              <View style={styles.imageView}>
                <Image
                  style={styles.image}
                  source={{
                    uri:
                      'https://cdn.shopify.com/s/files/1/0429/7654/2881/products/3a_large.jpg?v=1604044208',
                  }}
                />
              </View>
              <View style={styles.textView}>
                <View style={styles.textContentView}>
                  <View style={styles.habitTextView}>
                    <Text style={styles.habitText}>Habitt</Text>
                    <Text style={styles.LaurelPersonText}>
                      Laurel Person Table
                    </Text>
                  </View>
                  <View style={styles.deleteIconView}>
                    <Icon
                      style={styles.icon}
                      name="trash-sharp"
                      size={18}
                      color="red"
                    />
                  </View>
                </View>
                <View style={styles.quantityContentView}>
                  <View style={styles.quantityView}>
                    <Text style={styles.quantityTextView}>Quantity</Text>
                  </View>
                  <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.quantityButton}>
                      <Icon
                        style={styles.icon}
                        name="md-remove-sharp"
                        size={15}
                        color="black"
                      />
                    </TouchableOpacity>

                    <Text style={styles.quantityText}>1</Text>

                    <TouchableOpacity style={styles.quantityButton}>
                      <Icon
                        style={styles.icon}
                        name="add"
                        size={15}
                        color="black"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.amountQuantityView}>
                  <View>
                    <Text style={styles.subTotalText}>Sub Total</Text>
                  </View>
                  <View>
                    <Text style={styles.amountText}>$ 42500</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.cartContainer}>
              <View style={styles.imageView}>
                <Image
                  style={styles.image}
                  source={{
                    uri:
                      'https://cdn.shopify.com/s/files/1/0429/7654/2881/products/sigma_coffee_table_1_large.jpg?v=1596024917',
                  }}
                />
              </View>
              <View style={styles.textView}>
                <View style={styles.textContentView}>
                  <View style={styles.habitTextView}>
                    <Text style={styles.habitText}>Habitt</Text>
                    <Text style={styles.LaurelPersonText}>
                      Laurel Person Table
                    </Text>
                  </View>
                  <View style={styles.deleteIconView}>
                    <Icon
                      style={styles.icon}
                      name="trash-sharp"
                      size={18}
                      color="red"
                    />
                  </View>
                </View>
                <View style={styles.quantityContentView}>
                  <View style={styles.quantityView}>
                    <Text style={styles.quantityTextView}>Quantity</Text>
                  </View>
                  <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.quantityButton}>
                      <Icon
                        style={styles.icon}
                        name="md-remove-sharp"
                        size={15}
                        color="black"
                      />
                    </TouchableOpacity>

                    <Text style={styles.quantityText}>1</Text>

                    <TouchableOpacity style={styles.quantityButton}>
                      <Icon
                        style={styles.icon}
                        name="add"
                        size={15}
                        color="black"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.amountQuantityView}>
                  <View>
                    <Text style={styles.subTotalText}>Sub Total</Text>
                  </View>
                  <View>
                    <Text style={styles.amountText}>$ 42500</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.couponView}>
              <View>
                <TextInput placeholder="Coupon Code" />
              </View>
              <View style={styles.couponButtonView}>
                <TouchableOpacity style={styles.couponButton}>
                  <Text style={styles.couponText}>Apply Code</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.checkOutView}>
              <View style={styles.cartTotalView}>
                <Text style={styles.cartTotalText}>Cart Totals</Text>
              </View>
              <View style={styles.checkOutContentView1}>
                <View style={styles.checkOut}>
                  <Text style={styles.checkOutText}>Sub Total</Text>
                </View>
                <View>
                  <Text style={styles.checkOutText}>$ 85,000</Text>
                </View>
              </View>
              <View style={styles.checkOutContentView}>
                <View style={styles.checkOut}>
                  <Text style={styles.checkOutText}>Discount</Text>
                </View>
                <View style={{paddingRight: 39}}>
                  <Text style={styles.checkOutText}>$ 0</Text>
                </View>
              </View>
              <View style={styles.checkOutContentView}>
                <View style={styles.checkOut}>
                  <Text style={styles.checkOutText1}>Total</Text>
                </View>
                <View>
                  <Text style={styles.checkOutText2}>$ 85,000</Text>
                </View>
              </View>
              <View style={styles.checkOutButtonView}>
                <TouchableOpacity style={styles.checkOutButton}>
                  <Text style={styles.checkOut4Text}>Check Out</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  cartContainer: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
  },
  checkOutText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'grey',
  },
  checkOutText1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'grey',
  },
  checkOutText2: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'red',
  },
  checkOutContentView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width: GetScreenWidth(90),
  },
  checkOutContentView1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width: GetScreenWidth(90),
    marginTop: 20,
  },
  couponButtonView: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginLeft: 10,
  },
  checkOutButtonView: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    // marginLeft: 10,
  },
  cartTotalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  couponText: {
    color: 'white',
    // fontSize: 40,
    fontWeight: 'bold',
  },
  checkOut4Text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  couponButton: {
    backgroundColor: 'red',
    borderRadius: 10,
    // height: 40,
    // width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    padding: 10,
    width: 180,
    // marginVertical: 20,
  },
  checkOutButton: {
    backgroundColor: 'red',
    borderRadius: 10,
    // height: 40,
    // width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    padding: 10,
    // width: GetScreenWidth(80),
    // marginHorizontal: 20,
  },
  couponView: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width: GetScreenWidth(95),
    paddingLeft: 10,
    paddingRight: 10,
  },
  checkOutView: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    marginBottom: 10,
    // flexDirection: 'row',
    justifyContent: 'space-between',
    // width: GetScreenWidth(95),
    paddingLeft: 10,
    paddingRight: 10,
    // height: 400,
    padding: 5,
  },
  amountText: {
    fontSize: 15,
    color: 'red',
    fontWeight: 'bold',
  },
  subTotalText: {
    fontSize: 15,
    color: 'grey',
    fontWeight: 'bold',
  },
  amountQuantityView: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 22,
    justifyContent: 'space-between',
    width: GetScreenWidth(50),
  },

  quantityButton: {
    // padding: 5,
    // alignSelf: 'stretch',
    // borderWidth: 1,
    width: 25,
    height: 25,
    backgroundColor: 'white',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  quantityText: {
    marginHorizontal: 5,
    marginVertical: 5,
    fontSize: 12,
  },
  buttonView: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
  },

  quantityContentView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: GetScreenWidth(50),
    marginLeft: 10,
    marginTop: 22,
  },
  LaurelPersonText: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 12,
  },
  image: {
    width: GetScreenWidth(35),
    height: 120,
  },
  mainContainer: {
    // borderWidth: 2,
    margin: 10,
    // marginHorizontal: 5,
  },
  habitText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 12,
  },
  textContentView: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    justifyContent: 'space-between',
    width: GetScreenWidth(50),
    marginLeft: 10,
    // flex: 1,
  },
  quantityTextView: {
    fontSize: 12,
    color: 'grey',
    fontWeight: 'bold',
  },
});
export default Cart;
