/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Header from '../../header/header';
import GetScreenWidth from '../../dimension/width';
import Accordion from 'react-native-collapsible/Accordion';
import Icon from 'react-native-vector-icons/Ionicons';

class Order extends Component {
  constructor() {
    super();
    this.state = {
      activeBillingSections: [],
      activeShippingSections: [],
    };
  }

  // _renderSectionTitle = (section) => {
  //   return (
  //     <View style={styles.content}>
  //       <Text>pakistan</Text>
  //     </View>
  //   );
  // };

  _renderShippingHeader = (section) => {
    return (
      <>
        <View style={styles.billingView}>
          <Text style={styles.billingText}>Shipping Address</Text>
          <Icon
            style={styles.icon}
            name="chevron-down"
            size={25}
            color="white"
          />
        </View>
      </>
    );
  };
  _renderBillingHeader = (section) => {
    return (
      <>
        <View style={styles.billingView}>
          <Text style={styles.billingText}>Billing Address</Text>
          <Icon
            style={styles.icon}
            name="chevron-down"
            size={25}
            color="white"
          />
        </View>
      </>
    );
  };

  _renderShippingContent = (section) => {
    return (
      <View style={styles.shippingProfileView}>
        <Text>Fulfillment Status: Unfulfilled</Text>
        <Text>Zain Rehman</Text>
        <Text style={styles.shippingProfileText}>
          House no: B-742 sector 11-A North Karachi
        </Text>
        <Text>pakistan</Text>
        <Text>78550</Text>
        <Text>0334 3183649</Text>
      </View>
    );
  };

  _renderBillingContent = (section) => {
    return (
      <View style={styles.billingProfileView}>
        <Text>Fulfillment Status: Unfulfilled</Text>
        <Text>Zain Rehman</Text>
        <Text style={styles.billingProfileText}>
          House no: B-742 sector 11-A North Karachi
        </Text>
        <Text>pakistan</Text>
        <Text>78550</Text>
        <Text>0334 3183649</Text>
      </View>
    );
  };

  _updateShippingSections = (activeShippingSections) => {
    this.setState({activeShippingSections});
  };
  _updateBillingSections = (activeBillingSections) => {
    this.setState({activeBillingSections});
  };

  render() {
    const SECTIONS = [
      {
        title: 'First',
        content: 'Lorem ipsum...',
      },
    ];

    return (
      <>
        <View style={styles.container}>
          <Header
            title="Order Details"
            // showMenu={true}
            // showSearch={true}
            showArrow={true}
            showCart={true}
            navigation={this.props.navigation}
          />
          <ScrollView>
            <View style={styles.maincontainerView}>
              <View style={styles.orderView}>
                <View style={styles.orderNumberView}>
                  <Text style={styles.cardText}>Order #2851</Text>
                </View>
                <View style={styles.dateView}>
                  <Text style={styles.cardContentText}>January 20 ,2021</Text>
                </View>
              </View>
              <View style={styles.orderStatusView}>
                <Text style={styles.orderStatusText}>
                  Order Status : Cancelled
                </Text>
              </View>

              <View style={styles.cardView}>
                <View style={styles.cardContentView}>
                  <Text style={styles.cardText}>Laurel Person Table</Text>
                  <Text style={styles.cardContentText}>KIRZAAA2020</Text>
                  <Text style={styles.cardContentText}>price</Text>
                </View>
                <View style={styles.cardContentView2}>
                  <Text style={styles.cardContentText}>x1</Text>
                  <Text style={styles.cardContentText}></Text>
                  <Text style={styles.cardText}>$39,00.00</Text>
                </View>
              </View>
              <View style={styles.cardView}>
                <View style={styles.cardContentView}>
                  <Text style={styles.cardText}>Arlo chair Patrick</Text>
                  <Text style={styles.cardContentText}>KIRZAAA2020</Text>
                  <Text style={styles.cardContentText}>price</Text>
                </View>
                <View style={styles.cardContentView2}>
                  <Text style={styles.cardContentText}>x2</Text>
                  <Text style={styles.cardContentText}></Text>
                  <Text style={styles.cardText}>$42,00.00</Text>
                </View>
              </View>
              <View style={styles.cardView}>
                <View style={styles.cardContentView}>
                  <Text style={styles.cardText}>Arlo chair Patrick</Text>
                  <Text style={styles.cardContentText}>KIRZAAA2020</Text>
                  <Text style={styles.cardContentText}>price</Text>
                </View>
                <View style={styles.cardContentView2}>
                  <Text style={styles.cardContentText}>x1</Text>
                  <Text style={styles.cardContentText}></Text>
                  <Text style={styles.cardText}>$42,00.00</Text>
                </View>
              </View>

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

              <View style={styles.accordian1}>
                <Accordion
                  sections={SECTIONS}
                  activeSections={this.state.activeBillingSections}
                  // renderSectionTitle={this._renderSectionTitle}
                  renderHeader={this._renderBillingHeader}
                  renderContent={this._renderBillingContent}
                  onChange={this._updateBillingSections}
                />
              </View>

              <View style={styles.accordian}>
                <Accordion
                  sections={SECTIONS}
                  activeSections={this.state.activeShippingSections}
                  // renderSectionTitle={this._renderSectionTitle}
                  renderHeader={this._renderShippingHeader}
                  renderContent={this._renderShippingContent}
                  onChange={this._updateShippingSections}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cartTotalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  orderStatusView: {
    flexWrap: 'wrap',
    marginTop: 5,
  },
  orderStatusText: {
    color: 'white',

    fontSize: 15,

    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  accordian1: {
    marginTop: 20,
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
  shippingProfileView: {
    backgroundColor: 'whitesmoke',
    padding: 10,
  },
  shippingProfileText: {
    marginTop: 5,
  },
  billingProfileView: {
    backgroundColor: 'whitesmoke',
    padding: 10,
  },
  billingProfileText: {
    marginTop: 5,
  },

  cardContentView: {
    flex: 4,
  },
  cardContentView2: {
    flex: 1,
  },
  billingText: {
    color: 'white',
    fontSize: 20,
  },
  accordian: {
    marginTop: 10,
  },
  billingView: {
    backgroundColor: 'red',
    padding: 5,
    flexDirection: 'row',
    width: GetScreenWidth(95),
    justifyContent: 'space-between',
  },

  orderView: {
    flexDirection: 'row',
    width: GetScreenWidth(95),
    justifyContent: 'space-between',
  },

  cardText: {
    color: 'red',
    fontWeight: 'bold',
  },

  maincontainerView: {
    margin: 10,
  },
  cardView: {
    width: '100%',
    borderColor: '#acacac',
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 10,
    padding: 10,
    flexDirection: 'row',
  },
  cardContentText: {
    color: 'grey',
    fontWeight: 'bold',
  },
});
export default Order;
