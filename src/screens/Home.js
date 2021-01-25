import React, {Component} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableNativeFeedbackComponent,
  View,
} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ImageBackground
          source={require('../assets/imgHome.png')}
          style={styles.bg}>
          <View style={styles.mainView}>
            <TouchableNativeFeedback
              onPress={() => this.props.navigation.navigate('RuangIlmu')}>
              <View style={styles.button}>
                <Text style={styles.text}>Ruang Ilmu</Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              onPress={() => this.props.navigation.navigate('PanduanSholat')}>
              <View style={styles.button}>
                <Text style={styles.text}>Panduan Sholat</Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              onPress={() => this.props.navigation.navigate('Prayer')}>
              <View style={styles.button}>
                <Text style={styles.text}>Jadwal Sholat</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainView: {
    // backgroundColor: '#00fae194',
    width: '90%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  button: {
    borderRadius: 10,
    height: 45,
    width: '70%',
    borderWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000059',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
    textShadowColor: '#000000b5',
    textShadowRadius: 1,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
  },
  imgButton: {
    width: '100%',
    height: 70,
  },
});
