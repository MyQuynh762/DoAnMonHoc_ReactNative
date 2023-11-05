import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/home';
import LoginScreen from './screens/loginScreen'; 

import TrangChu from './screens2/trangchu'; 
import XemLich from './screen_icons/xemlich';
import XemDiem from './screen_icons/xemdiem';



import ChuongTrinhKhung from './screen_icons/ChuongTrinhKhung'; 
import CongNo from './screen_icons/CongNo';
import DiemRenLuyen from './screen_icons/DiemRenLuyen'; 
import DoiMatKhau from './screen_icons/DoiMatKhau';
import KhaoSat from './screen_icons/KhaoSat'; 
import MauDon from './screen_icons/MauDon';
import PhieuThu from './screen_icons/PhieuThu'; 
import QuangCao from './screen_icons/QuangCao';
import ThanhTich from './screen_icons/ThanhTich';
import ThongKeDiemDanh from './screen_icons/ThongKeDiemDanh'; 
import TinTuc from './screen_icons/TinTuc';
import NhacNho1 from './screen_icons/nhacnho1';



const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }}/>
        <Stack.Screen name="TrangChu" component={TrangChu}options={{ headerShown: false }}  />
        <Stack.Screen name="XemLich" component={XemLich} options={{ headerShown: false }} />
        <Stack.Screen name="XemDiem" component={XemDiem} options={{ headerShown: false }} />
        
        
        
        <Stack.Screen name="DoiMatKhau" component={DoiMatKhau}  />
        <Stack.Screen name="ChuongTrinhKhung" component={ChuongTrinhKhung}  />
        <Stack.Screen name="CongNo" component={CongNo}  />
        <Stack.Screen name="DiemRenLuyen" component={DiemRenLuyen}  />
        <Stack.Screen name="KhaoSat" component={KhaoSat}  />
        <Stack.Screen name="MauDon" component={MauDon}  />
        <Stack.Screen name="PhieuThu" component={PhieuThu}  />
        <Stack.Screen name="QuangCao" component={QuangCao}  />
        <Stack.Screen name="ThanhTich" component={ThanhTich}  />
        <Stack.Screen name="ThongKeDiemDanh" component={ThongKeDiemDanh}  />
        <Stack.Screen name="TinTuc" component={TinTuc}  />
        <Stack.Screen name="NhacNho1" component={NhacNho1}  />
      </Stack.Navigator>
      
    </NavigationContainer>
        
       

  );
}

export default App;
