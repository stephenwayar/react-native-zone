import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import { useState } from 'react';
import TextAncestor from 'react-native/Libraries/Text/TextAncestor';

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
      <ScrollView>
        {people.map((person) => {
          return(
            <View>
              <Text 
                style={styles.person} 
                key={person.key}>{person.name}
              </Text>
            </View>
          )
        })}
      </ScrollView>    
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
  person: {
    backgroundColor: 'pink',
    width: 350,
    marginVertical: 10,
    padding: 30
  }
});