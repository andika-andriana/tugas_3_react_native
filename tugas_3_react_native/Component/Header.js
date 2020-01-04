import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'olivedrab', padding: 20}}>
        <Text style={{color: 'white', fontSize: 12, textAlign: 'center'}}>
          Tugas 3 React Native
        </Text>
        <Text
          style={{
            color: 'purple',
            fontSize: 20,
            textAlign: 'center',
            margin: 5,
          }}>
          {this.props.data}
        </Text>
      </View>
    );
  }
}
