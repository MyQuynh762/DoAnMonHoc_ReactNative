// TrangChu.js
import React from 'react';
import { View, Text, Image } from 'react-native';

function TrangChu() {
  return (
    <View>
      <Text>Trang Chủ</Text>
    </View>
  );
}

TrangChu.navigationOptions = {
  tabBarLabel: 'Trang Chủ',
  tabBarIcon: ({ focused, color, size }) => (
    <Image
    source={require('../Icons/home.png')}
    style={{ width: 50, height: 50, tintColor: color }}
    />

  ),
};

export default TrangChu;
