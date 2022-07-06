import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import axios from 'axios';


const CountriesList = ({ navigation }) => {
  const [data, setData] = React.useState([]);
  const [refreshing, setRefreshing] = React.useState(true);
  const [search, setSearch] = React.useState('');

  const getData = () => {
    const options = {
      method: 'GET',
      url: 'https://covid-193.p.rapidapi.com/statistics',
      headers: {
        'x-rapidapi-host': 'covid-193.p.rapidapi.com',
        'x-rapidapi-key': '962b7b6bc1msh92b77faf68c92e9p106480jsn4a4297b66107',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setData(response.data.response);
        setRefreshing(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  React.useEffect(() => {
    getData();
  }, [setData]);
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        placeholderTextColor="#FFFFFF"
        iconColor="#FFFFFF"
        clearIconColor="#FFFFFF"
        onChangeText={setSearch}
        value={search}
        inputStyle={{ color: '#FFFFFF' }}
        style={styles.input}
      />

      {refreshing ? (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator color="#272D3B" size="large" />
        </View>
      ) : (
        <FlatList
          style={styles.list}
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item, index }) =>
            item.country.toLowerCase().includes(search.toLowerCase()) ? (
              <TouchableOpacity
                style={styles.tile}
                onPress={() =>
                  navigation.navigate('Country Stats', data[index])
                }>
                <Text style={styles.countryName}>{item.country}</Text>
              </TouchableOpacity>
            ) : (
              <Text></Text>
            )
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  input: {
    backgroundColor: '#473F93',
    width: '85%',
    height: 50,
    padding: 10,
    borderRadius: 8,
    margin: 10,
    color: '#FFFFFF',
  },
  list: {
    margin: 10,
    width: '100%',
    padding: 15,
  },
  tile: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    margin: 5,
    borderRadius: 6,
    borderWidth:1,
    borderColor: '#473F93',
    shadowColor: '#272D3B',
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation:5
  },
  countryName: {
    fontSize: 20,
    // fontFamily: 'roboto',
    color: '#272D3B',
  },
});
export default CountriesList;
