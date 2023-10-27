import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, TextInput, Pressable, } from 'react-native';


export default function Login({navigation}) {
    return (
      <View style={styles.container}>
        
        <Image style={styles.bd1} source={require("../image/bovien.PNG")}></Image>
      

       
        <View style={styles.v1}>
       
        <Image style={styles.img1} source={require("../image/logo.PNG")}></Image>
       
        <Text style={styles.text1}>Vui lòng đăng nhập tài khoản</Text>
        <View style={styles.v}>
        <Pressable style={styles.selectSchool}>
            <Image style={styles.home} source={require("../image/home1.PNG")}></Image>
            <b  style={styles.nameSchool}>Trường Đại học Công <br></br> Nghiệp Tp.HCM</b>
            <Image style={styles.select} source={require("../image/select.PNG")}></Image>
        </Pressable>
        </View>
        <TextInput
            style={styles.ip1}
            onChangeText={(text) => setName(text)}
            placeholder="Nhập tài khoản"
         />
         <TextInput
            style={styles.ip1}
            onChangeText={(text) => setName(text)}
            placeholder="Nhập mật khẩu"
            
         />
  
        <Pressable style={styles.btn} onPress={() => navigation.navigate("trangchu")} >
          <b  style={styles.txt1} > ĐĂNG NHẬP</b>
        </Pressable>


        <View style={styles.v2}>
        <Text style={styles.txtpass1}>Quên mật khẩu ?</Text>
        <Text style={styles.txtpass2}>Góp ý - Phản hồi</Text>
        </View>

        <View style={styles.v3}>
        <Text style={styles.txtfoot1}>Điều khoản sử dụng và chính sách ASC</Text>
        <b style={styles.txtfoot2}>asc.com.vn</b>
        </View>




        </View>
       
       
  
    
  
  
  
        <StatusBar style="auto" />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    
    },
    bd1:{
        height:50,
        width:390,
        
       
    },
    img1:{
        height:70,
        width:330,
        marginTop:40,
        marginLeft:30
    },
    text1:{
        marginTop:20,
        marginLeft:70,
        color:"gray",
        fontFamily:"arial",
        fontSize: 17

    },
    v:{
        flexDirection:"row"
    },
    select:{
        height:20,
        width:20,
        position:"absolute",
        marginLeft: 300,
        marginTop: 27
    },
    home:{
        height:30,
        width:30,
        position:"absolute",
        marginLeft: 20,
        marginTop: 25

    },
    selectSchool:{
        height: 70,
        width:330,
        borderColor:"gray",
        backgroundColor:"white",
        borderWidth:1,
        marginLeft: 30,
        borderRadius:10,
        marginTop: 10
    },
    nameSchool:{
        textAlign:"center",
        marginTop:15,
        color:"gray",
        fontFamily:"boild"
    },
    v1:{
        flexDirection: "column"
    },
    
      ip1:{
        height: 50,
        width:330,
        backgroundColor: "white",
        borderColor:"gray",
        borderWidth:1,
        borderRadius:10,
        marginTop: 20,
        marginLeft: 30,
        paddingLeft: 50
      },
      btn:{
        height: 50,
        width:330,
        backgroundColor:"#047bfd",
        borderRadius: 10,
        marginTop: 30,
        marginLeft: 30
    
      },
      txt1:{
        marginTop: 15,
        textAlign: 'center',
        color:"white"
      },
      v2:{
        flexDirection:"row"
      },
      txtpass1:{
        marginTop:20,
        marginLeft:19,
        color:"#047bfd",
        fontSize:16
      },
      txtpass2:{
        marginTop:20,
        marginLeft:110,
        color:"#047bfd",
        fontSize:16
      },
      v3:{
        flexDirection:'column'
      },
      txtfoot1:{
        textAlign:"center",
        marginTop:50,
        fontFamily:"arial",
        fontSize:17,
        color:"gray"
      },
      txtfoot2:{
        textAlign:"center",
        fontFamily:"arial",
        color:"gray"
        
      }
      
      
    

});