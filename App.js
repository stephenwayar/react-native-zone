import { 
  StyleSheet, 
  Text, 
  View, 
  Button, 
  TextInput, 
  ScrollView,
  FlatList 
} from 'react-native';
import { useState } from 'react';

export default function App() {
  const [people, setPeople] = useState([
    {name: 'mike', key: 1},
    {name: 'james', key: 2},
    {name: 'jordan', key: 3},
    {name: 'caleb', key: 4},
    {name: 'isaac', key: 5},
    {name: 'jordan', key: 6},
    {name: 'caleb', key: 7},
    {name: 'isaac', key: 8},    
    {name: 'caleb', key: 9},
    {name: 'isaac', key: 10},
  ])
  
  return (
    <View style={styles.container}>
      <FlatList 
        data={people}
        renderItem={({item}) => (
          <Text style={styles.personComp}>{item.name}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 40,
    paddingHorizontal: 40,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  personComp: {
    backgroundColor: 'pink',
    width: 350,
    marginVertical: 10,
    padding: 30
  }
});