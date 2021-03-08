import {
  StyleSheet,
  Text,
  View,
  Alert,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
export default class FoodOrderPage extends React.Component {
  render() {
    return (
      <>
        <ImageBackground
          style={{flex: 1}}
          opacity={0.2}
          source={{
            uri:
              'http://www.culinarytechcenter.edu/pro4/wp-content/uploads/2019/01/44465417-stock-vector-food-and-drink-outline-seamless-pattern-hand-drawn-kitchen-background-in-black-and-white-vector-illu.jpg',
          }}>
          <View style={styles.MainContainer}>
            <ScrollView style={{flex: 1}}>
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
                      uri:
                        'https://www.freeiconspng.com/uploads/food-salad-21.png',
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
                    <Text style={styles.SimilarStylingText}>
                      Order food you love
                    </Text>
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
              <View style={styles.ShoppingView}>
                <View style={styles.ShoppingBagView}>
                  <Image
                    style={styles.OrderImage}
                    source={require('../../Images/shoppingBag.png')}
                  />
                  <View style={styles.ShoppingTextView}>
                    <Text style={styles.ShoppingText}>Pandamart</Text>
                    <Text style={styles.SimilarStylingText}>Grocery & </Text>
                    <Text style={styles.SimilarStylingText}>
                      EveryDay Essential
                    </Text>
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
                </View>
                <View style={styles.ShoppingBagView}>
                  <Image
                    style={styles.OrderImage}
                    source={require('../../Images/shoppingBag.png')}
                  />
                  <View style={styles.ShoppingTextView}>
                    <Text style={styles.ShoppingText}>Pandamart</Text>
                    <Text style={styles.SimilarStylingText}>Grocery & </Text>
                    <Text style={styles.SimilarStylingText}>
                      EveryDay Essential
                    </Text>
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
                </View>
              </View>
            </ScrollView>
          </View>
        </ImageBackground>
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
  ShoppingTextView: {
    padding: 15,
  },
  SimilarStylingText: {
    color: 'white',
  },
  ShoppingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    // marginLeft: '15%',
    // marginTop: 10,
  },
  DelieveryText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  OrderText: {
    fontSize: 15,
  },
  ShoppingBagView: {
    backgroundColor: '#9fb5d1',
    // borderWidth: 1
    // margin: 20,
    borderRadius: 10,
    width: '48%',
  },
  ShoppingView: {
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'space-between',
    // alignItem: 'space-between',
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
    height: 130,
    width: 130,
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
    borderRadius: 20,
    // height: 40,
    // width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    padding: 10,
    width: 130,
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
