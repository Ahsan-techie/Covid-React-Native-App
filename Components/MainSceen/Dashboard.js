import React, {useState} from 'react';
import {View,Text,StyleSheet,Button,TouchableOpacity,TextInput} from 'react-native';
import Firebase from './firebase';
const auth = Firebase.auth();

const Dashboard = ({navigation}) => {
    const handleSignOut = async () => {
       try {
         await auth.signOut();
         navigation.navigate('Login') 
   
       } catch (error) {
         console.log(error);
       }
     };
     
     return(
         
         <View style={styles.container}>
            <View style = {{marginTop: 5}}>
                <Text style = {{fontSize: 50, textAlign: "center"}}>Dashboard</Text>
    
                <View style={{alignContent: "center", alignSelf: "center", marginTop: 10}}>
                <TouchableOpacity style={{borderWidth: 1, backgroundColor:"blue", borderRadius:10}} onPress={handleSignOut}>
                    <Text style={{color: 'white', textAlign: 'center', paddingVertical: 5, paddingHorizontal: 20, fontWeight: 'bold', margin: 8}}>SignOut</Text>
                </TouchableOpacity>
                </View>
            </View>
           
         </View>
     );
   }
   const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: 35,
      backgroundColor: '#fff'
    },
    loginText: {
      color: '#3740FE',
      marginTop: 25,
      textAlign: 'center'
    },
    textInputStyle: {
      height: 60,
      marginVertical:10,
      borderRadius: 6,
      paddingHorizontal:10,
      backgroundColor: "transparent",
      borderColor: "#888",
      borderWidth: 1
    },
  });
   export default Dashboard;