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
import Header from '../../header/header';

export default class Furniture extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container1}>
        <View>
          <Header
            showSearch={true}
            showCart={true}
            showArrow={true}
            title="Categories"
            navigation={this.props.navigation}
            // cartNumber={this.state.cartNumber}
          />
        </View>
        <ScrollView style={{flex: 1}}>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View style={{width: 190, borderColor: 'lightgrey'}}>
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
            </View>
            <View style={{width: 190, borderColor: 'lightgrey'}}>
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
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View style={{width: 190, borderColor: 'lightgrey'}}>
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
            </View>
            <View style={{width: 190, borderColor: 'lightgrey'}}>
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
            </View>
          </View>

          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View style={{width: 190, borderColor: 'lightgrey'}}>
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
            </View>
            <View style={{width: 190, borderColor: 'lightgrey'}}>
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
            </View>
          </View>
        </ScrollView>
        {/* <ScrollView
          horizontal={true}
          showHorizontalScrollView={false}
          showsHorizontalScrollIndicator={false}></ScrollView> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container1: {
    // paddingTop: 10,
    // marginTop: 5,
    flex: 1,
  },
  View20: {
    backgroundColor: 'brown',
    width: 20,
    height: 20,
    borderRadius: 25,
    marginRight: 5,
    borderColor: 'red',
  },
  View19: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    width: 120,
    marginTop: 10,
    paddingLeft: 5,
  },
  View26: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
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
  View23: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 120,
    marginTop: 10,
  },

  view2: {
    marginLeft: 10,
    // marginRight: 10,
  },
  view3: {
    borderWidth: 1,
    borderColor: 'gray',
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
});
