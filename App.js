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
    {name: 'mike', id: 1},
    {name: 'james', id: 2},
    {name: 'jordan', id: 3},
    {name: 'caleb', id: 4},
    {name: 'isaac', id: 5},
    {name: 'jordan', id: 6},
    {name: 'caleb', id: 7},
    {name: 'isaac', id: 8},    
    {name: 'caleb', id: 9},
    {name: 'isaac', id: 10},
  ])
  
  return (
    <View style={styles.container}>
      <FlatList 
        numColumns={2}
        keyExtractor={(item) => item.id}
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
    width: 100,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 30
  }
});