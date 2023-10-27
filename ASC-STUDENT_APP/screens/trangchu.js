import React from 'react';
import {SafeAreaView,View,FlatList,StyleSheet,Text,StatusBar,Pressable,Image} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Nhắc nhở',
  },
  {
    id: '2',
    title: 'Phiếu thu',
  },
  {
    id: '3',
    title: 'Công nợ',
  },
  {
    id: '4',
    title: 'Tin tức',
  },
  {
    id: '5',
    title: 'Chương trình khung',
  },
  {
    id: '6',
    title: 'Thành tích',
  },
  {
    id: '7',
    title: 'Điểm rèn luyện',
  },
  {
    id: '8',
    title: 'Thống kê điểm danh',
  },
  {
    id: '9',
    title: 'Khảo sát',
  },
  {
    id: '10',
    title: 'Quảng cáo',
  },
  {
    id: '11',
    title: 'Mẫu đơn',
  },
  {
    id: '12',
    title: 'Đổi password',
  },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function TrangChu({navigation}) {
    return (
        
        <SafeAreaView style={styles.container}>
            <View style={styles.v1}>
                <Pressable style={styles.bd1}></Pressable>
                <Pressable style={styles.bd2}>
                   <Image style={styles.calendar} source={require("../image/calender.PNG")}></Image>
                   <Text style={styles.txtcalendar}>Xem Lịch</Text>
                   <Image style={styles.xemdiem} source={require("../image/xemdiem.PNG")}></Image>
                   <Text style={styles.txtxemdiem}>Xem Điểm</Text>
                </Pressable>
             
            </View>
            <FlatList
                numColumns={4}
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} />}
                keyExtractor={item => item.id} />
                <View style={styles.tab}>
               
                <Pressable style={styles.tabtext1} onPress={() => navigation.navigate("trangchu")} >
                  <b  style={styles.txt1} > Trang chủ</b>
                </Pressable>
                <Pressable style={styles.tabtext2} onPress={() => navigation.navigate("nhacnho")} >
                  <b  style={styles.txt1} > Nhắc nhở</b>
                </Pressable>
                <Pressable style={styles.tabtext3} onPress={() => navigation.navigate("diemdanh")} >
                  <b  style={styles.txt1} > DD</b>
                </Pressable>
                <Pressable style={styles.tabtext3} onPress={() => navigation.navigate("gopy")} >
                  <b  style={styles.txt1} > Góp ý</b>
                </Pressable>
                <Pressable style={styles.tabtext3} onPress={() => navigation.navigate("taikhoan")} >
                  <b  style={styles.txt1} > Tài Khoản</b>
                </Pressable>
                 
                 
                 
                
                </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 14,
    height:70,
    width:70
  },
  title: {
   
  },
  v1:{

  },
  bd1:{
    height:70,
    width:400,
    backgroundColor:"#047bfd",
    borderBottomLeftRadius:50,
    borderBottomRightRadius:50,
  },
  bd2:{
    height:70,
    width:370,
    backgroundColor:"white",
    borderColor:"gray",
    borderWidth:1,
    marginLeft: 10,
    borderRadius: 10,
    flexDirection:"row"
    
  },
  calendar:{
    height: 60,
    width:60,
    marginTop: 5,
    marginLeft: 30
  },
  xemdiem:{
    height: 60,
    width:60,
    marginTop: 5,
    marginLeft: 50
  },
  txtcalendar:{
    marginTop:25,
    marginLeft: 10
  },
  txtxemdiem:{
    marginTop:25,
    marginLeft: 10
  },
  tab:{
    height:60,
    width:400,
    backgroundColor:"white",
    borderColor:'gray',
    borderWidth:1,
    flexDirection:"row"
  },
  tabtext1:{
    marginTop: 20,
    marginLeft: 20

  },
  tabtext2:{
    marginTop: 20,
    marginLeft: 20

  },
  tabtext3:{
    marginTop: 20,
    marginLeft: 20

  },
  tabtext4:{
    marginTop: 20,
    marginLeft: 20

  },
  tabtext5:{
    marginTop: 20,
    marginLeft: 20

  },
  
   
    
  
});