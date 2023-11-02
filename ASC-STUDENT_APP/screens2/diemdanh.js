import React from 'react';
import {SafeAreaView,View,FlatList,StyleSheet,Text,StatusBar,Pressable,Image} from 'react-native';



export default function DiemDanh() {
    return (
      <View style={styles.container}>
        <Pressable style={styles.v1}  onPress={() => navigation.goBack()}>
        
          <Text style={styles.t1}>Điểm danh</Text>

        </Pressable>
         <Image style={styles.img} source={require("../image/nhacnho.PNG")}></Image>
          <Text  style={styles.txt}>Chưa có nội dung</Text>
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
  v1:{
    height: 50,
    width:390,
    backgroundColor:"#047bfd"
    
  },
  t1:{
    marginLeft: 50,
    fontSize:19,
    marginTop:13,
    color:"white",
    position:"absolute"
  },
  
   
    
  
   
    
  
});