import React, { Component } from 'react';
import {View,Text,SafeAreaView,StyleSheet,StatusBar, Image,TouchableOpacity,} from 'react-native';
import {
    LineChart,
    ProgressChart,
    BarChart
  } from "react-native-chart-kit";
import * as CommonStyle from '../Help/CommonStyle';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import VaccineLogo from '../../Images/113.png';
import MAP from '../../Images/MapBG.png';
class Vaccine extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: [
                Math.random() * 100,
                Math.random() * 200,
                Math.random() * 300,
                Math.random() * 400,
                Math.random() * 500,
                Math.random() * 600,
              ]
         }
    }
    render() { 
        return (
            <ScrollView>
            <View style={styles.Container}>
                <StatusBar
					translucent={false}
				/>
                <View style={styles.Header}>
                    <Ionicons name="chevron-back" size={30} color="white" style={{margin:15}} onPress={()=>this.props.navigation.navigate("MainScreen")}/>
                    <FontAwesome5 name="bell" size={25} color="white" style={{marginLeft:'72%',margin:15}}/>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{width:'40%'}}>
                        <Image source={VaccineLogo} style={styles.VaccineIMG}/>
                    </View>
                    <View style={{width:'60%'}}>
                        <Text style={{margin:40,fontSize:20,color:'white'}}>All you need to stay home</Text>
                        <Text style={{marginLeft:40,fontSize:20,color:'white'}}>Get to know About Covid-19.</Text>
                    </View>
                </View>
            </View>
            <Text style={{marginLeft:20,marginTop:20,fontSize:20,fontWeight:'bold'}}>
                    Vaccine Update
                </Text>
            <View style={{flexDirection:'row'}}>
                <Text style={{marginLeft:22,marginTop:7,color:'gray'}}>
                    Newest update March 28
                </Text>
                <TouchableOpacity>
                    <Text style={{marginLeft:'40%',color:CommonStyle.Apptheme,fontWeight:'bold'}}>
                        See more
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.VaccineContainer}>
                <View style={{flexDirection:'column',width:'33%',}}>
                    <FontAwesome name="dot-circle-o" size={25} color="#C37D37" style={{marginLeft:50,marginTop:7}}/>
                    <Text style={{textAlign:'center',fontSize:30,marginTop:12,fontWeight:'bold',color:"#C37D37"}}>103M</Text>
                    <Text style={{textAlign:'center',color:'gray',marginTop:12}}>Vaccine Avialible</Text>
                </View>
                <View style={{flexDirection:'column',width:'33%',}}>
                    <FontAwesome name="dot-circle-o" size={25} color="#4CD97B" style={{marginLeft:50,marginTop:7}}/>
                    <Text style={{textAlign:'center',fontSize:30,marginTop:12,fontWeight:'bold',color:"#4CD97B"}}>15M</Text>
                    <Text style={{textAlign:'center',color:'gray',marginTop:12}}>Injected</Text>
                </View>
                <View style={{flexDirection:'column',width:'33%',}}>
                    <FontAwesome name="dot-circle-o" size={25} color="#FF5959" style={{marginLeft:50,marginTop:7}}/>
                    <Text style={{textAlign:'center',fontSize:30,marginTop:12,fontWeight:'bold',color:"#FF5959"}}>30.8%</Text>
                    <Text style={{textAlign:'center',color:'gray',marginTop:12}}>Injected %</Text>
                </View>
            </View>


            
            <View style={styles.SecondContainer}>
                    <Text style={{color:'black',margin:25,fontSize:20,fontWeight:'bold'}}>Daily Cases Graph</Text>
                    <View style={{width:'95%'}}>
                        <BarChart
                            data={{
                                labels: ["FRI", "SAT", "SUN", "MON", "TUE", "WED",'THU'],
                                datasets: [
                                {
                                    data: [
                                        Math.random() * 100,
                                        Math.random() * 200,
                                        Math.random() * 300,
                                        Math.random() * 400,
                                        Math.random() * 500,
                                        Math.random() * 600,
                                        Math.random() * 700,

                                    ]
                                }
                                ]
                            }}
                            width={350}
                            height={250}
                            yAxisSuffix="k"
                            yAxisInterval={2} // optional, defaults to 1
                            chartConfig={{
                                backgroundColor: "black",
                                backgroundGradientFrom: "#FaFaFa",
                                backgroundGradientTo: "#FaFaFa",
                                decimalPlaces: 2, // optional, defaults to 2dp
                                color: (opacity = 1) => `rgba(255, 89, 89, ${opacity})`,
                                labelColor: (opacity = 1) => `rgba(255, 89, 89, ${opacity})`,
                                style: {
                                borderRadius: 50
                                },
                                propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: '#FF5959'
                                }
                            }}
                            bezier
                            style={{
                                marginVertical: 8,
                                borderRadius: 1
                            }}
                        />
                    </View>
                </View>
            </ScrollView>
         );
    }
}
const styles = StyleSheet.create({
    Container:{
        width:'100%',
        height:330,
        backgroundColor:CommonStyle.Apptheme,
        borderBottomLeftRadius:50 ,
        borderBottomRightRadius:50,
    },
    Header:{
        flexDirection:'row',
        marginTop:25,
        height:60,
    },
    VaccineIMG:{
        width:70,
        height:200,
        marginLeft:70,
    },
    VaccineContainer:{
        flexDirection:'row',
        width:'90%',
        height:150,
        backgroundColor:'#FAFAFA',
        marginLeft:'5%',
        marginTop:20,
        borderRadius:30,
    },
    SecondContainer:{
        marginTop:50,
        height:400,
        width:'100%',
        backgroundColor:CommonStyle.lightBg,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
    },
});
export default Vaccine;