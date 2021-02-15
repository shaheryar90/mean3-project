import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

class Badge extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.badge}>
        <Text style={{color: 'red'}}>{this.props.cardNumber}</Text>
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
    right: 14,
    top: 2,
    backgroundColor: 'white',
    borderRadius: 9,
    width: 12,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
