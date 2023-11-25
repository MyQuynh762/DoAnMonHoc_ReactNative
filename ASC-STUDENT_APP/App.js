import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/home';
import LoginScreen from './screens/loginScreen'; 
import Feedback from './screens/Feedback';
import TrangChu from './screens2/trangchu'; 
import XemLich from './screen_icons/xemlich';
import XemDiem from './screen_icons/xemdiem';
import ForgotPassword from './screens/ForgotPassword';

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
import TinTucSuKien from './screen_icons/TinTucSuKien';
import ThongTinGioHoc from './screen_icons/ThongTinGioHoc';
import xemchiTietHoaDon from './screens2/xemchiTietHoaDon';




const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }}/>
        <Stack.Screen name="TrangChu" component={TrangChu}options={{ headerShown: false } }  />
        <Stack.Screen name="XemLich" component={XemLich} options={{ headerShown: false }} />
        <Stack.Screen name="XemDiem" component={XemDiem} options={{ headerShown: false }} />
        <Stack.Screen name="Feedback" component={Feedback} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        
        <Stack.Screen name="Đổi password" component={DoiMatKhau}  />
        <Stack.Screen name="Chương trình khung" component={ChuongTrinhKhung}  />
        <Stack.Screen name="Công Nợ" component={CongNo}  />
        <Stack.Screen name="Điểm Rèn luyện" component={DiemRenLuyen}  />
        <Stack.Screen name="Khảo sát" component={KhaoSat}  />
        <Stack.Screen name="Mẫu đơn" component={MauDon}  />
        <Stack.Screen name="Phiếu Thu" component={PhieuThu}  />
        <Stack.Screen name="Quảng cáo" component={QuangCao}  />
        <Stack.Screen name="Thành Tích" component={ThanhTich}  />
        <Stack.Screen name="Thống kê điểm danh" component={ThongKeDiemDanh}  />
        <Stack.Screen name="Tin Tức" component={TinTuc}  />
        <Stack.Screen name="Nhắc Nhở" component={NhacNho1}  />

        
        <Stack.Screen name="Tin Tức-Sự Kiện" component={TinTucSuKien}  />
        <Stack.Screen name="Thông tin giờ học" component={ThongTinGioHoc}  />
        <Stack.Screen name="Quay lại" component={xemchiTietHoaDon}  options={{ headerShown: true}} />

      </Stack.Navigator>
      
     </NavigationContainer>
  
    
       
     

  );
}

export default App;
