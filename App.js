import Slider from '@react-native-community/slider';
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {SettingsScreen} from './src/screens/SettingsScreen';
import {MainScreen} from './src/screens/MainScreen';
import AsyncStorage from '@react-native-community/async-storage';

const Main: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content"/>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Slider
                style={{width: '100%', height: 40}}
                minimumValue={35}
                maximumValue={80}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#FFFFFF"
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

const MainNavigator = createStackNavigator({
    Main: {screen: MainScreen},
    Settings: {screen: SettingsScreen},
  },
  {
    initialRouteName: 'Main',
  },
);

const App = createAppContainer(MainNavigator);

export default App;
