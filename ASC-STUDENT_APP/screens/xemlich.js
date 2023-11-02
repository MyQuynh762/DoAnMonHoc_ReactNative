import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const scheduleData = [
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
        lecturer: 'Từ sĩ số : 1>25',
      },
    ],
  },
  // Thêm thông tin lịch học và lịch thi khác tại đây
];

const ScheduleScreen = () => {
  const renderCourseItem = ({ item }) => (
    <View style={styles.courseItem}>
      <Text style={styles.courseTime}>{item.time}</Text>
      <Text style={styles.courseName}>{item.courseName}</Text>
      <Text style={styles.courseGroup}>{item.group}</Text>
      <Text style={styles.courseRoom}>{item.room}</Text>
      <Text style={styles.courseLecturer}>{item.lecturer}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lịch học - lịch thi</Text>
      <Text style={styles.dateRange}>2/10/2023 - 8/10/2023</Text>
      <FlatList
        data={scheduleData}
        renderItem={renderCourseItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dateRange: {
    fontSize: 16,
    marginBottom: 10,
  },
  courseItem: {
    marginBottom: 20,
  },
  courseTime: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  courseName: {
    fontSize: 16,
  },
  courseGroup: {
    fontSize: 16,
  },
  courseRoom: {
    fontSize: 16,
  },
  courseLecturer: {
    fontSize: 16,
  },
});

export default ScheduleScreen;
