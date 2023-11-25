import React from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Alert } from 'react-native';

const ForgotPassword = () => {
  const handleResetPassword = () => {
    
    Alert.alert('Thông báo', 'Một liên kết đặt lại mật khẩu đã được gửi đến email của bạn.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Quên mật khẩu</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập địa chỉ email của bạn"
        keyboardType="email-address"
      />
      <Pressable style={styles.resetButton} onPress={handleResetPassword}>
        <Text style={styles.resetButtonText}>Đặt lại mật khẩu</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    padding: 10,
  },
  resetButton: {
    backgroundColor: '#047bfd',
    borderRadius: 8,
    padding: 10,
  },
  resetButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ForgotPassword;
