
import React, { Component } from 'react';
import {View,Text} from 'react-native';
import Navigation from './Navigation/Navigation';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <View style={{flex:1}}>
          <Navigation/>
      </View>
     );
  }
}
 
export default App;