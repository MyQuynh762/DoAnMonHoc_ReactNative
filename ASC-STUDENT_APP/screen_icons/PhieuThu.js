import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, TextInput, FlatList, StyleSheet } from 'react-native';

const url = 'https://65576266bd4bcef8b61287d2.mockapi.io/Phieuthu';

const PhieuThu = ({navigation}) => {
  const [data, setData] = useState([]);
 

  useEffect(() => {
    fetchGhiChu();
  }, []);

  const fetchGhiChu = async () => {
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <View style={styles.v1}>
    <Text style={styles.flat}>{item.soPhieu}</Text>
    <Text style={styles.date}>{item.date}</Text>
    
    </View>
    <View style={styles.v2}>
    <Text style={styles.who}>{item.who}</Text>
     
      </View>
    <View style={styles.v3}>
    <Text style={styles.gia}>{item.soTien}</Text>
    </View>
    <Pressable style={styles.v4} onPress={() => navigation.navigate("Quay lại")}>
    <Text style={styles.note}>{item.note}</Text>
    </Pressable>
    </View>
  );

  return (
   
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    height:100,
    width: 370,
    borderWidth: 1,
    borderColor:'gray',
    marginLeft: 10,
    borderRadius: 20,
    marginTop: 5
  },
 
  v1:{
    flexDirection:"row"
  },
  v2:{
    color:"gray",
    marginTop: 10
  },
  v3:{
    flexDirection:"row",
    color:"gray",
    marginTop: 10
  },
  v4:{
    flexDirection:"row",
    color:"blue",
    marginTop: 20,
    marginLeft: 80
  },
  date:{
    marginLeft:70
  },
  gia:{
    marginLeft:190
  },
  note:{
    color:'blue',
    textAlign:'center'
  }
  
 
 
});

export default PhieuThu;
