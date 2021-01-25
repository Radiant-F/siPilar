import React, {Component} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class Intro extends Component {
  constructor() {
    super();
    this.state = {
      first: 'no',
    };
  }

  done() {
    this.props.navigation.replace('Home');
    AsyncStorage.setItem('first', this.state.first);
  }

  skip() {
    AsyncStorage.setItem('first', this.state.first);

    this.props.navigation.replace('Home');
  }

  render() {
    return (
      <Onboarding
        onDone={() => this.done()}
        onSkip={() => this.skip()}
        // bottomBarHighlight={false}
        pages={[
          {
            backgroundColor: '#06c200',
            image: (
              <LottieView
                source={require('../assets/20900-ramadan-concept-animation.json')}
                style={styles.image}
                autoPlay={true}
                style={{width: 260}}
              />
            ),
            title: 'siPilar',
            subtitle: 'Satu, untuk semua kebutuhan!',
          },
          {
            backgroundColor: '#ff3333',
            image: (
              <LottieView
                source={require('../assets/20985-ramadan-wheel.json')}
                style={styles.image}
                autoPlay={true}
                style={{width: 260}}
              />
            ),
            title: 'Jadwal Sholat',
            subtitle: 'Jangan tinggalkan sholat 5 waktu ya.',
          },
        ]}
      />
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
  },
});
