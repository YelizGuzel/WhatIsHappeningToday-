import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios';

export default class Detail extends React.Component {
  
   
static navigationOptions ={
  title:"Good Reading",
    headerTitleStyle: {
      fontWeight: '300',
      color: '#e00404',
      fontFamily: 'Nunito-Regular',
      fontSize: 30,
    },
}
  render() {
    const item = this.props.navigation.getParam('item', null);

    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.title}>{item.description}</Text>
        </ScrollView>
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
    title :{
     fontSize:15,
     textAlign:'center',
     
  },
});
