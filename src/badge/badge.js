import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

class Badge extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('badge', this.props.cardCount);
  }
  render() {
    return (
      <View style={styles.badge}>
        {/* <Text style={{color: 'red'}}>{this.props.cardNumber}</Text> */}
        <Text style={{color: 'red'}}>{this.props.cardCount}</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    cardNumber: state.root.cardNumber,
  };
}

export default connect(mapStateToProps, null)(Badge);

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    right: 8,
    top: 1,
    backgroundColor: 'white',
    borderRadius: 9,
    width: 12,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
