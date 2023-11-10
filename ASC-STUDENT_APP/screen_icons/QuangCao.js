import React from 'react';
import {SafeAreaView,View,FlatList,StyleSheet,Text,StatusBar,Pressable,Image} from 'react-native';



export default function QuangCao() {
    return (
      <View style={styles.container}>
         <Image style={styles.img} source={require("../image/nhacnho.PNG")}></Image>
          
      </View>

      
        
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor:"#f7fcff",
    fontFamily:"tahoma",
  
  },
  img:{
    width:100,
    height:100,
    marginTop:200
  },
  txt:{
    color:"gray"
  },
 
  t1:{
    marginLeft: 40,
    fontSize:19,
    marginTop:13,
    color:"white"
  }
   
    
  
   
    
  
});