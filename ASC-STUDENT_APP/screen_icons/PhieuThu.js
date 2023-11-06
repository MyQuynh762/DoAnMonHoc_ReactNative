import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Số phiếu: 740036',
    date:'27/07/2023 15:53',
    who:'Ngân hàng VietCombank',
    tien:'Số tiền',
    gia:'9.900.000',
    note:'Xem Hóa đơn điện tử'
  },
  {
    id: '2',
    title: 'Số phiếu: 709804',
    date:'29/05/2023 12:47',
    who:'Ngân hàng VietCombank',
    tien:'Số tiền',
    gia:'2.700.000',
    note:'Xem Hóa đơn điện tử'
  },
  {
    id: '3',
    title: 'Số phiếu: 1235560',
    date:'26/09/2023 13:50',
    who:'Ngân hàng VietCombank',
    tien:'Số tiền',
    gia:'21.900.000',
    note:'Xem Hóa đơn điện tử'
  },
  {
    id: '4',
    title: 'Số phiếu: 790036',
    date:'20/07/2023 15:53',
    who:'Ngân hàng VietCombank',
    tien:'Số tiền',
    gia:'11.900.000',
    note:'Xem Hóa đơn điện tử'
  },
  {
    id: '5',
    title: 'Số phiếu: 778036',
    date:'30/12/2022 10:53',
    who:'Phạm Trường Quân',
    tien:'Số tiền',
    gia:'9.000.000',
    note:'Xem Hóa đơn điện tử'
  },
  {
    id: '6',
    title: 'Số phiếu: 740036',
    date:'27/07/2022 15:53',
    who:'Phạm Quế trân',
    tien:'Số tiền',
    gia:'9.900.000',
    note:'Xem Hóa đơn điện tử'
  },
  {
    id: '7',
    title: 'Số phiếu: 740036',
    date:'27/07/2023 15:53',
    who:'Ngân hàng VietCombank',
    tien:'Số tiền',
    gia:'9.900.000',
    note:'Xem Hóa đơn điện tử'
  },
  {
    id: '8',
    title: 'Số phiếu: 740036',
    date:'13/10/2022 15:53',
    who:'Ngân hàng VietCombank',
    tien:'Số tiền',
    gia:'9.900.000',
    note:'Xem Hóa đơn điện tử'
  },
  {
    id: '9',
    title: 'Số phiếu: 740036',
    date:'20/01/2022 14:53',
    who:'Ngân hàng VietCombank',
    tien:'Số tiền',
    gia:'15.900.000',
    note:'Xem Hóa đơn điện tử'
  },
  {
    id: '10',
    title: 'Số phiếu: 740036',
    date:'27/09/2021 08:50',
    who:'Nguyễn Ngọc Trinh',
    tien:'Số tiền',
    gia:'22.900.000',
    note:'Xem Hóa đơn điện tử'
  },
];

type ItemProps = {title: string};

const Item = ({title,date, who, tien, gia, note}: ItemProps) => (
  <View style={styles.item}>
    <View style={styles.v1}>
    <b style={styles.title}>{title}</b>
    <b style={styles.date}>{date}</b>
    </View>
    <View style={styles.v2}>
      <b style={styles.who}>{who}</b>
      </View>
    <View style={styles.v3}>
    <b style={styles.tien}>{tien}</b>
    <b style={styles.gia}>{gia}</b>
    </View>
    <View style={styles.v4}>
      <b style={styles.note}>{note}</b>
    </View>
    
  </View>
);

const PhieuThu = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) =>
         <Item 
         title={item.title}
         date={item.date}
         who={item.who}
         tien={item.tien}
         gia={item.gia}
         note={item.note}
         />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   fontSize:13
  },
  item: {
    backgroundColor: "white",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    height: 140,
    fontFamily:"tahoma",
    borderRadius:10,
    borderColor:"gray",
    borderWidth:1
    
  },
  v1:{
    flexDirection:"row"
  },
  v2:{
    color:"gray",
    marginTop: 10
  },
  v3:{
    flexDirection:"row",
    color:"gray",
    marginTop: 10
  },
  v4:{
    flexDirection:"row",
    color:"blue",
    marginTop: 20,
    marginLeft: 80
  },
  date:{
    marginLeft:70
  },
  gia:{
    marginLeft:190
  },

});

export default PhieuThu;