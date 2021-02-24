import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
  SafeAreaView,
  Image,
} from 'react-native';
import Header from '../../header/header';
import Icon from 'react-native-vector-icons/Ionicons';
import GetScreenWidth from '../../dimension/width';

// const renderSerperator = () => {
//   return <View style={styles.VerticalLine} />;
// };

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    url:
      'https://secure.img1-fg.wfcdn.com/im/10552943/resize-h600-w600%5Ecompr-r85/5877/58778971/Chambord+Adjustable+Height+Swivel+Bar+Stool.jpg',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    url:
      'https://cdn.shopify.com/s/files/1/0429/7654/2881/products/3a_large.jpg?v=1604044208',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    url:
      'https://cdn.shopify.com/s/files/1/0429/7654/2881/products/sigma_coffee_table_1_large.jpg?v=1596024917',
  },
];
class DataListUsage extends Component {
  constructor() {
    super();
  }

  Item = ({item}) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.cartContainer}>
          <View style={styles.imageView}>
            <Image style={styles.image} source={{uri: item.url}} />
          </View>
          <View style={styles.textView}>
            <View style={styles.textContentView}>
              <View style={styles.habitTextView}>
                <Text style={styles.habitText}>Habitt</Text>
                <Text style={styles.LaurelPersonText}>Laurel Person Table</Text>
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
      </View>
    );
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <Header navigation={this.props.navigation} showArrow={true} />
        <View style={styles.container}>
          <Text style={styles.profileText}>DataList Usage</Text>
        </View>

        <SafeAreaView style={styles.ViewBlock}>
          <FlatList
            data={DATA}
            renderItem={this.Item}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
        {/* <Item /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'red',
    width: '140%',
    height: 300,
    borderBottomLeftRadius: 600,
    borderBottomRightRadius: 600,
    // position: 'absolute',
    top: -100,
    marginBottom: -10,
  },
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
    width: GetScreenWidth(90),
  },
  checkOutContentView1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: GetScreenWidth(90),
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
    width: GetScreenWidth(80),
    // marginHorizontal: 20,
  },
  couponView: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: GetScreenWidth(95),
    paddingLeft: 10,
    paddingRight: 10,
  },
  checkOutView: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    marginBottom: 10,
    // flexDirection: 'row',
    justifyContent: 'space-between',
    width: GetScreenWidth(95),
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
  profileText: {
    fontSize: 40,
    color: 'white',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  ViewBlock: {
    flex: 1,
  },
});
export default DataListUsage;
