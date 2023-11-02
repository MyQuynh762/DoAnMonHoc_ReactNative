import React from 'react';
import {SafeAreaView,View,FlatList,StyleSheet,Text,StatusBar,Pressable,Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import TrangChu from '../screens2/trangchu';
import NhacNho from '../screens2/nhacnho';
import DiemDanh from '../screens2/diemdanh';
import GopY from '../screens2/gopy';
import TaiKhoan from '../screens2/taikhoan';

const Tab = createBottomTabNavigator();
function home() {
    return (
      <Tab.Navigator>
      <Tab.Screen name="TrangChu" component={TrangChu}  options={{ headerShown: false }} />
      <Tab.Screen name="NhacNho" component={NhacNho}  options={{ headerShown: false }}/>
      <Tab.Screen name="DiemDanh" component={DiemDanh}  options={{ headerShown: false }}/>
      <Tab.Screen name="GopY" component={GopY}  options={{ headerShown: false }}/>
      <Tab.Screen name="TaiKhoan" component={TaiKhoan}  options={{ headerShown: false }}/>
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  
   
    
  
});
export default home;