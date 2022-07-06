import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    SafeAreaView,
} from 'react-native';
import * as CommonStyle from '../Help/CommonStyle';
// import { FontAwesome5 } from '@expo/vector-icons';
// import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Test from '../../Images/Test512.png';
import { Linking } from 'react-native';
class AboutUs extends Component {

    render() {
        return (
            <SafeAreaView style={{width:'100%'}}>
                <View style={styles.Container}>   

                <View style={styles.Header}>
                    <Ionicons name="chevron-back" size={30} color="white" style={{margin:15}} onPress={()=>this.props.navigation.navigate("MainScreen")}/>
                </View>

                <View style={{width:'65%'}}>
                        <Text style={styles.TextHeading}>About US</Text>
                </View>
                <View >
                <Text style={styles.OwnTest}>We are providing you the all the details about the Covid and the Vaccine</Text>
                </View>
                </View>

                <View style= {{marginLeft:5, marginRight:2}}>
                <Text style={{...styles.OwnTestA, marginTop:35}}>The coronavirus, or COVID-19, is inciting panic for a number of reasons. It's a new virus, meaning no one has immunity.</Text>
                </View>
                <View style={styles.LastContainer}>
                <View style={{width:'45%',height:110,}}>
                    <Image source={Test} style={{width:100,height:110,marginBottom:0,marginLeft:20}}/>
                </View>
                <View style={{width:'55%',height:110,flexDirection:'column'}}>
                    <Text style={{...styles.OwnTest,marginRight:10}}>If you want more details!</Text>
                    <Text style={styles.OwnTestDetaile}>Follow us on the website to get all the other information</Text>
                    <Text style={{color: 'blue',marginTop:50,alignItems:'center',justifyContent:'center'}} onPress={() => Linking.openURL('https://covid.gov.pk/')}>Covid Pakistan</Text>
                </View>
            </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    Container:{
        width:'100%',
        height:360,
        backgroundColor:CommonStyle.Apptheme,
        borderBottomLeftRadius:50 ,
        borderBottomRightRadius:50,
    },
    ImageContainer:{
        width:'100%',
        height:600,
    },
    TextHeading:{
        color:CommonStyle.lightBg,
        margin:20,
        fontSize:25,
        fontWeight:'bold'
    },
    Header:{
        flexDirection:'row',
        marginTop:25,
        height:60,
    },
    OwnTest:{
        marginTop:15,
        textAlign:'center',
        fontSize:18,
        color:'white',
        fontWeight:'bold'
    },
    OwnTestA:{
        marginTop:15,
        textAlign:'center',
        fontSize:18,
        color:'black',
        fontWeight:'bold'
    },
    LastContainer:{
        flexDirection:'row',
        width:'90%',
        marginLeft:'5%',
        borderRadius:20,
        marginTop:50,
        height:130,
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
    OwnTestDetaile:{
        margin:17,
        fontSize:14,
        color:'gray',
        textAlign:'center',
    },

});

export default AboutUs;