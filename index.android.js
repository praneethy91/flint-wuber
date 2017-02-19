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

class flintWuberApp extends Component {
  render() {
    const { region } = this.props;
    console.log(region);
    return (
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

AppRegistry.registerComponent('flintWuberApp', () => flintWuberApp);
