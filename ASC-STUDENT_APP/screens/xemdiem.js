import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
//import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

//cài
//npm install @react-navigation/material-top-tabs react-native-tab-view
//npm install @react-navigation/material-bottom-tabs react-native-paper react-native-vector-icons

const Tab = createMaterialTopTabNavigator();

function Tongquan() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tổng quan</Text>
      
    </View>
  );
}

function Tongket() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tổng kết học kỳ</Text>
      
    </View>
  );
}

function Chitiet() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chi tiết điểm</Text>
      
    </View>
  );
}

const GradeNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tổng Quan" component={Tongquan} />
      <Tab.Screen name="Tổng Kết" component={Tongket} />
      <Tab.Screen name="Chi Tiết" component={Chitiet} />
    </Tab.Navigator>
    
  );
};

export default function GradeScreen() {
  return (
    
    <NavigationContainer>
      <GradeNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  
});
