import React, { useState } from 'react';
import { View, Text , StyleSheet, Pressable} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const Sc3 = () => {
    const [selectedValue, setSelectedValue] = useState(null);
  
    const data = [
      { label: 'Học kì 1 2020-2021',
        value: 'option1', 
        muchocphi :'11.000.000',
        danop:'11.000.000',
        khautru:'0',
        congno:'0'

         },
      { label: 'Học kì 2 2020-2021',
       value: 'option2', 
       muchocphi :'18.700.000',
       danop:'18.700.000',
       khautru:'0',
       congno:'0'

        },
      { label: 'Học kì 1 2021-2022', 
      value: 'option3', 
      muchocphi :'21.900.000',
      danop:'21.900.000',
      khautru:'0',
      congno:'0'

       },
      { label: 'Học kì 2 2021-2022',
       value: 'option4', 
       muchocphi :'13.700.000',
       danop:'13.700.000',
       khautru:'0',
       congno:'0'

        },
      { label: 'Học kì 1 2022-2023', 
        value: 'option5',
        muchocphi :'18.000.000',
        danop:'18.000.000',
        khautru:'0',
        congno:'0'

         },
      { label: 'Học kì 2 2022-2023',
       value: 'option6', 
       muchocphi :'21.600.000',
       danop:'21.600.000',
       khautru:'0',
       congno:'0'

        },
      { label: 'Học kì 1 2023-2024', 
      value: 'option7', 
      muchocphi :'18.300.000',
      danop:'18.300.000',
      khautru:'0',
      congno:'0'

       },
      { label: 'Học kì 2 2023-2024', 
      value: 'option8', 
      muchocphi :'11.100.000',
      danop:'11.100.000',
      khautru:'0',
      congno:'0'

       },
    
    ];
    const selectedOption = data.find((option) => option.value === selectedValue);
  
    return (
      <View style={styles.container}>
        <Pressable  style={styles.piker}>
        <RNPickerSelect
          onValueChange={(value) => setSelectedValue(value)}
          items={data}
          placeholder={{ label: 'Chọn học kì', value: null }}
        />
        <View style={styles.v1}>
            <Text style={styles.t1}>Mức học phí</Text>
            <Text style={styles.t1}>Đã nộp</Text>
            <Text style={styles.t1}>Khấu trừ</Text>
            <Text style={styles.t1}>Công nợ</Text>

        </View>

        </Pressable>
       
  
        {selectedOption && (
            <View>
            <View style={styles.v2}>
            <Text style={styles.tt1}>{selectedOption.muchocphi}</Text>
            <Text  style={styles.tt1}>{selectedOption.danop}</Text>
            <Text  style={styles.tt1}>{selectedOption.khautru}</Text>
            <Text  style={styles.tt2}>{selectedOption.congno}</Text>

            </View>

            <Pressable style={styles.p1}>
            <Text style={styles.tt3}>Tổng công nợ</Text>
            <Text  style={styles.tt4}>0</Text>

            </Pressable>

            </View>
          
        
         
        )}
      </View>
    );
  };
  const styles=StyleSheet.create({
    container:{
        
    },
    piker:{
        height:70,
        width: 390,
        backgroundColor:"#4B7EFF"
    },
    v1:{
        flexDirection:"row",
        margin: 10,
    },
    t1:{
        marginLeft: 30,
        color:"white"
    },
    v2:{
        flexDirection:"row",
        margin: 10
    },
    tt1:{
        marginLeft: 30
        

    },
    tt2:{
        marginLeft: 80

    },

    p1:{
        height: 50,
        width:390,
        backgroundColor:"#4B7EFF",
        color:"white",
        flexDirection:"row",
        marginTop: 450

    },
    tt3:{
        margin:20,
        marginLeft: 30,
        color:"white"

    },
    tt4:{
        margin:20,
        marginLeft: 205,
        color:"white"

    }

  })
  
  export default Sc3;