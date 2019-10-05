import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default class Home extends React.Component {
  fncOpenNews = () => {
    this.props.navigation.navigate('selectNews');
  };

  render() {
    return (
      <View style={styles.container}>
       <Image style = {styles.imageStyle} source = {require ('./assets/images.png') } />
        <TouchableOpacity onPress={this.fncOpenNews}>
          <Text style={styles.buton}> WHAT IS HAPPENING TODAY? </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  
  buton: {
    width: '100%',
    borderWidth: 5,
    marginBottom: 5,
    fontSize: 25,
    padding: 4,
    borderColor: '#E21F29',
    backgroundColor: '#E21F29',
    alignSelf: 'center',
    textAlign: 'center',
    color:'#ffffff',
  },

  imageStyle: {
    width: '100%',
    borderWidth: 10,
    padding: 5,
    marginTop: 10,
  },
});
