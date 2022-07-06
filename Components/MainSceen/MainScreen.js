import React, { Component } from 'react';
import {View,Text,SafeAreaView,StyleSheet,StatusBar, Image,TouchableOpacity,} from 'react-native';
import * as CommonStyle from '../Help/CommonStyle';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
// import { Ionicons } from '@expo/vector-icons';
// import { Entypo } from '@expo/vector-icons';
// import USA from '../../Images/USABG.png';
import Infected from '../../Images/infected.png';
import Vecine from '../../Images/Vec.png';
import Dead from '../../Images/Dead.png';
import Test from '../../Images/Test512.png';
import { ScrollView } from 'react-native-gesture-handler';
class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <ScrollView>
            <View style={styles.Container}>
                {/* <StatusBar
					translucent={false}
				/> */}
                  <View style={styles.Header}>
                    <TouchableOpacity style = {{marginLeft:10}} onPress={()=>this.props.navigation.navigate("Dashboard")}>
                    <FontAwesome5 name="user-circle" size={25} color="white"/>
                    </TouchableOpacity>
                    <TouchableOpacity style = {{marginLeft:'75%'}} onPress={()=>this.props.navigation.navigate("AboutUs")}>
                    <FontAwesome5 name="info-circle" size={25} color="white" style={{marginLeft:'12%'}}/>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.SecondContainer}>
                    <View style={{width:'65%'}}>
                        <Text style={styles.TextHeading}>Covid-19</Text>
                    </View>
                    <TouchableOpacity style = {{width:350}} onPress={()=>this.props.navigation.navigate("CountriesList")}>
                    <View style={{width:'30%',backgroundColor:'white',height:47,marginTop:5,flexDirection:'row',borderRadius:30,marginTop:10}}>
                     
                        <Text style={{...styles.TextUSA,fontWeight:'bold', color:'black',}}>Countries</Text>
                    </View></TouchableOpacity>
                </View>

                <View>
                    <Text style={styles.OwnTest}>Are you feeling sick?</Text>
                    <Text style={styles.OwnTestDetaile}>If you feel sick with any of COVID-19 symptoms. Please immediately do you Covid Test</Text>
                </View>
            </View>
            
            <View style={{flexDirection:'row'}}>
                <View style={styles.SelectOption}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("CaseUpdate")}>
                        <Image source={Infected} style={styles.SelectPic}/>
                        <Text style={styles.SelectText}>Case Updates</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.SelectOption}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("Vaccine")}>
                        <Image source={Vecine} style={styles.SelectPic}/>
                        <Text style={styles.SelectText}>Vaccine Update</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.SelectOption}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("Death")}>
                        <Image source={Dead} style={styles.SelectPic}/>
                        <Text style={styles.SelectText}>Death</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.LastContainer}>
                <View style={{width:'45%',height:110,}}>
                    <Image source={Test} style={{width:100,height:110,marginBottom:0,marginLeft:20}}/>
                </View>
                <View style={{width:'55%',height:110,flexDirection:'column'}}>
                    <Text style={styles.OwnTest}>Do your own test!</Text>
                    <Text style={styles.OwnTestDetaile}>Follow the instruction to do your own test.</Text>
                </View>
            </View>
            </ScrollView>
         );
    }
}
const styles = StyleSheet.create({
    Container:{
        width:'100%',
        height:360,
        marginBottom:20,
        backgroundColor:CommonStyle.Apptheme,
        borderBottomLeftRadius:25 ,
        borderBottomRightRadius:25,
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
    TextUSA:{
       
        // color:CommonStyle.darkBg,
        fontSize:18,
        margin:12,
        
    },
    SecondContainer:{
        flexDirection:'row',
        marginTop:5
    },
    SelectOption:{
        flexDirection:'column',
        width:'31%',
        height:150,
        margin:5,
    },
    SelectPic:{
        width:100,
        height:100,
        margin:8,
        borderRadius:50
    },
    SelectText:{
        textAlign:'center',
        fontSize:18,
        marginTop:5,
        fontWeight:'bold',
        color:'gray'
    },
    LastContainer:{
        flexDirection:'row',
        width:'90%',
        marginLeft:'5%',
        borderRadius:20,
        marginTop:50,
        height:110,
        backgroundColor:CommonStyle.Apptheme,
        marginBottom:50
    },
    OwnTest:{
        marginTop:15,
        textAlign:'center',
        fontSize:18,
        color:'white',
        fontWeight:'bold'
    },
    callButton:{
        width:150,
        height:50,
        backgroundColor:CommonStyle.Red,
        borderRadius:25,
        margin:15,
        marginLeft:20,
        flexDirection:'row'
    },
    callButtonText:{
        color:'white',
        fontSize:16,
        textAlign:'center',
        marginTop:15
    },
    OwnTestDetaile:{
        margin:17,
        fontSize:14,
        color:'gray',
        textAlign:'center',
    },
});
export default MainScreen;