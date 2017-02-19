import React, { Component } from 'react';
import { Dimensions, AppRegistry, StyleSheet, Image, Text, View, Button, Alert, TextInput } from 'react-native';
import MapView from 'react-native-maps';

const { width, height } = Dimensions.get('window');
const timeout = 1000;

const styles = StyleSheet.create({
 container: {
    ...StyleSheet.absoluteFillObject,
    height: 0.84 * height,
    width: width,
    justifyContent: 'flex-end',
    alignItems: 'center',
 },
 map: {
    ...StyleSheet.absoluteFillObject,
 }
});
const markerIDs = ['Marker1', 'Marker2', 'Marker3', 'Marker4', 'Marker5'];

const ASPECT_RATIO = width / height;

const LATITUDE = 43.0125;
const LONGITUDE = -83.6875;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

class flintWuberApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      a: {
        latitude: LATITUDE + SPACE,
        longitude: LONGITUDE + SPACE,
      },
      b: {
        latitude: LATITUDE - SPACE,
        longitude: LONGITUDE - SPACE,
      },
      c: {
        latitude: LATITUDE - (SPACE * 2),
        longitude: LONGITUDE - (SPACE * 2),
      },
      d: {
        latitude: LATITUDE - (SPACE * 3),
        longitude: LONGITUDE - (SPACE * 3),
      },
      e: {
        latitude: LATITUDE - (SPACE * 4),
        longitude: LONGITUDE - (SPACE * 4),
      },
    };
  }

  componentDidMount() {
    animationTimeout = setTimeout(() => {
      this.focus1();
    }, timeout);
  }

  componentWillUnmount() {
    if (animationTimeout) {
      clearTimeout(animationTimeout);
    }
  }

  focus1() {
    this.map.fitToSuppliedMarkers(markerIDs, true);
  }

  render() {
    const { region } = this.props;
    console.log(region);
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column'
      }}>
        <MapView
          ref={ref => { this.map = ref; }}
          style={styles.container}
          region={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
          }}
        >
          <MapView.Marker
            identifier="Marker1"
            coordinate={this.state.a}
          />
          <MapView.Marker
            identifier="Marker2"
            coordinate={this.state.b}
          />
          <MapView.Marker
            identifier="Marker3"
            coordinate={this.state.c}
          />
          <MapView.Marker
            identifier="Marker4"
            coordinate={this.state.d}
          />
          <MapView.Marker
            identifier="Marker5"
            coordinate={this.state.e}
          />
        </MapView>
        <View style={{marginTop: 0.84*height}}>
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
            <Text style={{marginLeft: 0.27*width, color: "white", backgroundColor:"#141584"}}>
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
    )
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
