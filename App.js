import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';

import * as Speech from 'expo-speech';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  speak = () => {
    var thingToSay = this.state.name;
     this.state.name === ''
       ? alert('Please Enter a word')
       : Speech.speak(thingToSay);
  };

  render() {
    return (
      <View style={styles.textContainer1}>
        <Header
          backgroundColor={'#903BBA'}
          centerComponent={{
            text: 'Text To Speech',
            style: { color: 'white', fontSize:20, fontWeight:"bold"},
          }}
        />

        <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://cdn.jim-nielsen.com/ios/512/remarkable-text-to-speech-2022-03-24.png',
          }}
        />

        <Text style={styles.text2}> Enter The Word </Text>
        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ name: text });
          }}
          value={this.state.name}
        />

        <View>
          <TouchableOpacity style={styles.button} onPress={this.speak}>
            <Text style={styles.text2}> Click Here To Hear Speech </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputBox: {
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  textContainer1: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },

  text2: {
    color: 'white',
    padding: 0,
    fontSize: 20,
    textAlign: 'center',
    fontStyle: 'bold',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  button: {
    padding: 20,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#903BBA',
    marginTop: 70,
    borderRadius: 100,
    width: '80%',
    alignSelf: 'center',
    height: 80,
  },
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 95,
  },
});
