import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Image, Text, View } from 'react-native';
import MapView from 'react-native-maps'

const styles = StyleSheet.create({
 container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
      alignItems: 'center',
 },
 map: {
  ...StyleSheet.absoluteFillObject,
 },
});

class flint-wuber extends Component {
  render() {
    const { region } = this.props;
    console.log(region);
    let pic = {
      uri: 'http://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-8.jpg'
    };
    return (
      /*<View>
        <Text>Hello World!</Text>
        <Image source={pic} style={{ width: 193, height: 110 }} />
      </View>*/
      <View style ={styles.container}>
       <MapView
         style={styles.map}
         region={{
           latitude: 43.0125,
           longitude: -83.6875,
           latitudeDelta: 0.015,
           longitudeDelta: 0.0121,
         }}
       >
       </MapView>
     </View>
    );
  }
}

AppRegistry.registerComponent('flint-wuber', () => flint-wuber);
