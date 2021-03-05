import {StyleSheet, Text, View, Alert, TextInput} from 'react-native';
import React from 'react';
export default class UsageArray extends React.Component {
  SampleFunction = (item) => {
    Alert.alert(item);
    // console.log(key);
  };

  render() {
    var SampleNameArray = [
      'Pankaj',
      'Rita',
      'Mohan',
      'Amit',
      'Babulal',
      'Sakshi',
    ];
    // const numbers = [1, 2, 3, 4, 5];
    // const doubled = numbers.map((number) => number * 2);
    // console.log(doubled);
    // const numbers = [1, 2, 3, 4, 5];
    // const listItems = numbers.map((number) => <li>{number}</li>);
    // console.log(listItems);
    const form = ['First Name', 'Last Name', 'Phone', 'Email', 'Etc'];
    const names = ['James', 'John', 'Paul', 'Ringo', 'George'];
    //concat
    const combine = form.concat(names);
    console.log(combine);
    //copywithin
    var fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
    const a = fruits.copyWithin(2, 0);
    console.log(a);
    var ages = [32, 33, 16, 40];

    return (
      <>
        {/* const textInputComponents = */}
        {/* {form.map((type) => (
          <TextInput placeholder={type} />
        ))} */}
        {/* 
        <View>
          {names
            .filter((name) => name.includes('J'))
            .map((filteredName) => (
              <Text>{filteredName}</Text>
            ))}
        </View> */}
        <View style={styles.MainContainer}>
          {SampleNameArray.map((item, key) => (
            <Text
              key={key}
              style={styles.TextStyle}
              onPress={this.SampleFunction.bind(this, item)}>
              {item}
            </Text>
          ))}
        </View>
        <View>
          {ages
            .filter((age) => age > 18)
            .map((age) => (
              <>
                <Text>{age}</Text>
              </>
            ))}
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    margin: 10,
  },

  TextStyle: {
    fontSize: 25,
    textAlign: 'center',
  },
});
