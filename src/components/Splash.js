import AsyncStorage from '@react-native-community/async-storage';
import React, {Component} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';

export class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      AsyncStorage.getItem('first')
        .then((value) => {
          if (value != null) {
            this.props.navigation.replace('Home');
          } else {
            this.props.navigation.replace('Intro');
          }
        })
        .catch((err) => console.log('Terjadi kesalahan. ', err));
    }, 1000);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ImageBackground
          source={require('../assets/imgForest.jpg')}
          style={styles.bg}
          blurRadius={3}>
          <View>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 145,
    height: 200,
  },
});

export default Splash;
