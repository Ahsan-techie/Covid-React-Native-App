import * as React from 'react';
import { Text, View, StyleSheet,ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import StatsViewContainer from './StatsViewContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import * as CommonStyle from '../Help/CommonStyle';

const CountryStatistics = ({ navigation, route }) => {
  const data = route.params;
  const name = data.country;
  const population = data.population;
  const lastUpdate = data.time;
  const confirmed = data.cases.total;
  const recovered = data.cases.recovered;
  const critical = data.cases.critical;
  const deaths = data.deaths.total;

  const addToFavourites= async()=>{
    var key = Math.floor(Math.random() * 100);
    await AsyncStorage.setItem(`${key}`, JSON.stringify(data))
      .then(json => console.log('success!'))
      .catch(error => console.log('error!'));
  }
  React.useEffect(() => {
    navigation.setOptions({
      title: name,
      headerRight: () => (
        <View style={{ marginRight: 10 }}>
          <Icon
            name="star-o"
            type="font-awesome"
            color="#FFFFFF"
            onPress={addToFavourites}
          />
        </View>
      ),
    });
  });
  return (
    <ScrollView style= {{backgroundColor:'white'}}>

    <View style={styles.container}>
      {/* Header Portion */}
    <View style={styles.Container}>   
        <View style={styles.Header}>
            <Ionicons name="chevron-back" size={30} color="black" style={{margin:15}} onPress={()=>navigation.navigate("CountriesList")}/>
        </View>

        <View style={{width:'65%'}}>
                <Text style={styles.TextHeading}>About Country</Text>
        </View>
        <View >
        <Text style={styles.OwnTest}>This Is The Covid Details About The Country</Text>
        </View>
        </View>
            {/* first two boxed */}
    <View style= {{flex:1, flexDirection:'row'}}>
    <View style={styles.Box1}>
    <StatsViewContainer
        heading="Total confirmed Cases"
        value={confirmed}
        // population={population}
      />
    </View>
    <View style={styles.Box2}>
    <StatsViewContainer
        heading="Total Recoverd Cases"
        value={recovered}
        // population={population}
      />
    </View>
    </View>
     {/* Second two boxed */}
    <View style= {{flex:1, flexDirection:'row'}}>
    <View style={styles.Box3}>
    <StatsViewContainer
        heading="Total Critical Cases"
        value={critical}
        // population={population}
      />
    </View>
    <View style={styles.Box4}>
    <StatsViewContainer
        heading="Total Deaths"
        value={deaths}
        // population={population}
      />
    </View>
    </View>
      <View style={[styles.statsContainer, { height: 80,width:'75%',marginTop:15 }]}>
        <Text style={styles.headingText}>last updated on</Text>
        <Text style={styles.statsText}>{lastUpdate}</Text>
      </View>
    </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  Container:{
    width:'100%',
    height:230,
    backgroundColor:'#473F93',
    borderBottomLeftRadius:50 ,
    borderBottomRightRadius:50,
},
OwnTest:{
  marginTop:15,
  textAlign:'center',
  fontSize:18,
  color:'white',
  fontWeight:'bold'
},
  statsContainer: {
    alignItems: 'center',
    backgroundColor: '#272D3B',
    margin: 7,
    borderRadius: 6,
    padding: 7,
    width: '80%',
  },
  headingText: {
    color: '#FFFFFF',
    // fontFamily: 'roboto',
    fontSize: 17,
    fontWeight: 'bold',
    margin: 7,
  },
  statsText: {
    color: '#FFFFFF',
    fontSize: 13,
    // fontFamily: 'roboto',
    fontWeight: 'bold',
  },
  Header:{
    flexDirection:'row',
    marginTop:25,
    height:60,
},
TextHeading:{
    color:'white',
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
    margin:15,
    fontSize:20,
    fontWeight:'bold',
    color:'white'
},
});
export default CountryStatistics;
