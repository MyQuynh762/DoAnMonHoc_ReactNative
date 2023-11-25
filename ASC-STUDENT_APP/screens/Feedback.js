import React, { useState } from 'react';
import {StyleSheet,Text, TextInput,Pressable, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { View } from 'react-native-web';
const Feedback =()=>{

  var [email, setEmail] = useState("");
  var [sdt, setSdt] = useState("");
  var [nd, setNd] = useState("");
  var data = [{ email, sdt , nd}];

const ClickButton =()=>{
   const user = data.find((user) => user.email == email && user.sdt == sdt && user.nd == nd);
   
    if (user) {
      alert("Đã gửi ý kiến thành công!");
 
    } 
   
  };


return (
  <View style={styles.container}>
     <View style={styles.v}>
          

        </View>
        <ScrollView>
        <View style={styles.va}>
          <p style={styles.tv1}>Mọi thông tin đóng góp ý kiến phản hồi xin vui nhập vào các thông tin bên dưới.</p>
        </View>

  <View style={styles.v2}>
         <Text style={styles.v21}>Tên trường</Text>
         <Pressable style={styles.schoolname}>
            <Text style={styles.txtschoolname}>Trường Đại học Công Nghiệp Tp.HCM</Text>
         </Pressable>
        </View>

        <View style={styles.v2}>
         <Text style={styles.v21}>Họ tên</Text>
         <Pressable style={styles.schoolname}>
            <p style={styles.txtschoolname}>Ngô Minh Thuận</p>
         </Pressable>
        </View>
   
   <View style={styles.v1}>
    <Text  style={styles.tinput}>Số điện thoại</Text>
       <TextInput
       style={styles.input}
          value={sdt}
          onChangeText={(number) => setSdt(number)}
          placeholder="Nhập số điện thoại"
      
    />
     
       </View>
  
    <View style={styles.v1}>
    <Text style={styles.tinput}>Email</Text>
     <TextInput
       style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Nhập Email"
    />
       </View>

    <View style={styles.v1}>
    <Text  style={styles.tinput}>Nội dung</Text>
     <TextInput
       style={styles.input}
          value={nd}
          onChangeText={(text) => setNd(text)}
          placeholder="Nhập nội dung"
    />
       </View>
     

       <Pressable style={styles.btn} onPress={ClickButton}>
        <Text style={styles.txtLogin}>GỬI</Text>
      </Pressable>
   

 



        </ScrollView>

        </View>
  
);
};

  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily:"tahoma",
    fontSize:15
   
  },
  va:{
    height: 70,
    width: 390,
    backgroundColor:"#f7fcff"

  },
  v2:{
    marginTop:10,
    marginLeft:10
  },
  tv1:{
    fontSize:15,
    marginLeft:10,
   
    
  },
  schoolname:{
    height:60,
    width:350,
    borderColor:"grey",
    borderWidth:1,
    borderRadius:10,
    marginLeft:10,
    marginTop: 10,
    backgroundColor:"#f7fcff"
  },
  txtschoolname:{
    marginTop:20,
    marginLeft:20
  },
   v1:{
    flexDirection: "column"

   },
  
    input: {
    height: 60,
    width:340,
    borderRadius:10,
    margin:10,
    padding: 5,
    backgroundColor:"#f7fcff",
    paddingLeft: 20,
    borderWidth:1,
    borderColor:"gray",
    marginLeft: 25   
  },
  tinput:{
    marginLeft:15,
    marginTop:10 },
  btn:{
    height: 40,
    width:330,
    margin: 12,
    backgroundColor:"#047bfd",
    color:'white',
    marginLeft:30
    

  },
  txtLogin:{
    color:'white',
    textAlign:'center',
    marginTop:10,
  },
  v:{
    height: 50,
    width:390,
    backgroundColor:"#047bfd"
    
  },
  t1:{
    marginLeft: 40,
    fontSize:19,
    marginTop:13,
    color:"white"
  }
  
});

export default Feedback;
