

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Trang chu"
        component={TrangChu}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../Icons/home.png')} 
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="NhacNho"
        component={NhacNho}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../Icons/nhacnho.png')} 
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Diem danh"
        component={DiemDanh}
        // options={{
        //   tabBarIcon: ({ color, size }) => (
        //     <Image
        //       source={require('../Icons/diemdanh.png')} 
        //       style={{ width: size, height: size, tintColor: color }}
        //     />
        //   ),
        // }}
      />
      <Tab.Screen
        name="Gop y"
        component={GopY}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../Icons/gopy.png')} 
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Tai Khoan"
        component={TaiKhoan}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../Icons/taikhoan.png')} 
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
}