import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const XemDiem = () => {

  const navigation = useNavigation();

  const navigateToHome = () => {
    navigation.navigate('Home');
  };

  const [showContent1, setShowContent1] = useState(false);
  const [showContent2, setShowContent2] = useState(false);
  const [showContent3, setShowContent3] = useState(false);
  const [showContent4, setShowContent4] = useState(false);
  const [showContent5, setShowContent5] = useState(false);
  const [showContent6, setShowContent6] = useState(false);
  const [showContent7, setShowContent7] = useState(false);
  const [showContent8, setShowContent8] = useState(false);
  const [showContent9, setShowContent9] = useState(false);

   

  return (
    <View>
      <TouchableOpacity onPress={navigateToHome}>
        <View style={styles.headerContainer}>
          <View style={styles.backButtonContainer}>
            <Icon name="arrow-left" size={20} />
            <Text style={styles.backButton}>                     Xem Điểm</Text>
          </View>
        </View>
      </TouchableOpacity>
      {/* Học Kì 1 */}
      <View style={styles.header}>



          <Text style={styles.h1}>Mã Môn</Text>
          <Text style={styles.h2}>Tên Môn</Text>
          <Text style={styles.h3}>TC</Text>
          <Text style={styles.h4}>Điểm TB</Text>
          

      </View>
      <TouchableOpacity onPress={() => setShowContent1(!showContent1)}>
        <View style={styles.hk1}>
        <Text style={styles.thk1}>Học Kỳ 1</Text>
      
        </View>
       
      </TouchableOpacity>
      {showContent1 &&
      
        <View style={styles.v1}>
         
          <table>
      <thead style={styles.tb1}>
        
      </thead>
      <tbody>
        <tr style={styles.th1}>
          <td>002150</td>
          <td>Chứng chỉ TOEIC 450</td>
          <td>0</td>
          <td>0</td>
          
        </tr>
        <tr>
          <td>003573</td>
          <td>GD quốc phòng an ninh</td>
          <td>0</td>
          <td>0</td>
          
       
        </tr>
        <tr style={styles.th1}>
         <td>003696</td>
          <td>Giáo dục thể chất 1</td>
          <td>2</td>
          <td>0</td>
          
        </tr>
        <tr>
         <td>003575</td>
          <td>Kỹ năng làm việc nhóm</td>
          <td>2</td>
          <td>0</td>
          
        </tr>
        <tr style={styles.th1}>
         <td>004247</td>
          <td>Nhập môn lập trình</td>
          <td>2</td>
          <td>0</td>
          
        </tr>
        <tr>
         <td>002793</td>
          <td>Nhập môn tin học</td>
          <td>2</td>
          <td>0</td>
          
        </tr>
        <tr style={styles.th1}>
         <td>003801</td>
          <td>Toán cao cấp 1</td>
          <td>2</td>
          <td>0</td>
          
        </tr>
        <tr>
         <td>013801</td>
          <td>Triết học Mác Lenin</td>
          <td>2</td>
          <td>0</td>
          
        </tr>
      </tbody>
    </table>
        </View>
       
      }

      {/* Học Kì 2 */}

      <TouchableOpacity onPress={() => setShowContent2(!showContent2)}>
      <View style={styles.hk1}>
        <Text style={styles.thk1}>Học Kỳ 2</Text>
       
        </View>
      </TouchableOpacity>
      {showContent2 && 
      <View style={styles.v1}>
            
            <table>
        <thead style={styles.tb1}>
        
        </thead>
        <tbody>
          <tr style={styles.th1}>
            <td>002150</td>
            <td>Anh văn 1</td>
            <td>3</td>
            <td>0</td>
            
          </tr>
          <tr>
            <td>003573</td>
            <td>GD quốc phòng an ninh 2</td>
            <td>0</td>
            <td>0</td>
            
            
          </tr>
          <tr style={styles.th1}>
          <td>003696</td>
            <td>Giáo dục thể chất 2</td>
            <td>2</td>
            <td>0</td>
             
          </tr>
          <tr>
          <td>003575</td>
            <td>Hệ thống máy tính</td>
            <td>3</td>
            <td>0</td>
            
  
          </tr>
          <tr style={styles.th1}>
          <td>004247</td>
            <td>Kinh tế chính trị MacLenin</td>
            <td>2</td>
            <td>0</td>
            
          </tr>
          <tr>
          <td>002793</td>
            <td>Kỹ thuật lập trình</td>
            <td>3</td>
            <td>0</td>
             
          </tr>
          
        </tbody>
      </table>
          </View>
       
      

      
      }
      {/* Học Kì 3 */}

      <TouchableOpacity onPress={() => setShowContent3(!showContent3)}>
            <View style={styles.hk1}>
              <Text style={styles.thk1}>Học Kỳ 3</Text>
            
              </View>
            </TouchableOpacity>
            {showContent3 && 
      <View style={styles.v1}>
          
            <table>
        <thead style={styles.tb1}>
         
        </thead>
        <tbody>
          <tr style={styles.th1}>
            <td>002150</td>
            <td>Anh văn 2</td>
            <td>4</td>
            <td>0</td>
             
          </tr>
          <tr>
            <td>003573</td>
            <td>Cấu trúc dữ liệu và giải thuật</td>
            <td>4</td>
            <td>0</td>
             
           
          </tr>
          <tr style={styles.th1}>
          <td>003696</td>
            <td>Cấu trúc rời rạc</td>
            <td>3</td>
            <td>0</td>
            
          </tr>
          <tr>
          <td>003575</td>
            <td>Hệ cơ sở dữ liệu</td>
            <td>4</td>
            <td>0</td>
            
          </tr>
          <tr style={styles.th1}>
          <td>004247</td>
            <td>Lập trình hướng đối tượng</td>
            <td>3</td>
            <td>0</td>
            
          </tr>
          <tr>
          <td>002793</td>
            <td>Toán cao cấp 2</td>
            <td>2</td>
            <td>0</td>
            
          </tr>
          
          
        </tbody>
      </table>
          </View>
       
      

      
      }
      {/* Học Kì 4 */}

      <TouchableOpacity onPress={() => setShowContent4(!showContent4)}>
            <View style={styles.hk1}>
              <Text style={styles.thk1}>Học Kỳ 4</Text>
             
              </View>
            </TouchableOpacity>
            {showContent4 && 
      <View style={styles.v1}>
           
            <table>
        <thead style={styles.tb1}>
         
        </thead>
        <tbody>
          <tr style={styles.th1}>
            <td>002150</td>
            <td>Anh văn 3</td>
            <td>4</td>
            <td>0</td>
            
          </tr>
          <tr>
            <td>003573</td>
            <td>Hệ quản trị Nosql Mongo</td>
            <td>3</td>
            <td>0</td>
            
          </tr>
          <tr style={styles.th1}>
          <td>003696</td>
            <td>Hệ thống và Công nghệ web</td>
            <td>3</td>
            <td>0</td>
            
          </tr>
          <tr>
          <td>003575</td>
            <td>Mạng máy tính</td>
            <td>3</td>
            <td>0</td>
            
          </tr>
          <tr style={styles.th1}>
          <td>004247</td>
            <td>Phân tích thiết kế hệ thống</td>
            <td>3</td>
            <td>0</td>
            
          </tr>
         
        </tbody>
      </table>
          </View>
       
      

      
      }

       {/* Học Kì 5 */}

       <TouchableOpacity onPress={() => setShowContent5(!showContent5)}>
            <View style={styles.hk1}>
              <Text style={styles.thk1}>Học Kỳ 5</Text>
             
              </View>
            </TouchableOpacity>
            {showContent5 && 
      <View style={styles.v1}>
           
            <table>
        <thead style={styles.tb1}>
         
        </thead>
        <tbody>
          <tr style={styles.th1}>
            <td>002150</td>
            <td>Anh Văn 4</td>
            <td>3</td>
            <td>0</td>
            
          </tr>
          <tr>
            <td>003573</td>
            <td>Chủ nghĩa xã hội khoa học</td>
            <td>2</td>
            <td>0</td>
            
          </tr>
          <tr style={styles.th1}>
          <td>003696</td>
            <td>Lý thuyết đồ thị</td>
            <td>3</td>
            <td>0</td>
            
          </tr>
          <tr>
          <td>003575</td>
            <td> Mô hình hóa No SQL MongoDB</td>
            <td>3</td>
            <td>0</td>
            
          </tr>
          <tr style={styles.th1}>
          <td>004247</td>
            <td>Phát triển ứng dụng</td>
            <td>3</td>
            <td>0</td>
            
          </tr>
          <tr>
          <td>002793</td>
            <td>Phương pháp luận nghiên cứu khoa học</td>
            <td>2</td>
            <td>0</td>
            
          </tr>
          
        </tbody>
      </table>
          </View>
       
      

      
      }
      {/* Học Kì 6 */}

      <TouchableOpacity onPress={() => setShowContent6(!showContent6)}>
            <View style={styles.hk1}>
            <Text style={styles.thk1}>Học Kỳ 6</Text>
             
              </View>
            </TouchableOpacity>
            {showContent6 && 
      <View style={styles.v1}>
          
            <table>
        <thead style={styles.tb1}>
         
        </thead>
        <tbody>
          <tr style={styles.th1}>
            <td>002150</td>
            <td>Nhập môn An toàn thông tin</td>
            <td>3</td>
            <td>0</td>
            
          </tr>
          <tr>
            <td>003573</td>
            <td>Công nghệ phần mềm</td>
            <td>3</td>
            <td>0</td>
            
          </tr>
          <tr style={styles.th1}>
          <td>003696</td>
            <td>Những vấn đề đạo đức xã hội</td>
            <td>2</td>
            <td>0</td>
            
          </tr>
          <tr>
          <td>003575</td>
            <td>Sự phát triển công nghệ</td>
            <td>2</td>
            <td>0</td>
            
          </tr>
          <tr style={styles.th1}>
          <td>004247</td>
            <td>Thống kê máy tính và ứng dụng</td>
            <td>3</td>
            <td>0</td>
            
          </tr>
          
          
        </tbody>
      </table>
          </View>
       
      

      
      }
      {/* Học Kì 7 */}

      <TouchableOpacity onPress={() => setShowContent7(!showContent7)}>
            <View style={styles.hk1}>
              <Text style={styles.thk1}>Học Kỳ 7</Text>
             
              </View>
            </TouchableOpacity>
            {showContent7 && 
      <View style={styles.v1}>
          
            <table>
        <thead style={styles.tb1}>
        
        </thead>
        <tbody>
          <tr style={styles.th1}>
            <td >002150</td>
            <td>Đảm bảo chất lượng Kiểm thử</td>
            <td>3</td>
            <td>0</td>
            
          </tr>
          <tr>
            <td>003573</td>
            <td>Lập trình thiết bị di dộng</td>
            <td>3</td>
            <td>0</td>
            
          </tr>
          <tr style={styles.th1}>
          <td>003696</td>
            <td>Lịch sử đảng</td>
            <td>2</td>
            <td>0</td>
            
          </tr>
          
          
        </tbody>
      </table>
          </View>
       
      

      
      }
      {/* Học Kì 8 */}

      <TouchableOpacity onPress={() => setShowContent8(!showContent8)}>
            <View style={styles.hk1}>
              <Text style={styles.thk1}>Học Kỳ 8</Text>
             
              </View>
            </TouchableOpacity>
            {showContent8 && 
      <View style={styles.v1}>
          
            <table>
        <thead style={styles.tb1}>
         
        </thead>
        <tbody>
          <tr style={styles.th1}>
            <td>002150</td>
            <td>Công nghệ mới trong phát triển UD CNTT</td>
            <td>3</td>
            <td>0</td>
            
          </tr>
          <tr>
            <td>003573</td>
            <td>Kiến trúc phần mềm</td>
            <td>4</td>
            <td>0</td>
            
          </tr>
          <tr style={styles.th1}>
          <td>003696</td>
            <td>Tư tưởng Hồ Chí Minh</td>
            <td>2</td>
            <td>0</td>
            
          </tr>
         
        </tbody>
      </table>
          </View>
     

      
      }
      {/* Học Kì 9 */}

      <TouchableOpacity onPress={() => setShowContent9(!showContent9)}>
            <View style={styles.hk1}>
              <Text style={styles.thk1}>Học Kỳ 9</Text>
              
              </View>
            </TouchableOpacity>
            {showContent9 && 
      <View style={styles.v1}>
           
        <table>
        <thead style={styles.tb1}>
         
        </thead>
        <tbody>
          <tr style={styles.th1}>
            <td>002150</td>
            <td>Khóa luận tốt nghiệp</td>
            <td>5</td>
            <td>0</td>
            
          </tr>
          <tr>
            <td>003573</td>
            <td>Thực tập doanh nghiệp</td>
            <td>8</td>
            <td>0</td>
            
          </tr>
         
        </tbody>
      </table>
          </View>
       
      
      }


      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily:"tahoma",
    fontSize:30,
    
   
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor:'#E0FFFF',
  },
  backButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  backButton: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  header:{
    flexDirection:"row",
    width: 390,
    height: 40,
    backgroundColor:"#4B7EFF"
  },
  h1:{
    margin: 10,
    color:"white"

  },
  h2:{
    marginTop:10,
    marginLeft: 30,
    color:"white"

  },
  h3:{
    marginTop:10,
    marginLeft: 146,
    color:"white"
  },
  h4:{
    marginTop:10,
    color:"white",
    marginLeft:10
    

  },
  h5:{
    marginTop:10,
    color:"white",
    marginLeft:10

  },

  hk1:{
    height:50,
    width:390,
    backgroundColor:"white",
    borderColor:"#C6E2FF",
    borderWidth:3,
    borderRadius: 10,
    flexDirection:"row"
   
  },
  thk1:{
    marginLeft: 20,
    marginTop: 10,
    fontSize:18,
    fontFamily:"arial",
    fontWeight:"bold"
  },
  thk2:{
    marginLeft: 20,
    marginTop: 10,
    fontSize:18,
    fontFamily:"arial",
    fontWeight:"bold",
    marginLeft: 160

  },
  v1:{
    width:390
  },
  th1:{
    backgroundColor:"#99CCFF",
    
   

  },
  t1:{
    backgroundColor:"#99CCFF",
    height:40,
    fontSize:18,
    fontWeight:"bold"
    
  },
  tb1:{
   backgroundColor:"blue",
   color:"white"
  }
})
export default XemDiem;