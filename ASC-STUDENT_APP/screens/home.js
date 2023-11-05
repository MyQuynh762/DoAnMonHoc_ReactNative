import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import TrangChu from '../screens2/trangchu';
import NhacNho from '../screens2/nhacnho';
import DiemDanh from '../screens2/diemdanh';
import GopY from '../screens2/gopy';
import TaiKhoan from '../screens2/taikhoan';
import Icon from 'react-native-vector-icons/FontAwesome'; // Sử dụng FontAwesome làm icons

const Tab = createBottomTabNavigator();

function home() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="TrangChu"
                component={TrangChu}
                options={{
                    tabBarLabel: 'Trang chủ',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" size={size} color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="NhacNho"
                component={NhacNho}
                options={{
                    tabBarLabel: 'Nhắc nhở',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="bell" size={size} color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="DiemDanh"
                component={DiemDanh}
                options={{
                    tabBarLabel: 'Điểm danh',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="list" size={size} color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="GopY"
                component={GopY}
                options={{
                    tabBarLabel: 'Góp ý',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="comments" size={size} color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="TaiKhoan"
                component={TaiKhoan}
                options={{
                    tabBarLabel: 'Tài khoản',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="user" size={size} color={color} />
                    ),
                    headerShown: false,
                }}
            />
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
