import * as React from 'react';
import {SafeAreaView,Image, Text, View ,StyleSheet,Pressable, FlatList} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



function TrangChu() {
  const navigation = useNavigation();
  const DATA = [
    {
      id: '1',
      title: 'Nhắc nhở',
      icon: require('../Icons/chuong.png'),
      backgroundColor: 'red',
    },
    {
      id: '2',
      title: 'Phiếu thu',
      icon: require('../Icons/phieuthu.png'),
      backgroundColor: '#7CFC00',
    },
    {
      id: '3',
      title: 'Công nợ',
      icon: require('../Icons/congno.png'),
      backgroundColor: '#DC143C',
    },
    {
      id: '4',
      title: 'Tin tức',
      icon: require('../Icons/tintuc.png'),
      backgroundColor: '#00FFFF',
    },
    {
      id: '5',
      title: 'Chương trình khung',
      icon: require('../Icons/chuongtrinhkhung.png'),
      backgroundColor: '#00FF00',
    },
    {
      id: '6',
      title: 'Thành tích',
      icon: require('../Icons/thanhtich.png'),
      backgroundColor: 'yellow',
    },
    {
      id: '7',
      title: 'Điểm rèn luyện',
      icon: require('../Icons/diemrenluyen.png'),
      backgroundColor: 'blue',
    },
    {
      id: '8',
      title: 'Thống kê điểm danh',
      icon: require('../Icons/thongke.png'),
      backgroundColor: 'orange',
    },
    {
      id: '9',
      title: 'Khảo sát',
      icon: require('../Icons/khaosat.png'),
      backgroundColor: '#00008B',
    },
    {
      id: '10',
      title: 'Quảng cáo',
      icon: require('../Icons/quangcao.png'),
      backgroundColor: '#FFB6C1',
    },
    {
      id: '11',
      title: 'Mẫu đơn',
      icon: require('../Icons/maudon.png'),
      backgroundColor: '#00FFFF',
    },
    {
      id: '12',
      title: 'Đổi password',
      icon: require('../Icons/matkhau.png'),
      backgroundColor: '#FFD700',
      screenName: 'DoiMatKhau',
    },
  ];
  
  //type ItemProps = {title: string};
  
  const Item = ({ title, icon, backgroundColor }) => (
    <View style={[styles.item, { backgroundColor }]}>
      <View style={styles.innerItem}>
        <View style={styles.iconContainer}>
          <Image source={icon} style={styles.icon} />
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
  
  // const navigateToXemDiem = () => {
  //   navigation.navigate('xemdiem'); // Điều hướng đến màn hình "XemDiem"
  // };
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
        renderItem={({ item }) => <Item title={item.title} icon={item.icon} backgroundColor={item.backgroundColor} />}
        keyExtractor={(item) => item.id} />
    </SafeAreaView>
  );
}

export default TrangChu;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // Để các mục dữ liệu nằm giữa theo chiều ngang
  },
  item: {
    padding: 8,
    marginVertical: 20,
    marginHorizontal: 22,
    height: 55,
    width: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  innerItem: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    backgroundColor: 'transparent',
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 12,
    width: 100,
    marginTop: 10,
    textAlign: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    marginTop:30,
  },
  v1: {},
  bd1: {
    height: 70,
    width: 400,
    backgroundColor: "#047bfd",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  bd2: {
    height: 70,
    width: 370,
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: 1,
    marginLeft: 10,
    borderRadius: 10,
    flexDirection: "row"
  },
  calendar: {
    height: 60,
    width: 60,
    marginTop: 5,
    marginLeft: 30,
  },
  xemdiem: {
    height: 60,
    width: 60,
    marginTop: 5,
    marginLeft: 50,
  },
  txtcalendar: {
    marginTop: 25,
    marginLeft: 10,
  },
  txtxemdiem: {
    marginTop: 25,
    marginLeft: 10,
  },
});