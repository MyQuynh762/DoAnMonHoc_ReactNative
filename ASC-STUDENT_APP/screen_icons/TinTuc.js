import React from 'react';
import {StyleSheet,View, Text, FlatList, Pressable, Image, ScrollView} from 'react-native';
const DATA = [
    {
      id: '1',
      img:require('../image/tintuc.PNG'),
      title: 'BẢNG THÔNG BÁO GIẢNG DẠY TRỰC TUYẾN ( từ ngày 6/6/2020)',
      text:'TIN TỨC SỰ KIỆN',
      date:'Đăng ngày 6/6/2020'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      img:require('../image/tintuc.PNG'),
      title: 'Thông bảo tiếp tục nghỉ học đối với học sinh sinh viên vì bệnh hô hấp cấp do chủng mới của virus corona',
      text:'TIN TỨC SỰ KIỆN',
      date:'Đăng ngày 13/2/2020'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      img:require('../image/tintuc.PNG'),
      title: 'Hôi thảo Quốc tế:Tự chủ tài chính trong trường Đại học Kinh nghiệm quốc tế ứng dụng vào Việt Nam',
      text:'TIN TỨC SỰ KIỆN',
      date:'Đăng ngày 13/2/2020'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        img:require('../image/tintuc.PNG'),
        title: 'IUH đón nhận chứng nhận 04 chương trình đào tạo đạt chuẩn AUN-AQ và gặp mặt nhân ngày Nhà giáo Việt Nam',
        text:'TIN TỨC SỰ KIỆN',
        date:'Đăng ngày 13/2/2020'
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        img:require('../image/tintuc.PNG'),
        title: 'THÔNG TIN GIỜ HỌC',
        text:'THÔNG TIN GIỜ HỌC',
        date:'Đăng ngày 22/10/2020'
      },
  ];
  
  //type ItemProps = {title: string};
  
  const Item = ({title, img, text, date}) => (
    <ScrollView>
        <View style={styles.item}>
        <View style={styles.item1}>
        <Image source={img} style={styles.img} resizeMode="contain" />
        </View>

        <View style={styles.item2}>
        <Text style={styles.title} >{title}</Text>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.date}>{date}</Text>
        
        </View>
        </View>
       

    </ScrollView>
   
     
    
  );

const TinTuc = ({navigation}) => (
  <View style={styles.container}>
    <View style={styles.v1}>
        <Pressable style={styles.p1}>
            <Text style={styles.t1}onPress={() => navigation.navigate("Tin Tức-Sự Kiện")}>Tin tức-Sự Kiện</Text>
        </Pressable>
        <Pressable style={styles.p2} onPress={() => navigation.navigate("Nhắc Nhở")}>
            <Text style={styles.t2}>Nhắc Nhở</Text>
        </Pressable>
        <Pressable style={styles.p3} onPress={() => navigation.navigate("Thông tin giờ học")}>
            <Text style={styles.t3}>Thông tin giờ học</Text>
        </Pressable>
    </View>

    <FlatList
        data={DATA}
        renderItem={({item}) =>
         <Item
          title={item.title}
          img={item.img}
          text={item.text} 
          date={item.date} 
          
          />
    
        }
        keyExtractor={item => item.id}
      />
      
    
      
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
  },
  item: {
    backgroundColor: 'white',
    borderBottomColor:"gray",
    borderBottomWidth: 1,
    padding: 10,
   // marginVertical: 8,
    //marginHorizontal: 16,
    flexDirection:"row"
  },
  item1:{
    flexDirection:"column",
    
  },
  item2:{
    flexDirection:"column",
    marginLeft: 5
    
  },
  title: {
    fontSize: 15,
    maxWidth: '30%',
    marginLeft: 10
   
  },
  img:{
    height: 80,
    width: 100
  },
  v1:{
    flexDirection:"row",
    height:45,
    width:390,
    backgroundColor:"gray",
    alignItems:"center"
  },
  title3:{
    marginLeft: 130
  },
  p1:{
    height: 40,
    width:130,
    backgroundColor:"white",
    borderColor:"gray",
    borderWidth:1,
    borderRadius:8,
    marginLeft: 3
  },
  t1:{
    marginTop:7,
    marginLeft: 15
  },
  p2:{
    height: 40,
    width:100,
    backgroundColor:"white",
    borderColor:"gray",
    borderWidth:1,
    borderRadius:8,
    marginLeft: 5
  },
  t2:{
    marginLeft:13,
    marginTop:7
  },
  p3:{
    height: 40,
    width:140,
    backgroundColor:"white",
    borderColor:"gray",
    borderWidth:1,
    borderRadius:8,
    marginLeft: 8
  },
  t3:{
    marginLeft:13,
    marginTop:7
  },
  text:{
    color:"gray",
    marginLeft: 10
  },
  date:{
    color:"gray",
    marginLeft: 100
  }
});

export default TinTuc;