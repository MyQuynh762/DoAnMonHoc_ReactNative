
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,Image } from 'react-native';

function DoiMatKhau({ navigation }) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleChangePassword = () => {
    
    navigation.goBack();
  };

  return (
    <View style={styles.container}>

      <Image source={ require("../image/doimatkhau.PNG")} style={styles.im1}></Image>
      <Text style={styles.label}>Mật khẩu hiện tại:</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        value={currentPassword}
        onChangeText={setCurrentPassword}
      />
      <Text style={styles.label}>Mật khẩu mới:</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <Button title="Thay đổi mật khẩu" onPress={handleChangePassword} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginTop: 8,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginTop: 8,
    paddingLeft: 8,
  },
  im1:{
    height: 300,
    width: 390,
    
    //resizeMode: 'contain',
    //marginTop: 55,
},
});

export default DoiMatKhau;
