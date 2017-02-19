import React, { Component } from 'react';
import { Dimensions, AppRegistry, StyleSheet, Image, Text, View, Button, Alert, TextInput, TouchableOpacity } from 'react-native';
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
window.destlat = 'Ankit';
var destlong = null;
class flintWuberApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markers: [{
          name: 'Hello',
          AmountOfWater:"12",
          TypeOfEstablishment:"Commercial",
          Price:"5",
          coordinates: {
            latitude:LATITUDE+SPACE,
            longitude:LONGITUDE+SPACE
        },

      },
      {
        name:'Lol',
        AmountOfWater:"23",
        TypeOfEstablishment:"Commercial",
        Price:"5",
        coordinates:{
          latitude: LATITUDE-SPACE,
          longitude: LONGITUDE-SPACE
        },
      },
      {
        name:'Hey',
        AmountOfWater:"23",
        TypeOfEstablishment:"Commercial",
        Price:"5",
        coordinates:{
          latitude: LATITUDE - (SPACE * 2),
        longitude: LONGITUDE - (SPACE * 2),
        },
      },
      {
        name:'Sup',
        AmountOfWater:"23",
        TypeOfEstablishment:"Commercial",
        Price:"5",
        coordinates:{
          latitude: LATITUDE - (SPACE * 3),
        longitude: LONGITUDE - (SPACE * 3),
        },
      }
      ]
  }
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

  show() {
    this.marker1.showCallout();
    window.destlat = "Bhagat";
  }


  hide() {
    this.marker1.hideCallout();
  }

  onAnnotationPress =(annotation) =>{
    alert(annotation.id)
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
          {this.state.markers.map(marker =>(
          <MapView.Marker 
          coordinate = {marker.coordinates}
          title={marker.name}
          AmountOfWater = {marker.AmountOfWater}
          TypeOfEstablishment = {marker.TypeOfEstablishment}
          Price = {marker.Price}
          //var s = AmountOfWater.concat(TypeOfEstablishment);
          description = {"Amount of Water: "+marker.AmountOfWater + "; Price per oz: "+ marker.Price}>
          </MapView.Marker>
          ))}
        </MapView>
        <View style={styles.buttonContainer}>
          <View style={styles.bubble}>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() =>{
            window.destlat = 'Bhaga';
            this.show();
          }} style={[styles.bubble, styles.button]}>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.hide()} style={[styles.bubble, styles.button]}>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 0.84*height, flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{width: 0.48*width}}>
            <SubmitUserPreferenceButton />
          </View>
          <View style={{width: 0.48*width}}>
            <FilterButton />
          </View>
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



class FilterButton extends Component {
  _onPressButton() {
    Alert.alert(String(window.destlat));
  }

  render() {
    return (
      <Button
        onPress={this._onPressButton}
        width={0.5*width}
        title="Filter"
        color="#841584"
        accessibilityLabel="Filter based on your amount and radius">
      </Button>
    );
  }
}

class SubmitUserPreferenceButton extends Component {
  _onPressButton() {
    Alert.alert('Submitted request for water!');
  }

  render() {
    return (
      <Button
        onPress={this._onPressButton}
        title="Submit"
        width={0.5*width}
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