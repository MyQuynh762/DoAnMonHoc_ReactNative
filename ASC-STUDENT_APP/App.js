import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home';
import LoginScreen from './screens/loginScreen'; 
// import DoiMatKhau from './screens/DoiMatKhau'; 
// import DiemDanh from './screens2/diemdanh';
import TrangChu from './screens2/trangchu'; 
import XemLich from './screens/xemlich';
import XemDiem from './screens/xemdiem';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }}/>
        {/* <Stack.Screen name="DoiMatKhau" component={DoiMatKhau} /> */}
        <Stack.Screen name="TrangChu" component={TrangChu}options={{ headerShown: false }}  />
        <Stack.Screen name="XemLich" component={XemLich} options={{ headerShown: false }} />
        <Stack.Screen name="XemDiem" component={XemDiem} />
      </Stack.Navigator>
    </NavigationContainer>
        // <Home></Home>
        
       

  );
}

export default App;
