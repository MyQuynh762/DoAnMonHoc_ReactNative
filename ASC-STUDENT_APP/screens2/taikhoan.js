import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, View, Pressable } from 'react-native';

const TaiKhoan = () => {
  const [userData, setUserData] = useState(null);


  const fetchUserData = async () => {
    try {
      const response = await fetch('https://65576266bd4bcef8b61287d2.mockapi.io/User');
      const data = await response.json();
      setUserData(data[0]); // Lấy dữ liệu người dùng đầu tiên từ danh sách
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu người dùng:', error);
    }
  };
  
  useEffect(() => {
    fetchUserData();
  }, []);

  const handleLogout = () => {
    navigation.navigate('Login');
  };


  
  return (
    <View style={styles.container}>
      <View style={styles.v}>
        <Text style={styles.text1}>Thông tin sinh viên</Text>
        <View style={styles.vimg}></View>
        <Text style={styles.text2}>{userData?.nd || ''}</Text>
      </View>

      <ScrollView>
        <View style={styles.v2}>
          {userData && (
            <>
              <View style={styles.textSc}>
                <Text>Trạng thái:</Text>
                <Text style={styles.textSc2}>{userData.trangThai}</Text>
              </View>

              <View style={styles.textSc}>
                <Text>Giới tính:</Text>
                <Text style={styles.textSc4}>{userData.gioiTinh}</Text>
              </View>

              <View style={styles.textSc}>
                <Text>MSSV:</Text>
                <Text style={styles.textSc5}>{userData.mssv}</Text>
              </View>

              <View style={styles.textSc}>
                <Text>Lớp:</Text>
                <Text style={styles.textSc6}>{userData.lop}</Text>
              </View>

              <View style={styles.textSc}>
                <Text>Bậc đào tạo:</Text>
                <Text style={styles.textSc7}>{userData.bacDaoTao}</Text>
              </View>

              <View style={styles.textSc}>
                <Text>Khoa:</Text>
                <Text style={styles.textSc8}>{userData.khoa}</Text>
              </View>

              <View style={styles.textSc}>
                <Text>Chuyên ngành:</Text>
                <Text style={styles.textSc9}>{userData.chuyenNganh}</Text>
              </View>

              <View style={styles.textSc}>
                <Text>Số điện thoại:</Text>
                <Text style={styles.textSc10}>{userData.soDienThoai}</Text>
              </View>

              <View style={styles.textSc}>
                <Text>Nơi sinh:</Text>
                <Text style={styles.textSc11}>{userData.noiSinh}</Text>
              </View>

              <Pressable style={styles.btn} onPress={handleLogout}>
                <Text style={styles.tbtn}>Đăng Xuất</Text>
              </Pressable>
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'tahoma',
    fontSize: 15,
  },
  v: {
    flexDirection: 'column',
    height: 200,
    width: 390,
    backgroundColor: '#047bfd',
  },
  vimg: {
    height: 100,
    width: 100,
    backgroundColor: 'white',
    marginLeft: 140,
    marginTop: 20,
    borderRadius: 100,
  },
  text1: {
    marginLeft: 110,
    marginTop: 10,
    fontSize: 17,
    color: 'white',
  },
  text2: {
    marginLeft: 120,
    marginTop: 10,
    fontSize: 17,
    color: 'white',
  },
  v2: {
    flexDirection: 'column',
  },
  textSc: {
    flexDirection: 'row',
    marginLeft: 10,
    borderBottomColor: 'gray',
    borderWidth: 1,
    borderColor: 'white',
    padding: 20,
    width: 360,
  },
  textSc2: {
    marginLeft: 70,
  },
  textSc4: {
    marginLeft: 80,
  },
  textSc5: {
    marginLeft: 90,
  },
  textSc6: {
    marginLeft: 100,
  },
  textSc7: {
    marginLeft: 50,
  },
  textSc8: {
    marginLeft: 100,
  },
  textSc9: {
    marginLeft: 50,
  },
  textSc10: {
    marginLeft: 50,
  },
  textSc11: {
    marginLeft: 80,
  },
  btn: {
    height: 60,
    width: 330,
    backgroundColor: '#047bfd',
    marginLeft: 30,
    marginTop: 20,
    borderRadius: 20,
  },
  tbtn: {
    textAlign: 'center',
    marginTop: 20,
    color: 'white',
    fontSize: 20,
  },
});

export default TaiKhoan;