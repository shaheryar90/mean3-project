import {
  StyleSheet,
  Text,
  View,
  Alert,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
export default class FoodPandaPage extends React.Component {
  render() {
    return (
      <>
        <View style={styles.MainContainer}>
          <View style={styles.ContentContainer}>
            <View style={styles.TextView}>
              <Text style={styles.AfternoonText}>Good afternoon,</Text>
              <Text>Thinking of lunch? there are</Text>
              <Text>357 restaurant in your area</Text>
            </View>
            <View style={styles.ImageView}>
              <Image
                style={styles.BurgerImage1}
                source={{
                  uri: 'https://www.freeiconspng.com/uploads/food-salad-21.png',
                }}
              />
              <Image
                style={styles.BurgerImage2}
                source={{
                  uri:
                    'https://pngimage.net/wp-content/uploads/2018/06/restaurant-food-png-.png',
                }}
              />
            </View>
          </View>
          <View>
            <View style={styles.ContentContainer2}>
              <View style={styles.OrderTextView}>
                <Text style={styles.DelieveryText}>Food Delievery</Text>
                <Text style={{color: 'white'}}>Order food you love</Text>
                <TouchableOpacity style={styles.OrderButton}>
                  <Text style={styles.OrderText}>Order Now</Text>
                  <Icon
                    style={styles.Arrowicon}
                    name="arrow-forward"
                    size={20}
                    color="purple"
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.OrderViewImage}>
                <Image
                  style={styles.OrderImage}
                  source={{
                    uri:
                      'https://pngimage.net/wp-content/uploads/2018/06/restaurant-food-png-.png',
                  }}
                />
                <Image
                  style={styles.OrderImage1}
                  source={{
                    uri:
                      'https://pngimage.net/wp-content/uploads/2018/06/restaurant-food-png-.png',
                  }}
                />
                <Image
                  style={styles.OrderImage2}
                  source={{
                    uri:
                      'https://pngimage.net/wp-content/uploads/2018/06/restaurant-food-png-.png',
                  }}
                />
              </View>
            </View>
          </View>
          <View>
            <View>
              <Image
                style={styles.OrderImage}
                source={{
                  uri:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8PtkLb8Sa-u4SZCsy1X9Kj0pqt8m0oDsajA&usqp=CAU',
                }}
              />
            </View>
            <View></View>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  ContentContainer: {
    flexDirection: 'row',
  },
  AfternoonText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  DelieveryText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  OrderText: {
    fontSize: 15,
  },
  OrderImage1: {
    height: 80,
    width: 80,
    resizeMode: 'contain',
    // justifyContent: 'center',
    position: 'absolute',
    top: '-30%',
    left: '10%',
  },
  OrderImage2: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    // justifyContent: 'center',
    position: 'absolute',
    top: '-30%',
    right: '-15%',
  },
  OrderTextView: {
    width: '50%',
    padding: 20,
    paddingTop: 60,
  },
  OrderViewImage: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'center',
  },
  OrderImage: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
    // justifyContent: 'center',
    alignSelf: 'center',
    // justifyContent: 'center',
  },
  BurgerImage1: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    position: 'absolute',
    // left: '70%',
    top: '-40%',
    right: '-20%',
  },
  ContentContainer2: {
    backgroundColor: 'purple',
    margin: 20,
    borderRadius: 10,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  OrderButton: {
    backgroundColor: 'white',
    borderRadius: 10,
    // height: 40,
    // width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    padding: 10,
    width: 150,
    flexDirection: 'row',
    marginTop: 10,
    // marginHorizontal: 20,
  },
  Arrowicon: {
    marginLeft: 10,
  },
  BurgerImage2: {
    height: 90,
    width: 90,
    resizeMode: 'contain',
    // justifyContent: 'center',
    alignSelf: 'center',
    margin: 10,
  },
  TextView: {
    width: '60%',
    // backgroundColor: 'red',
    padding: 20,
  },
  ImageView: {
    width: '40%',
  },
});
