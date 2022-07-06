import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../Components/MainSceen/MainScreen';
import CaseUpdate from '../Components/MainSceen/CaseUpdate';
import Vaccine from '../Components/MainSceen/Vaccine';
import Death from '../Components/MainSceen/Dead'
import AboutUs from '../Components/MainSceen/AboutUs';
import CountriesList from '../Components/MainSceen/CountriesListScreen';
import CountryStatistics from '../Components/MainSceen/CountryStatisticsScreen';
import Login from '../Components/MainSceen/Login';
import Signup from '../Components/MainSceen/Signup';
import Dashboard from '../Components/MainSceen/Dashboard';
const Stack = createStackNavigator();
class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Login' headerMode='none'>
                    <Stack.Screen name="MainScreen" component={MainScreen} />
                    <Stack.Screen name="CaseUpdate" component={CaseUpdate} />
                    <Stack.Screen name="Vaccine" component={Vaccine} />
                    <Stack.Screen name="Death" component={Death} />
                    <Stack.Screen name="AboutUs" component={AboutUs} />
                    <Stack.Screen name="CountriesList" component={CountriesList} /> 
                    <Stack.Screen name="Country Stats" component={CountryStatistics} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Signup" component={Signup} />
                    <Stack.Screen name="Dashboard" component={Dashboard} />
                    
                </Stack.Navigator>
            </NavigationContainer>
         );
    }
}
 
export default Navigation;