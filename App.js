import React, { Component } from 'react';
import {Image, Text, ScrollView, StyleSheet, View} from 'react-native';
import Blink from './components/Blink';
import Greeting from './components/Greeting';
import DimensionsFixed from './components/DimensionsFixed';
import DimensionsFlexDirection from './components/DimensionsFlexDirection';
import PizzaTranslator from './components/PizzaTranslator';
import Fetch from './components/Fetch';

export default class LotsOfGreetings extends React.Component {
  render() {
    let pic = {
      uri: 'http://bukk.it/carlton-sm.gif'
    };
    return (
      <View>
        <ScrollView>
          <Text style={styles.bigblue}>Hello world!</Text>
          <Image source={pic} style={{width: 200, height: 300 }}/>
          <Greeting name='Alpha' />
          <DimensionsFixed />
          <DimensionsFlexDirection />
          <Blink text='Yes blinking is so great' />
          <PizzaTranslator />
          <Fetch />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  }
});
