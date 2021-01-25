import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// SCREENS
import Splash from '../components/Splash';
import Intro from '../components/Intro';
import Home from '../screens/Home';
import JadwalSholat from '../screens/content/JadwalSholat';
import PanduanSholat from '../screens/content/PanduanSholat';
import TiangAgama from '../screens/content/TiangAgama';
import RuangIlmu from '../screens/content/RuangIlmu';
import Prayer from '../screens/content/Prayer';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="JadwalSholat" component={JadwalSholat} />
        <Stack.Screen name="PanduanSholat" component={PanduanSholat} />
        <Stack.Screen name="Prayer" component={Prayer} />
        <Stack.Screen name="TiangAgama" component={TiangAgama} />
        <Stack.Screen name="RuangIlmu" component={RuangIlmu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
