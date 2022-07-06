import React, {useState} from 'react';
import {View,Text,StyleSheet,Button,TouchableOpacity,TextInput} from 'react-native';
import Firebase from './firebase';
const auth = Firebase.auth();

const Signup = ({props,navigation}) => {
    const [name, setName] = useState({ value: '', error: '' });
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
  ///signup
    const _onSignUpPressed = () => {
     try {
        if (email.value !== '' && password.value !== '') {
            // auth.createUserWithEmailAndPassword(email.value, password.value);
            // navigation.navigate('Login') 
            auth.createUserWithEmailAndPassword(email.value, password.value).
            then((res) => {
                res.user.updateProfile({
                  name: name
                })
                navigation.navigate('Login')
              })
        }
      } catch (error) {
          alert(error.message)
      }
    };
  
    return (

      <View style={styles.container}>
        <Text style={{color: 'blue',fontWeight: 'bold', marginVertical: 20, fontSize: 24,  textAlign: 'center'}}>Sign Up</Text>

        {/* For Name */}
        <TextInput 
          placeholder="Name" 
          value={name.value}
          onChangeText={text => setName({ value: text, error: '' })}
          error={!!email.error}
          errorText={email.error}
           style={styles.textInputStyle}> 
        </TextInput>
        {/* For Name */}

        <TextInput 
          placeholder="Enter Username" 
          value={email.value}
          onChangeText={text => setEmail({ value: text, error: '' })}
          error={!!email.error}
          errorText={email.error}
           style={styles.textInputStyle}> 
        </TextInput>
  
        <TextInput 
          secureTextEntry={true} 
          placeholder="Enter Password"  
          value={password.value}
          onChangeText={text => setPassword({ value: text, error: '' })}
          error={!!password.error}
          errorText={password.error}
          style={styles.textInputStyle}> 
        </TextInput>
        <View style={{alignContent: "center", alignSelf: "center", marginTop: 10}}>
          <TouchableOpacity style={{borderWidth: 1, backgroundColor:"blue", borderRadius:10}} onPress={_onSignUpPressed}>
            <Text style={{color: 'white', textAlign: 'center', paddingVertical: 5, paddingHorizontal: 20, fontWeight: 'bold', margin: 8}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <Text 
            style={styles.loginText}
           onPress={() => navigation.navigate('Login')} >
            Already Registered? Click here to login
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
export default Signup;