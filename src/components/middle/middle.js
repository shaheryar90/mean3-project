/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default class Middle extends Component {
  render() {
    return (
      <View style={{marginTop: 5}}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Categories')}>
          <Text style={styles.Text2}>Categories</Text>
        </TouchableOpacity>
        <View style={styles.View2}>
          <ScrollView
            horizontal={true}
            showHorizontalScrollView={false}
            showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Categories')}
              style={styles.View}>
              <Image
                source={{
                  uri:
                    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/amazon-rivet-furniture-1533048038.jpg?crop=1.00xw:0.502xh;0,0.423xh&resize=1200:*',
                }}
                style={styles.Image2}
              />
              <Text>furniture</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Categories')}
              style={styles.View}>
              <Image
                source={{
                  uri:
                    'https://electrical-engineering-portal.com/wp-content/uploads/2015/08/7-key-steps-lighting-design-process.jpg',
                }}
                style={styles.Image2}
              />
              <Text>lighting</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Categories')}
              style={styles.View}>
              <Image
                source={{
                  uri:
                    'https://www.grundig.com/ktchnmag/wp-content/uploads/2017/03/GRUNDIG-KTCHN-MAG_What-Is-Kitchen-Design-1_Unsplash.jpg',
                }}
                style={styles.Image2}
              />
              <Text>Kitchen</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Categories')}
              style={styles.View}>
              <Image
                source={{
                  uri:
                    'https://www.yankodesign.com/images/design_news/2020/06/bedroom-designs/07-bedroom-Designs_Natural-Lighting_Berlin-HOuse-2.jpg',
                }}
                style={styles.Image2}
              />
              <Text>BedRoom</Text>
            </TouchableOpacity>
            <View style={styles.View}>
              <Image
                source={{
                  uri:
                    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/amazon-rivet-furniture-1533048038.jpg?crop=1.00xw:0.502xh;0,0.423xh&resize=1200:*',
                }}
                style={styles.Image2}
              />
              <Text>OutDoor</Text>
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Categories')}
              style={styles.View}>
              <Image
                source={{
                  uri:
                    'https://www.yankodesign.com/images/design_news/2020/06/bedroom-designs/07-bedroom-Designs_Natural-Lighting_Berlin-HOuse-2.jpg',
                }}
                style={styles.Image2}
              />
              <Text>BedRoom</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Categories')}
              style={styles.View}>
              <Image
                source={{
                  uri:
                    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/amazon-rivet-furniture-1533048038.jpg?crop=1.00xw:0.502xh;0,0.423xh&resize=1200:*',
                }}
                style={styles.Image2}
              />
              <Text>OutDoor</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  View: {
    marginRight: 10,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text2: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 8,
  },
  View2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
  },
  Image2: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
});
