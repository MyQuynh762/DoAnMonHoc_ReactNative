import * as React from 'react';
import {SafeAreaView,Image, Text, View ,StyleSheet,Pressable, FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';




const TrangChu = () => {
  const navigation = useNavigation();
  const DATA = [
    {
      id: '1',
      title: 'Nhắc nhở',
      icon: require('../Icons/chuong.png'),
      backgroundColor: 'red',
      screenName: 'Nhắc Nhở',
    },
    {
      id: '2',
      title: 'Phiếu thu',
      icon: require('../Icons/phieuthu.png'),
      backgroundColor: '#7CFC00',
      screenName: 'Phiếu Thu',
    },
    {
      id: '3',
      title: 'Công nợ',
      icon: require('../Icons/congno.png'),
      backgroundColor: '#DC143C',
      screenName: 'Công Nợ',
    },
    {
      id: '4',
      title: 'Tin tức',
      icon: require('../Icons/tintuc.png'),
      backgroundColor: '#00FFFF',
      screenName: 'Tin Tức',
    },
    {
      id: '5',
      title: 'Chương trình khung',
      icon: require('../Icons/chuongtrinhkhung.png'),
      backgroundColor: '#00FF00',
      screenName: 'Chương trình khung',
    },
    {
      id: '6',
      title: 'Thành tích',
      icon: require('../Icons/thanhtich.png'),
      backgroundColor: 'yellow',
      screenName: 'Thành Tích',
    },
    {
      id: '7',
      title: 'Điểm rèn luyện',
      icon: require('../Icons/diemrenluyen.png'),
      backgroundColor: 'blue',
      screenName: 'Điểm Rèn luyện',
    },
    {
      id: '8',
      title: 'Thống kê điểm danh',
      icon: require('../Icons/thongke.png'),
      backgroundColor: 'orange',
      screenName: 'Thống kê điểm danh',
    },
    {
      id: '9',
      title: 'Khảo sát',
      icon: require('../Icons/khaosat.png'),
      backgroundColor: '#00008B',
      screenName: 'Khảo sát',
    },
    {
      id: '10',
      title: 'Quảng cáo',
      icon: require('../Icons/quangcao.png'),
      backgroundColor: '#FFB6C1',
      screenName: 'Quảng cáo',
    },
    {
      id: '11',
      title: 'Mẫu đơn',
      icon: require('../Icons/maudon.png'),
      backgroundColor: '#00FFFF',
      screenName: 'Mẫu đơn',
    },
    {
      id: '12',
      title: 'Đổi password',
      icon: require('../Icons/matkhau.png'),
      backgroundColor: '#FFD700',
      screenName: 'Đổi password',
    },
  ];
  
  

  const Item = ({ title, icon, backgroundColor, screenName }) => (
    <Pressable
      style={[styles.item, { backgroundColor }]}
      onPress={() => {
        if (screenName) {
          navigation.navigate(screenName);
        }
      }}
    >
      <View style={styles.innerItem}>
        <View style={styles.iconContainer}>
          <Image source={icon} style={styles.icon} />
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Pressable>
  );
  
  const navigateToScreen = (screenName) => {
    if (screenName) {
      navigation.navigate(screenName);
    }
  };
  // const navigateToXemDiem = () => {
  //   navigation.navigate('xemdiem'); // Điều hướng đến màn hình "XemDiem"
  // };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.v1}>
        <Pressable style={styles.bd1}></Pressable>
        <View style={styles.bd2Row}>
          <Pressable
            style={styles.bd2}
            onPress={() => {
              
              navigation.navigate('XemLich');
            }}
          >
            <Image style={styles.calendar} source={require('../image/calender.PNG')}></Image>
            <Text style={styles.txtcalendar}>Xem Lịch</Text>
          </Pressable>
          <Pressable
            style={styles.bd2}
            onPress={() => {
              
              navigation.navigate('XemDiem');
            }}
          >
            <Image style={styles.xemdiem} source={require('../image/xemdiem.PNG')}></Image>
            <Text style={styles.txtxemdiem}>Xem Điểm</Text>
          </Pressable>
        </View>
      </View>
      <FlatList
        numColumns={4}
        data={DATA}
        renderItem={({ item }) => (
          <Item
            title={item.title}
            icon={item.icon}
            backgroundColor={item.backgroundColor}
            screenName={item.screenName}
            onPress={() => navigateToScreen(item.screenName)}
          />
        )}
        keyExtractor={(item) => item.id}
      />

      
    </SafeAreaView>
  );
};

export default TrangChu;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', 
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
    width: 190,
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: 1,
    
    borderRadius: 10,
    flexDirection: "row",
  },
  bd2Row:{
    flexDirection:"row",
    marginLeft: 10
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