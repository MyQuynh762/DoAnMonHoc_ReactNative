import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const Data = [
  {
    title: 'Lịch học - lịch thi',
    dateRange: '2/10/2023 - 8/10/2023',
    days: [
      {
        day: 'Thứ 3',
        date: '3/10/2023',
        courses: [
          {
            time: 'Tiết 1-3',
            courseName: 'DHKTPM16CTT: Đảm bảo chất lượng và Kiểm thử phần mềm (Thực hành)',
            group: 'Nhóm: 2',
            room: 'Phòng: H5.1.2',
            lecturer: 'Giảng viên: Đặng Thị Thu Hà',
          },
          {
            time: 'Tiết 4-5',
            courseName: 'DHKTPM16CTT: Đảm bảo chất lượng và Kiểm thử phần mềm (Lý thuyết)',
            group: 'Nhóm: 1',
            room: 'Phòng: B3.02',
            lecturer: 'Từ sĩ số : 1->25',
          },
        ],
      },
      {
        day: 'Thứ 4',
        date: '4/10/2023',
        courses: [
          {
            time: 'Tiết 1-3',
            courseName: 'DHKHMT17BTT: Automat & ngôn ngữ hình thức (Lý thuyết)',
            room: 'Phòng: B4.04 ',
            lecturer: 'Giảng viên: Nguyễn Thị Thanh Bình',
          },
        ],
      },
      {
        day: 'Thứ 6',
        date: '6/10/2023',
        courses: [
          {
            time: 'Tiết 4-6',
            courseName: 'DHKHMT16CTT: Lập trình thiết bị di động (Thực hành)',
            group: 'Nhóm: 1',
            room: 'Phòng: H5.1.2 ',
            lecturer: 'Giảng viên: Nguyễn Trọng Tiến',
          },
        ],
      },

      {
        day: 'Thứ 7',
        date: '7/10/2023',
        courses: [
          {
            time: 'Tiết 7-9',
            courseName: 'DHKHMT16CTT: Lập trình thiết bị di động (Lý thuyết)',
            room: 'Phòng: V10.01 ',
            lecturer: 'Giảng viên: Nguyễn Trọng Tiến',
          },
        ],
      },

    ],
  },
];

const XemLich = () => {
  const navigation = useNavigation();

  const renderCourseItem = ({ item }) => (
    <View style={styles.courseItem}>
      <Text style={styles.courseTime}>{item.time}</Text>
      <Text style={styles.courseInfo}>{item.courseName}</Text>
      <Text style={styles.courseInfo}>{item.group}</Text>
      <Text style={styles.courseInfo}>{item.room}</Text>
      <Text style={styles.courseInfo}>{item.lecturer}</Text>
    </View>
  );

  const renderDayItem = ({ item }) => (
    <View style={styles.dayItem}>
      <View style={styles.dayHeader}>
        <Text style={styles.dayTitle}>{item.day}</Text>
        <Text style={styles.dayDate}>{item.date}</Text>
      </View>
      <FlatList
        data={item.courses}
        renderItem={renderCourseItem}
        keyExtractor={(course, index) => index.toString()}
      />
    </View>
  );
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <View style={styles.headerContainer}>
          <View style={styles.backButtonContainer}>
            <Icon name="arrow-left" size={20} />
            <Text style={styles.backButton}> lịch học-lịch thi</Text>
          </View>
          <Icon name="calendar" size={20} />
        </View>
      </TouchableOpacity>
      <View style={styles.centeredTextContainer}>
        <Text style={styles.title}>{Data[0].title}</Text>
        <Text style={styles.dateRange}>{Data[0].dateRange}</Text>
      </View>
      <FlatList
        data={Data[0].days}
        renderItem={renderDayItem}
        keyExtractor={(day, index) => index.toString()}
      />
    </View>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#E0FFFF',
  },
  backButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  backButton: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  icon: {
    fontSize: 30,
  },
  
  centeredTextContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  dateRange: {
    fontSize: 16,
  },
  dayItem: {
    marginBottom: 20,
  },
  dayHeader: {
    
    alignItems: 'center', 
    marginBottom: 10,
  },
  
  
  dayTitle: {
    fontSize: 16,
    
  },
  courseItem: {
    marginBottom: 20,
  },
  courseTime: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  courseInfo: {
    fontSize: 16,
  },
});

export default XemLich;
