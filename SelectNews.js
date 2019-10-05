import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios';

export default class SelectNews extends React.Component {
 
 fncSendData=() =>{


const url="https://newsapi.org/v2/top-headlines"
const data={
  ref:"9b72058fa34d464cb1d1e0b1d2a439ca",
  face:"no",
}

axios.get(url,{params:data})
.then(res=>{

  const dt=res.data;
  
 
})
  
};
fncBusiness=()=>{
   
    this.props.navigation.navigate('business');
  }
  
  fncEntertainment=()=>{
   
    this.props.navigation.navigate('entertainment');
  }
fncTechnology=()=>{
   
    this.props.navigation.navigate('technology');
  }

  fncHealth=()=>{
   
    this.props.navigation.navigate('health');
  }
  fncScience=()=>{
   
    this.props.navigation.navigate('science');
  }

fncSports=()=>{
   
    this.props.navigation.navigate('sports');
  }

 

  render() {
    
     const {navigation}=this.props;
    const prKey=navigation.getParam("prKey","");
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.fncBusiness}>
          <Text style={styles.news}> Business </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.fncEntertainment}>
          <Text style={styles.news}> Entertainment </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.fncHealth}>
          <Text style={styles.news}> Health </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.fncScience}>
          <Text style={styles.news}> Science </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.fncSports}>
          <Text style={styles.news}> Sports </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.fncTechnology}>
          <Text style={styles.news}> Technology </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  news: {
    width: '100%',
    borderWidth: 5,
    marginBottom: 5,
    fontSize: 25,
    padding: 4,
    borderRadius: 10,
    borderColor: '#E21F29',
    backgroundColor: '#E21F29',
    alignSelf: 'center',
    textAlign: 'center',
    color:'#ffffff',
  },
});
