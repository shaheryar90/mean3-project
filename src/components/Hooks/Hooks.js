import React, {Component, useState, useEffect} from 'react';
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
import Header from '../../header/header';
import Icon from 'react-native-vector-icons/Ionicons';

// const renderSerperator = () => {
//   return <View style={styles.VerticalLine} />;
// };

function HooksUsage(props) {
  //   const [message, setMessage] = useState('');

  const imageuri = [
    'https://secure.img1-fg.wfcdn.com/im/27231273/compr-r85/4411/44115433/carolyn-coffee-table-with-storage.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFIHy5Jcd7t494ynIacbu3tFunA2T1xvdf8A&usqp=CAU',
    'https://www.apnafurniture.pk/wp-content/uploads/2020/11/Luke-High-Back-Executive-Office-Chair.jpg',
  ];
  const [count, setCount] = useState(0);
  let [image, selectedImage] = useState(0);
  useEffect(() => {
    setInterval(() => {
      if (image <= 2) {
        console.warn(image);
        selectedImage(image++);
      }
      if (image >= 3) {
        console.warn(image);
        selectedImage(0);
      }
    }, 2000);

    // Update the document title using the browser API
  }, [image]);
  return (
    <>
      <View style={{flex: 1}}>
        <Header navigation={props.navigation} showArrow={true} />
        {/* <View>
          <TextInput
            type="text"
            value={message}
            placeholder="Enter some letters"
            onChangeText={(e) => {
              setMessage(e);
            }}
          />
        </View>
        <View>
          <Text>{message}</Text>
        </View> */}

        <View>
          <Image
            style={{height: 400, width: 400}}
            source={{uri: imageuri[image]}}
          />
        </View>
      </View>
    </>
  );
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
  profileText: {
    fontSize: 40,
    color: 'white',
  },
});
export default HooksUsage;
