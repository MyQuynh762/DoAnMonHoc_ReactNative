import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, Modal, FlatList, TouchableOpacity, Alert } from 'react-native';
import Feedback from '../screens/Feedback';
import ForgotPassword from '../screens/ForgotPassword'; 
export default function Login({ navigation }) {
  

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedSchool, setSelectedSchool] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [schoolSelected, setSchoolSelected] = useState(false);
  const [error, setError] = useState(null);

  const schools = [
    { id: '1', 
      name: 'Trường Đại học Công Nghiệp Thành phố Hồ Chí Minh' 
    },
    { id: '2', 
      name: 'Trường Đại học Quốc gia Thành phố Hồ Chí Minh' 
    },
    { id: '3', 
      name: 'Trường Đại học Kinh tế Thành phố Hồ Chí Minh' 
    },
    { id: '4', 
      name: 'Trường Đại học Bách Khoa (ĐHQG TP.HCM)' 
    },
    { id: '5', 
      name: 'Trường Đại học Công Nghệ Thành phố Hồ Chí Minh' 
    },
    { id: '5', 
      name: 'Trường Đại học Giao thông vận tải Thành phố Hồ Chí Minh' 
    },
    { id: '6', 
      name: 'Trường Đại học Công Thương Thành phố Hồ Chí Minh' 
    },
    { id: '7', 
      name: 'Trường Đại học Kinh Tế-Luật Thành phố Hồ Chí Minh (ĐHQG TP.HCM)' 
    },
    { id: '8', 
      name: 'Trường Đại học Kiến Trúc Thành phố Hồ Chí Minh' 
    },
    { id: '9', 
      name: 'Trường Đại học Khoa học Xã hội và Nhân văn và Thành phố Hồ Chí Minh (ĐHQG TP.HCM)' 
    },
    { id: '10', 
      name: 'Trường Đại học Lao Động Thành phố Hồ Chí Minh' 
    },
    { id: '11', 
      name: 'Trường Đại học Luật Thành phố Hồ Chí Minh' 
    },
    { id: '12', 
      name: 'Trường Đại học Mỹ Thuật Thành phố Hồ Chí Minh' 
    },
    { id: '13', 
      name: 'Trường Đại học Mở Thành phố Hồ Chí Minh' 
    },
    { id: '14', 
      name: 'Trường Đại học Ngân hàng Thành phố Hồ Chí Minh' 
    },
    { id: '15', 
      name: 'Trường Đại học Quốc tế Thành phố Hồ Chí Minh (ĐHQG TP.HCM)' 
    },
  ];

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      setUsername('');
      setPassword('');
      setSelectedSchool('');
      setSchoolSelected(false);
      setError(null);
    });

    return unsubscribe;
  }, [navigation]);

  const openDropdown = () => {
    setModalVisible(true);
  };

  const selectSchool = (school) => {
    setSelectedSchool(school.name);
    setSchoolSelected(true);
    setModalVisible(false);
  };

  const handleLogin = async () => {
    let loginError = null;

    if (!selectedSchool) {
      loginError = 'Vui lòng chọn trường.';
    } else if (!username) {
      loginError = 'Vui lòng nhập tên người dùng.';
    } else if (!password) {
      loginError = 'Vui lòng nhập mật khẩu.';
    }

    if (!loginError) {
      try {
        const response = await fetch('https://65576266bd4bcef8b61287d2.mockapi.io/User');
        const users = await response.json();

        const user = users.find(
          (user) => user.username === username && user.password === password && user.school === selectedSchool
        );

        if (user) {
          navigation.navigate('Home');
        } else {
          loginError = 'Thông tin đăng nhập không đúng. Vui lòng kiểm tra lại.';
        }
      } catch (fetchError) {
        console.error('Lỗi khi đăng nhập:', fetchError);
        loginError = 'Đã có lỗi xảy ra. Vui lòng thử lại sau.';
      }
    }

    setError(loginError);

    if (loginError) {
      Alert.alert('Lỗi đăng nhập', loginError);
    }
  };
  const handleForgotPassword = () => {
    
    navigation.navigate('ForgotPassword');
  };
  const handleFeedback = () => {
    
    navigation.navigate('Feedback');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../image/logo.png")} />

      <View style={styles.loginContainer}>
        <View style={styles.selectSchoolContainer}>
          <Pressable style={styles.selectSchool} onPress={openDropdown}>
            <Image style={styles.homeIcon} source={require("../image/home1.png")} />
            <Text style={styles.nameSchool}>{selectedSchool || 'Chọn trường'}</Text>
            <Text style={styles.threeDots}>⋮</Text>
          </Pressable>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <FlatList
                  style={{ maxHeight: 300 }}
                  data={schools}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.dropdownItem}
                      onPress={() => selectSchool(item)}
                      activeOpacity={0.7}
                    >
                      <Text style={styles.dropdownText}>{item.name}</Text>
                    </TouchableOpacity>
                  )}
                />
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Đóng</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>

        <TextInput
          style={styles.input}
          onChangeText={(text) => setUsername(text)}
          placeholder="Nhập tài khoản"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            onChangeText={(text) => setPassword(text)}
            placeholder="Nhập mật khẩu"
            secureTextEntry={!showPassword}
          />
          <Pressable onPress={() => setShowPassword(!showPassword)} style={styles.eyeIconContainer}>
            <Image
              style={styles.eyeIcon}
              source={showPassword ? require("../image/eye-open.png") : require("../image/eye-closed.png")}
            />
          </Pressable>
        </View>

        <Pressable style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>ĐĂNG NHẬP</Text>
        </Pressable>

        <View style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPasswordText} onPress={handleForgotPassword}>Quên mật khẩu ?</Text>
        <Text style={styles.feedbackText} onPress={handleFeedback}>Góp ý - Phản hồi</Text>
        </View>

        <View style={styles.footerContainer}>
            <Text style={styles.footerText}>Điều khoản sử dụng và chính sách ASC</Text>
            <Text style={styles.footerText}>asc.com.vn</Text>
        </View>
        
        {error && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 70,
    width: 330,
    marginTop: 40,
  },
  loginContainer: {
    alignItems: 'center',
    width: '80%',
  },
  selectSchoolContainer: {
    position: 'relative',
    width: '100%',
    marginBottom: 20,
  },
  selectSchool: {
    height: 70,
    width: '100%',
    borderColor: 'gray',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  threeDots: {
    marginLeft: 'auto',
    fontSize: 20,
    color: 'gray',
  },
  homeIcon: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  nameSchool: {
    color: 'gray',
    fontFamily: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  dropdownItem: {
    padding: 15,
  },
  dropdownText: {
    fontSize: 18,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 10,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  passwordContainer: {
    position: 'relative',
    width: '100%',
    marginTop: 20,
  },
  passwordInput: {
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 20,
  },
  eyeIconContainer: {
    position: 'absolute',
    top: 12,
    right: 20,
  },
  eyeIcon: {
    height: 24,
    width: 24,
  },
  loginButton: {
    height: 50,
    width: '100%',
    backgroundColor: '#047bfd',
    borderRadius: 10,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  forgotPasswordText: {
    color: '#047bfd',
    fontSize: 16,
  },
  feedbackText: {
    color: '#047bfd',
    fontSize: 16,
  },
  footerContainer: {
    flexDirection: 'column',
    marginTop: 50,
  },
  footerText: {
    textAlign: 'center',
    fontFamily: 'arial',
    fontSize: 17,
    color: 'gray',
  },
  errorContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    backgroundColor: '#FF6363',
    borderRadius: 10,
    padding: 10,
  },
  errorText: {
    color: 'white',
    fontSize: 16,
  },
});

