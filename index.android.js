import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Image, Text, View, Button, Alert, TextInput } from 'react-native';
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
 container: {
    ...StyleSheet.absoluteFillObject,
    height: 540,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
 },
 map: {
    ...StyleSheet.absoluteFillObject,
 }
});

class flintWuberApp extends Component {
  render() {
    const { region } = this.props;
    console.log(region);
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column'
      }}>
        <MapView
          style={styles.container}
          region={{
            latitude: 43.0125,
            longitude: -83.6875,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        </MapView>
        <View style={{marginTop: 540}}>
          <SubmitUserPreferenceButton />
        </View>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{marginLeft: 5, color: "white", backgroundColor:"#141584"}}>
              Water(oz)
            </Text>
            <WaterTextInput/>
            <Text style={{marginLeft: 100, color: "white", backgroundColor:"#141584"}}>
              Radius(miles)
            </Text>
            <RadiusTextInput/>
          </View>
        </View>
     </View>
    );
  }
}

class SubmitUserPreferenceButton extends Component {
  _onPressButton() {
    Alert.alert('Button has been pressed!');
  }

  render() {
    return (
      <Button
        onPress={this._onPressButton}
        title="Submit"
        color="#841584"
        accessibilityLabel="Submit your water preferences">
      </Button>
    );
  }
}

class WaterTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '5' };
  }

  render() {
    return (
      <TextInput
        style={{height: 40, width: 40, borderColor: 'gray', borderWidth: 1, marginLeft: 10}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        underlineColorAndroid="transparent"
      />
    );
  }
}

class RadiusTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '10' };
  }

  render() {
    return (
      <TextInput
        style={{height: 40, width: 40, borderColor: 'gray', borderWidth: 1, marginLeft: 10}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        underlineColorAndroid="transparent"
      />
    );
  }
}

AppRegistry.registerComponent('flintWuberApp', () => flintWuberApp);
