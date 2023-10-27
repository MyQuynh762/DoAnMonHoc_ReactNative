import * as React from 'react';
import Login from './screens/loginScreen';
import TrangChu from './screens/trangchu';
import NhacNho from './screens/nhacnho';
import DiemDanh from './screens/diemdanh';
import TaiKhoan from './screens/taikhoan';
import GopY from './screens/gopy';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
   <Stack.Screen name="HomeScreen " component={Login}  options={{ headerShown: false }} /> 
    <Stack.Screen name="trangchu" component={TrangChu} options={{ headerShown: false}}/>
    <Stack.Screen name="nhacnho" component={NhacNho} options={{ headerShown: true}}/>
    <Stack.Screen name="gopy" component={GopY} options={{ headerShown: true}}/>
    <Stack.Screen name="taikhoan" component={TaiKhoan} options={{ headerShown: true}}/>
    <Stack.Screen name="diemdanh" component={DiemDanh} options={{ headerShown: true}}/>

  </Stack.Navigator>
 
 </NavigationContainer>

  
  );
}



