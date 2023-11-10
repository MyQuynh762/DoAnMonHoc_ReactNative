import React from 'react';
import {SafeAreaView,View,FlatList,StyleSheet,Text,StatusBar,Pressable,Image} from 'react-native';



export default function ThongTinGioHoc({navigation}) {
    return (
      <View style={styles.container}>
          <View style={styles.v1}>
            <Image style={styles.img1} source={require('../image/tinttucbig.PNG') }></Image>
            <Text style={styles.t1}>THÔNG TIN GIỜ HỌC</Text>
            <Text style={styles.t2}>Đăng ngày 22/10/2020</Text>
          </View>
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
  v1:{
 

  },
  img1:{
    height: 200,
    width: 390
  },
  t1:{
    fontSize:20
  },
  t2:{
    marginLeft: 200
  },
  
  
});