import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home'; // Đảm bảo đường dẫn đúng
import LoginScreen from './screens/loginScreen'; // Đảm bảo đường dẫn đúng
import DoiMatKhau from './screens/DoiMatKhau'; // Đảm bảo đường dẫn đúng
import DiemDanh from './screens2/diemdanh';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }}/>
        {/* <Stack.Screen name="DoiMatKhau" component={DoiMatKhau} /> */}
      </Stack.Navigator>
    </NavigationContainer>
        // <Home></Home>
        
       

  );
}

export default App;
