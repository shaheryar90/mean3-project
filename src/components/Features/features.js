/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Features extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container1}>
        <View>
          <Text style={styles.Text1}>Features Product</Text>
        </View>
        <ScrollView
          horizontal={true}
          showHorizontalScrollView={false}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.container2}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Screen1')}
              style={styles.view2}>
              <View style={styles.view3}>
                <ImageBackground
                  source={{
                    uri:
                      'https://secure.img1-fg.wfcdn.com/im/27231273/compr-r85/4411/44115433/carolyn-coffee-table-with-storage.jpg',
                  }}
                  style={styles.Image3}>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 5,
                      marginRight: 5,
                    }}>
                    <View style={{marginLeft: 140}} />
                    <View style={{width: 50}}>
                      <TouchableOpacity
                        style={{
                          color: 'red',
                          backgroundColor: 'red',
                          width: 30,
                          height: 20,
                          borderRadius: 2,
                        }}>
                        <Text
                          style={{
                            fontSize: 10,
                            color: 'white',
                            marginTop: 3,
                            marginLeft: 3,
                          }}>
                          SALE
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row', marginTop: 50}}>
                    <View style={{marginLeft: 10}}>
                      <Icon
                        style={styles.icon}
                        name="heart-outline"
                        size={20}
                        color="red"
                      />
                    </View>
                    <View style={{flex: 5}}>
                      <Icon
                        style={styles.icon}
                        name="cart"
                        size={20}
                        color="red"
                      />
                    </View>
                    <View style={{flex: 1}}>
                      <Text>4.5</Text>
                    </View>
                    <View style={{flex: 1}}>
                      <Icon
                        style={styles.icon}
                        name="star"
                        size={18}
                        color="yellow"
                      />
                    </View>
                  </View>
                </ImageBackground>
                <Text style={styles.Text2}>Habitt</Text>
                <Text style={styles.Text22}>Laurel Person Table</Text>

                <View style={styles.View4}>
                  <View style={styles.View20} />
                  <View style={styles.View21} />
                  <View style={styles.View22} />
                </View>

                <View style={styles.View19}>
                  <View style={styles.SizeButton}>
                    <Text style={{color: 'white'}}>S</Text>
                  </View>
                  <View style={styles.SizeButton}>
                    <Text style={{color: 'white'}}>M</Text>
                  </View>
                  <View style={styles.SizeButton}>
                    <Text style={{color: 'white'}}>L</Text>
                  </View>
                </View>
                <View style={styles.View26}>
                  <View>
                    <Text style={styles.Text24}>$ 500.00</Text>
                  </View>
                  <View>
                    <Text style={styles.Text21}>$ 39000.00</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Screen2')}
              style={styles.view2}>
              <View style={styles.View27}>
                <ImageBackground
                  source={{
                    uri:
                      'https://cdn.shopify.com/s/files/1/0429/7654/2881/products/34371324-0-a_grande.jpg?v=1596024182',
                  }}
                  style={styles.Image3}>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 5,
                      marginRight: 5,
                    }}>
                    <View style={{marginLeft: 140}} />
                    <View style={{width: 50}}>
                      <TouchableOpacity
                        style={{
                          color: 'red',
                          backgroundColor: 'red',
                          width: 30,
                          height: 20,
                          borderRadius: 2,
                        }}>
                        <Text
                          style={{
                            fontSize: 10,
                            color: 'white',
                            marginTop: 3,
                            marginLeft: 3,
                          }}>
                          SALE
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row', marginTop: 50}}>
                    <View style={{marginLeft: 10}}>
                      <Icon
                        style={styles.icon}
                        name="heart-outline"
                        size={20}
                        color="red"
                      />
                    </View>
                    <View style={{flex: 5}}>
                      <Icon
                        style={styles.icon}
                        name="cart"
                        size={20}
                        color="red"
                      />
                    </View>
                    <View style={{flex: 1}}>
                      <Text>4.5</Text>
                    </View>
                    <View style={{flex: 1}}>
                      <Icon
                        style={styles.icon}
                        name="star"
                        size={18}
                        color="yellow"
                      />
                    </View>
                  </View>
                </ImageBackground>
                <Text
                  style={{
                    color: 'red',
                    fontWeight: 'bold',
                    fontSize: 15,
                    paddingLeft: 5,
                  }}>
                  Habitt
                </Text>
                <Text
                  style={{
                    color: 'gray',
                    fontWeight: 'bold',
                    fontSize: 12,
                    paddingLeft: 5,
                  }}>
                  Arlo Chair Patrick
                </Text>

                <View
                  style={{flexDirection: 'row', marginTop: 4, paddingLeft: 5}}>
                  <View style={styles.View13} />
                  <View style={styles.View14} />
                  <View style={styles.View15} />
                </View>

                <View style={styles.View19}>
                  <View style={styles.SizeButton}>
                    <Text style={{color: 'white'}}>S</Text>
                  </View>
                  <View style={styles.SizeButton}>
                    <Text style={{color: 'white'}}>M</Text>
                  </View>
                  <View style={styles.SizeButton}>
                    <Text style={{color: 'white'}}>L</Text>
                  </View>
                </View>
                <View style={styles.View24}>
                  <View style={{marginLeft: 5}}>
                    <Text style={{color: 'red', fontWeight: 'bold'}}>
                      $ 39000.00
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Screen3')}>
              <View
                style={{borderWidth: 1, borderColor: 'gray', marginLeft: 10}}>
                <ImageBackground
                  source={{
                    uri:
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFIHy5Jcd7t494ynIacbu3tFunA2T1xvdf8A&usqp=CAU',
                  }}
                  style={styles.Image3}>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 5,
                      marginRight: 5,
                    }}>
                    <View style={{marginLeft: 140}} />
                    <View style={{width: 50}}>
                      <TouchableOpacity
                        style={{
                          color: 'red',
                          backgroundColor: 'red',
                          width: 30,
                          height: 20,
                          borderRadius: 2,
                        }}>
                        <Text
                          style={{
                            fontSize: 10,
                            color: 'white',
                            marginTop: 3,
                            marginLeft: 3,
                          }}>
                          SALE
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 50,
                    }}>
                    <View style={{marginLeft: 10}}>
                      <Icon
                        style={styles.icon}
                        name="heart-outline"
                        size={20}
                        color="red"
                      />
                    </View>
                    <View style={{flex: 5}}>
                      <Icon
                        style={styles.icon}
                        name="cart"
                        size={20}
                        color="red"
                      />
                    </View>
                    <View style={{flex: 1}}>
                      <Text>4.5</Text>
                    </View>
                    <View style={{flex: 1, paddingRight: 10}}>
                      <Icon
                        style={styles.icon}
                        name="star"
                        size={18}
                        color="yellow"
                      />
                    </View>
                  </View>
                </ImageBackground>
                <Text
                  style={{
                    color: 'red',
                    fontWeight: 'bold',
                    fontSize: 15,
                    paddingLeft: 5,
                  }}>
                  Habitt
                </Text>
                <Text
                  style={{
                    color: 'gray',
                    fontWeight: 'bold',
                    fontSize: 12,
                    paddingLeft: 5,
                  }}>
                  Sofa set
                </Text>

                <View
                  style={{flexDirection: 'row', marginTop: 4, paddingLeft: 5}}>
                  <View style={styles.View5} />
                  <View style={styles.View16} />
                  <View style={styles.View17} />
                </View>

                <View style={styles.View19}>
                  <View style={styles.SizeButton}>
                    <Text style={{color: 'white'}}>S</Text>
                  </View>
                  <View style={styles.SizeButton}>
                    <Text style={{color: 'white'}}>M</Text>
                  </View>
                  <View style={styles.SizeButton}>
                    <Text style={{color: 'white'}}>L</Text>
                  </View>
                </View>

                <View style={styles.View18}>
                  <View>
                    <Text style={styles.Text23}>$100,000.00</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Screen4')}>
              <View
                style={{borderWidth: 1, borderColor: 'gray', marginLeft: 10}}>
                <ImageBackground
                  source={{
                    uri: 'https://m.media-amazon.com/images/I/51feN5hlM3L.jpg',
                  }}
                  style={styles.Image3}>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 5,
                      marginRight: 5,
                    }}>
                    <View style={{marginLeft: 140}} />
                    <View style={{width: 50}}>
                      <TouchableOpacity
                        style={{
                          color: 'red',
                          backgroundColor: 'red',
                          width: 30,
                          height: 20,
                          borderRadius: 2,
                        }}>
                        <Text
                          style={{
                            fontSize: 10,
                            color: 'white',
                            marginTop: 3,
                            marginLeft: 3,
                          }}>
                          SALE
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 50,
                    }}>
                    <View style={{marginLeft: 10}}>
                      <Icon
                        style={styles.icon}
                        name="heart-outline"
                        size={20}
                        color="red"
                      />
                    </View>
                    <View style={{flex: 5}}>
                      <Icon
                        style={styles.icon}
                        name="cart"
                        size={20}
                        color="red"
                      />
                    </View>
                    <View style={{flex: 1}}>
                      <Text>4.5</Text>
                    </View>
                    <View style={{flex: 1, paddingRight: 10}}>
                      <Icon
                        style={styles.icon}
                        name="star"
                        size={18}
                        color="yellow"
                      />
                    </View>
                  </View>
                </ImageBackground>
                <Text
                  style={{
                    color: 'red',
                    fontWeight: 'bold',
                    fontSize: 15,
                    paddingLeft: 5,
                  }}>
                  Habitt
                </Text>
                <Text
                  style={{
                    color: 'gray',
                    fontWeight: 'bold',
                    fontSize: 12,
                    paddingLeft: 5,
                  }}>
                  Arlo Chair
                </Text>

                <View
                  style={{flexDirection: 'row', marginTop: 4, paddingLeft: 5}}>
                  <View style={styles.View5} />
                  <View style={styles.View16} />
                  <View style={styles.View17} />
                </View>

                <View style={styles.View19}>
                  <View style={styles.SizeButton}>
                    <Text style={{color: 'white'}}>S</Text>
                  </View>
                  <View style={styles.SizeButton}>
                    <Text style={{color: 'white'}}>M</Text>
                  </View>
                  <View style={styles.SizeButton}>
                    <Text style={{color: 'white'}}>L</Text>
                  </View>
                </View>
                <View style={styles.View18}>
                  <View>
                    <Text style={styles.Text23}>$200.00</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container1: {
    // paddingTop: 10,
    marginTop: 5,
  },
  SizeButton: {
    width: 20,
    height: 20,
    padding: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    marginRight: 10,
  },
  Text1: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 7,
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 5,
  },
  view2: {
    marginLeft: 10,
    // marginRight: 10,
  },
  view3: {
    borderWidth: 1,
    borderColor: 'gray',
  },
  Text2: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 15,
    paddingLeft: 5,
  },
  Image3: {
    width: 180,
    height: 100,
  },
  View4: {
    flexDirection: 'row',
    marginTop: 4,
    paddingLeft: 5,
  },
  View5: {
    backgroundColor: 'brown',
    width: 20,
    height: 20,
    borderRadius: 25,
    marginRight: 5,
  },
  View6: {
    backgroundColor: 'black',
    width: 20,
    height: 20,
    borderRadius: 25,
    marginRight: 5,
  },
  View7: {
    backgroundColor: 'blue',
    width: 20,
    height: 20,
    borderRadius: 25,
    marginRight: 5,
  },
  View8: {
    backgroundColor: 'gray',
    width: 20,
    height: 20,
    borderRadius: 25,
    marginRight: 5,
  },
  View9: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 120,
    marginTop: 10,
    paddingLeft: 5,
  },
  View10: {
    flexDirection: 'row',
    marginTop: 4,
    paddingLeft: 5,
  },
  View11: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  Text4: {
    color: 'red',
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  Text6: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 15,
    paddingLeft: 5,
  },
  Text7: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 12,
    paddingLeft: 5,
  },
  Image7: {
    width: 180,
    height: 100,
  },
  View13: {
    backgroundColor: 'brown',
    width: 20,
    height: 20,
    borderRadius: 25,
    marginRight: 5,
  },
  View14: {
    backgroundColor: 'black',
    width: 20,
    height: 20,
    borderRadius: 25,
    marginRight: 5,
  },
  View15: {
    backgroundColor: 'yellow',
    width: 20,
    height: 20,
    borderRadius: 25,
    marginRight: 5,
  },
  View16: {
    backgroundColor: 'black',
    width: 20,
    height: 20,
    borderRadius: 25,
    marginRight: 5,
  },
  View17: {
    backgroundColor: 'gray',
    width: 20,
    height: 20,
    borderRadius: 25,
    marginRight: 5,
  },
  View18: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  View19: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    width: 120,
    marginTop: 10,
    paddingLeft: 5,
  },
  View20: {
    backgroundColor: 'brown',
    width: 20,
    height: 20,
    borderRadius: 25,
    marginRight: 5,
    borderColor: 'red',
  },
  View21: {
    backgroundColor: 'black',
    width: 20,
    height: 20,
    borderRadius: 25,
    marginRight: 5,
  },
  View22: {
    backgroundColor: 'gray',
    width: 20,
    height: 20,
    borderRadius: 25,
    marginRight: 5,
  },
  View23: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 120,
    marginTop: 10,
  },
  Text21: {
    color: 'red',
    fontWeight: 'bold',
    paddingRight: 10,
  },
  View24: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  View25: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 120,
    marginTop: 10,
    paddingLeft: 5,
  },
  Text22: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 12,
    paddingLeft: 5,
  },
  Text23: {
    color: 'red',
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  View26: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  Text24: {
    textDecorationLine: 'line-through',
    paddingLeft: 5,
  },
  View27: {
    borderWidth: 1,
    borderColor: 'gray',
  },
  Button1: {
    width: 40,
  },
});
