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

import {NavigationContainer, CommonActions} from '@react-navigation/native';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <View style={styles.RegisterContainer}>
        <Header title="My Cart" navigation={this.props.navigation} />
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'lightgray',
            justifyContent: 'center',
            alignItems: 'center',
            height: 50,
            padding: 5,
          }}>
          <View style={{flex: 4}}>
            <Text style={{fontSize: 15}}>ITEMS (2)</Text>
          </View>

          <View style={{flex: 2, marginLeft: 70}}>
            <Text>TOTAL: RS.250</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View>
            <Image
              style={{width: 150, height: 150}}
              source={{
                uri:
                  'https://cdn.shopify.com/s/files/1/0429/7654/2881/products/dirg15aaa180800_1._large.jpg?v=1596024287',
              }}
            />
          </View>

          <View>
            <Text>Table</Text>
            <Text>Size:Medium </Text>
            <View style={{flexDirection: 'row', height: 15}}>
              <View style={{marginTop: 10}}>
                <Text style={{fontSize: 15}}>Qty: </Text>
              </View>
              <View>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'red',
                    padding: 2,
                  }}>
                  <Text>S</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  RegisterView: {
    backgroundColor: 'white',
    borderWidth: 2,
    padding: 30,
    borderRadius: 20,
    borderColor: 'red',
    // elevation: 4,
    justifyContent: 'center',
    marginTop: 100,
  },
});
export default Categories;
