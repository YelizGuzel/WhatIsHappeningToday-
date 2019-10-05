import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity,Platform,FlatList,ScrollView,FooterText} from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios';


export default class Science extends React.Component {
static navigationOptions ={
  title:"Science News",
    headerTitleStyle: {
      fontWeight: '300',
      color: '#e00404',
      fontFamily: 'Nunito-Regular',
      fontSize: 30,
    },
}
state={
  dt:[]
}

componentDidMount(){
const url="https://newsapi.org/v2/top-headlines?country=tr&category=science&apiKey=9b72058fa34d464cb1d1e0b1d2a439ca"
axios.get(url).then(res=>{
  
  this.setState({dt:res.data.articles})
})
}
  render() {


    return (

 <View style={styles.container}>
  
   
      <ScrollView>

       <FlatList
       data={this.state.dt}
       keyExtractor={ item=> item.id}
       renderItem={({item})=>(

   <TouchableOpacity onPress={ ()=>this.props.navigation.navigate("detail",{item:item})}>
     
        
    <View style={styles.page}>
   
            <View>
              <Text style={styles.title}>{item.name}</Text>
              <Image style={styles.imageStyle} source ={{uri:item.urlToImage}}/>
              <Text>{item.author}</Text>
              <Text>{item.title}</Text>
             </View>

    </View>

   </TouchableOpacity>
       )}  
       />
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
    backgroundColor: 'white',
    padding: 10,
    marginTop:10,
  
    
    
  },

  imageStyle:{
  width:75,
  height:75,
  marginLeft:10,
  alignSelf: 'center'
    },

  title:{
  fontSize:20,
  fonweight:'bold'
  

   },

  page:{
  flexDirection:'row',
  borderWidth:0.5,
  borderColor:'black',
  borderRadius:5,
  marginBottom:10
    },

    

     


});
