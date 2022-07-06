import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import * as CommonStyle from '../Help/CommonStyle';

const StatsViewContainer = (props) => {
  var valueResult = '';
  
  const handlingNull = () => {
    if (props.value === null) {
      valueResult = (
        <View>
          <Text style={styles.HeadingDetaile}>{0}</Text>
        </View>
      );
    } else {
      valueResult = (
        <View>
          <Text style={styles.HeadingDetaile}>{props.value}</Text>
        </View>
      );
    }
  };
  return (
    <View style={styles.statsContainer}>
        {/* <View style={styles.statsContainer}></View> */}
      <Text style={styles.headingText}>{props.heading}</Text>
      {handlingNull()}
      <Text>{valueResult}</Text>
      {/* <Text style={styles.statsText}>
        {Math.ceil((props.value / props.population) * 100)} %
      </Text> */}
    </View>
    
  );
};

const styles = StyleSheet.create({
  statsContainer: {
    alignItems: 'center',
    // backgroundColor: '#272D3B',
    // margin: 7,
    borderRadius: 6,
    padding: 7,
    width: '95%',
  },
  headingText: {
    color: '#FFFFFF',
    // fontFamily: 'roboto',
    fontSize: 20,
    fontWeight: 'bold',
    // margin: 7,
  },
  statsText: {
    fontSize:18,
    fontWeight:'bold',
    color:'white',
    marginLeft:18
  },
  Header:{
    flexDirection:'row',
    marginTop:25,
    height:60,
},
TextHeading:{
    color:CommonStyle.lightBg,
    margin:20,
    fontSize:25,
    fontWeight:'bold'
},
SecondContainer:{
    marginTop:50,
    height:400,
    width:'100%',
    backgroundColor:CommonStyle.lightBg,
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
},
Box1:{
    width:'42%',
    height:120,
    backgroundColor:'#FFB259',
    borderRadius:20,
    marginLeft:'5%',
    marginTop:20
},
Box2:{
    width:'42%',
    height:120,
    backgroundColor:'#FF5959',
    borderRadius:20,
    marginLeft:'5%',
    marginTop:20
},
Box3:{
    width:'42%',
    height:120,
    backgroundColor:'#4CD97B',
    borderRadius:20,
    marginLeft:'5%',
    marginTop:20
},
Box4:{
    width:'42%',
    height:120,
    backgroundColor:'#9059FF',
    borderRadius:20,
    marginLeft:'5%',
    marginTop:20
},
GenderBox:{
    width:'42%',
    height:170,
    backgroundColor:'#FAFAFA',
    borderRadius:20,
    marginLeft:'5%',
    marginTop:20
},
Heading:{
    margin:15,
    fontSize:22,
    color:'white'
},
HeadingDetaile:{
    // margin:10,
    fontSize:18,
    fontWeight:'bold',
    color:'white'
},
});
export default StatsViewContainer;
