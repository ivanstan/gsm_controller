import React, {Component} from 'react';
import {Button, View, TextInput, Picker} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const viewStyle = {
  padding: 10,
};

const pickerStyle = {
  width: '100%',
};

export class SettingsScreen extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      phone: null,
      model: 'elothermic',
      heaterCount: 3,
      power: 2,
    };
  }

  save() {
    AsyncStorage.setItem('phone', JSON.stringify(this.state.phone));
    AsyncStorage.setItem('model', JSON.stringify(this.state.model));
    AsyncStorage.setItem('heaterCount', JSON.stringify(this.state.heaterCount));
    AsyncStorage.setItem('power', JSON.stringify(this.state.power));
  }

  render() {
    return (
      <View style={viewStyle}>
        <TextInput
          placeholder="Telefon"
          onChangeText={value => this.setState({phone: value})}
          value={this.state.phone}
        />
        <Picker
          style={pickerStyle}
          onValueChange={itemValue => this.setState({model: itemValue})}
          selectedValue={this.state.model}>
          <Picker.Item label="Elo thermic" value="elothermic" />
          <Picker.Item label="E line" value="eline" />
        </Picker>

        <Picker
          style={pickerStyle}
          onValueChange={itemValue => this.setState({heaterCount: itemValue})}
          selectedValue={this.state.heaterCount}>
          <Picker.Item label="3" value="3" />
          <Picker.Item label="6" value="6" />
          <Picker.Item label="9" value="9" />
        </Picker>

        <Picker
          style={pickerStyle}
          onValueChange={itemValue => this.setState({power: itemValue})}
          selectedValue={this.state.power}>
          <Picker.Item label="1" value="1" />
          <Picker.Item label="1.5" value="1.5" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label="5" value="5" />
          <Picker.Item label="6" value="6" />
          <Picker.Item label="7" value="7" />
          <Picker.Item label="8" value="8" />
          <Picker.Item label="9" value="9" />
        </Picker>

        <Button title="Sačuvaj" onPress={() => this.save()} />
      </View>
    );
  }
}
