import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/home';
import LoginScreen from './screens/loginScreen'; 
// import DoiMatKhau from './screens/DoiMatKhau'; 
// import DiemDanh from './screens2/diemdanh';
import TrangChu from './screens2/trangchu'; 
import XemLich from './screens2/xemlich';
//import XemDiem from './screens2/xemdiem';


// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import ChuongTrinhKhung from './screen_icons/ChuongTrinhKhung'; 
// import CongNo from './screen_icons/CongNo';
// import DiemRenLuyen from './screen_icons/DiemRenLuyen'; 
// import DoiMatKhau from './screen_icons/DoiMatKhau';
// import KhaoSat from './screen_icons/KhaoSat'; 
// import MauDon from './screen_icons/MauDon';
// import PhieuThu from './screen_icons/PhieuThu'; 
// import QuangCao from './screen_icons/QuangCao';
// import ThanhTich from './screen_icons/ThanhTich';
// import ThongKeDiemDanh from './screen_icons/ThongKeDiemDanh'; 
// import TinTuc from './screen_icons/TinTuc';
// import NhacNho from './screens2/nhacnho';



const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }}/>
        {/* <Stack.Screen name="DoiMatKhau" component={DoiMatKhau} /> */}
        <Stack.Screen name="TrangChu" component={TrangChu}options={{ headerShown: false }}  />
        <Stack.Screen name="XemLich" component={XemLich} options={{ headerShown: false }} />
        
        
      </Stack.Navigator>
      
    </NavigationContainer>
        // <Home></Home>
        // <TaiKhoan></TaiKhoan>
        // <TrangChu></TrangChu>
        // <XemDiem></XemDiem>
        // <XemLich></XemLich>
       

  );
}

export default App;
