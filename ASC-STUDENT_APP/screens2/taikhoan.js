import React, { useState } from 'react';
import {StyleSheet,Text, TextInput,Pressable, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { View } from 'react-native-web';
const TaiKhoan =()=>{

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
     <Text style={styles.text1}>Thông tin sinh viên</Text>
            <View style={styles.vimg}></View>
            <Text style={styles.text2}>Ngô Minh Thuận</Text>
            

        </View>


        <ScrollView>
        <View style={styles.v2}> 
       
            <View  style={styles.textSc}> 
            <Text>Trạng thái :</Text>
            <Text style={styles.textSc2}>Đang học </Text>
             </View>

             <View  style={styles.textSc}> 
            <Text>Giới tính :</Text>
            <Text style={styles.textSc4}>Nam </Text>
             </View>

             <View  style={styles.textSc}> 
            <Text>MSSV :</Text>
            <Text style={styles.textSc5}>20053791 </Text>
             </View>

             <View  style={styles.textSc}> 
            <Text>Lớp :</Text>
            <Text style={styles.textSc6}>DHKTPM16CTT</Text>
             </View>

             <View  style={styles.textSc}> 
            <Text>Bậc đào tạo :</Text>
            <Text style={styles.textSc7}>Đại học</Text>
             </View>

             <View  style={styles.textSc}> 
            <Text>Khoa:</Text>
            <Text style={styles.textSc8}>Công nghệ thông tin</Text>
             </View>

             
             <View  style={styles.textSc}> 
            <Text>Chuyên ngành:</Text>
            <Text style={styles.textSc9}>Kỹ thuật phần mềm</Text>
             </View>

              
             <View  style={styles.textSc}> 
            <Text>Số điện thoại:</Text>
            <Text style={styles.textSc10}>0000000000</Text>
             </View>

             <View  style={styles.textSc}> 
            <Text>Nơi sinh:</Text>
            <Text style={styles.textSc11}>America</Text>
             </View>

             <Pressable style={styles.btn}>
                <Text style={styles.tbtn}>Đăng Xuất</Text>
             </Pressable>
       
       
        

        
        
        </View>

     
      
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
  v:{
    flexDirection:'column',
    height:200,
    width:390,
    backgroundColor:"#047bfd",
    
 
  },
  vimg:{
    height: 100,
    width:100,
    backgroundColor:"white",
    marginLeft:140,
    marginTop:20,
    borderRadius:100
  },
  text1:{
    marginLeft:110,
    marginTop: 10,
    fontSize:17,
    color:"white",

  },
  text2:{
    marginLeft:120,
    marginTop: 10,
    fontSize:17,
    color:"white",

  },
  v2:{
    flexDirection:"column"

  },
  scv:{
    backgroundColor: 'pink',
    
  },
  text:{
    fontSize:30
  },
  textSc:{
    flexDirection:"row",
    marginLeft: 10,
    borderBottomColor:"gray",
    borderWidth:1,
    borderColor:"white",
    padding: 20,
    width:360
  },
  textSc2:{
    marginLeft: 70
  },
  textSc4:{
    marginLeft: 80
  },
  textSc5:{
    marginLeft: 90
  },
  textSc6:{
    marginLeft: 100
  },
  textSc7:{
    marginLeft: 50
  },
  textSc8:{
    marginLeft: 100
  },
  textSc9:{
    marginLeft: 50
  },
  textSc10:{
    marginLeft: 50
  },
  textSc11:{
    marginLeft: 80
  },
  btn:{
    height: 60,
    width: 330,
    backgroundColor:"#047bfd",
    marginLeft: 30,
    marginTop: 20,
    borderRadius:20
  },
  tbtn:{
    textAlign:"center",
    marginTop: 20,
    color:"white",
    fontSize:20
  }
  
  
})

export default TaiKhoan;