
import React, {useState} from 'react';
import {View,Text,StyleSheet,Button,TouchableOpacity,TextInput} from 'react-native';
import Firebase from './firebase';
const auth = Firebase.auth();

const Login= ({props,navigation}) => {

    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
  
  
      const _onSignInPressed = () => {
      try {
        if (email.value != '' && password.value != '') {
          auth.signInWithEmailAndPassword(email.value, password.value).
          then(() => 
          {
              navigation.navigate('MainScreen')
              setEmail({ value: '', error: '' })
              setPassword({ value: '', error: '' })
          }
          ).catch(() => alert("Invalid"))
          
        }
      } catch (error) {
        console.lo(error.message);
      }
     
    };
  
    return (
      <View style={styles.container}>
        <Text style={{color: 'blue',fontWeight: 'bold', marginVertical: 20,fontSize: 24,  textAlign: 'center'}}>Log In</Text>
        <TextInput 
          placeholder="Enter Username"  
          value={email.value}
          onChangeText={(text) => setEmail({ value: text, error: '' })}
          error={!!email.error}
          errorText={email.error} style={styles.textInputStyle}> 
        </TextInput>
       
        <TextInput 
          secureTextEntry={true} 
          placeholder="Enter Password"  
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: '' })}
          error={!!password.error}
          errorText={password.error} style={styles.textInputStyle}> 
        </TextInput>
        <View style={{alignContent: "center", alignSelf: "center", marginTop: 10}}>
          <TouchableOpacity style={{borderWidth: 1, backgroundColor:"blue", borderRadius:10}}  onPress={_onSignInPressed}>
            <Text style={{color: 'white', textAlign: 'center', paddingVertical: 5, paddingHorizontal: 20, fontWeight: 'bold', margin: 8}}>Log In</Text>
          </TouchableOpacity>
        </View>
    
         <Text 
            style={styles.loginText}
           onPress={() => navigation.navigate('Signup')} >
            New User? Click here to Register
          </Text> 
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
export default Login;