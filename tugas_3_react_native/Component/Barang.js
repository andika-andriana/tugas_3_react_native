import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default class Barang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jumlah: 0,
    };
  }

  handleTambah = () => {
    this.setState({jumlah: this.state.jumlah + 1});
  };

  handleKurang = () => {
    if (this.state.jumlah > 0) {
      this.setState({jumlah: this.state.jumlah - 1});
    } else {
      alert('Jumlah Tidak Boleh Kurang Dari 0');
    }
  };

  render() {
    return (
      <View>
        <View>
          <Text style={{textAlign: 'right', marginRight: 8}}>
            Jumlah : {this.state.jumlah}
          </Text>
          <Text style={{textAlign: 'center', marginTop: 30}}>
            Silahkan Tekan Tombol Dibawah
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <View>
            <TouchableOpacity
              style={{
                width: 100,
                height: 30,
                backgroundColor: 'green',
              }}
              onPress={this.handleTambah}
              value={this.state.jumlah}>
              <Text style={{textAlign: 'center', fontSize: 20, color: 'white'}}>
                +
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={{
                width: 100,
                height: 30,
                backgroundColor: 'red',
              }}
              onPress={this.handleKurang}
              value={this.state.inputan}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  color: 'white',
                }}>
                -
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{margin: 50}}>
          <Text style={{textAlign: 'center', color: 'blue', fontSize: 50}}>
            {this.state.jumlah}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 30,
    justifyContent: 'space-around',
  },
});
