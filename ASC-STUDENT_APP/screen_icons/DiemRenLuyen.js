import { Text, SafeAreaView, StyleSheet, View, Pressable } from 'react-native';


export default function DiemRenLuyen() {
  return (
    <SafeAreaView style={styles.container}>
      <View  style={styles.v1}>
      <Text  style={styles.t1}>HK2(2022-2023)</Text>
      <Pressable  style={styles.p1}>
          <Text  style={styles.t2}> 68.00-Khá</Text>
       </Pressable>
      </View>

      <View  style={styles.v1}>
      <Text  style={styles.t1}>HK1(2022-2023)</Text>
      <Pressable  style={styles.p1}>
          <Text  style={styles.t2}> 68.00-Khá</Text>
       </Pressable>
      </View>

      <View  style={styles.v1}>
      <Text  style={styles.t1}>HK2(2021-2022)</Text>
      <Pressable  style={styles.p1}>
          <Text  style={styles.t2}> 68.00-Khá</Text>
       </Pressable>
      </View>

       <View  style={styles.v1}>
      <Text  style={styles.t1}>HK1(2021-2022)</Text>
      <Pressable  style={styles.p2}>
          <Text  style={styles.t3}> 80.20-Tốt</Text>
       </Pressable>
      </View>

      <View  style={styles.v1}>
      <Text  style={styles.t1}>HK2(2021-2022)</Text>
      <Pressable  style={styles.p4}>
          <Text  style={styles.t4}> 77.00-Khá</Text>
       </Pressable>
      </View>

       <View  style={styles.v1}>
      <Text  style={styles.t1}>HK1(2021-2022)</Text>
      <Pressable  style={styles.p5}>
          <Text  style={styles.t5}> 72.00-Khá</Text>
       </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex:1,
    backgroundColor: '#ecf0f1',
    
  },
  v1:{
    flexDirection:"row",
    margin: 10
  },
  
  p1:{
    height: 70,
    width: 180,
    backgroundColor:"#6699FF",
    marginLeft:10
  },
  t1:{
    marginTop: 30,
    fontSize: 18,
  },
  t2:{
    marginTop: 20,
    marginLeft:90
  },
  p2:{
    height: 70,
    width: 220,
    backgroundColor:"#6699FF",
    marginLeft:10

  },
  t3:{
    marginTop: 30,
    marginLeft:140
  },
  p4:{
    height: 70,
    width: 200,
    backgroundColor:"#6699FF",
    marginLeft:10

  },
  t4:{
    marginTop: 30,
    marginLeft:120
  },
    p5:{
    height: 70,
    width: 190,
    backgroundColor:"#6699FF",
    marginLeft:10

  },
  t5:{
    marginTop: 30,
    marginLeft:110
  },


});
