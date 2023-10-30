import React from 'react';
import {SafeAreaView,View,FlatList,StyleSheet,Text,StatusBar,Pressable,Image} from 'react-native';



export default function NhacNho() {
    return (
      <View style={styles.container}>
         <Image style={styles.img} source={require("../image/nhacnho.PNG")}></Image>
          <Text  style={styles.txt}>Chưa có thông báo</Text>
      </View>

      
        
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor:"#f7fcff"
  
  },
  img:{
    width:100,
    height:100,
    marginTop:200
  },
  txt:{
    color:"gray"
  }
   
    
  
   
    
  
});