/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';
import Barang from './Component/Barang';
import Header from './Component/Header';

export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <StatusBar backgroundColor="grey" />
        <View>
          <Header data="SELAMAT DATANG" />
        </View>
        <Barang />
      </View>
    );
  }
}
