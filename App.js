import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState("Steve")
  const [age, setAge] = useState(21)
  
  return (
    <View style={styles.container}>
      <Text>Enter your name:</Text>

      <TextInput 
        style={styles.input}
        multiline
        placeholder='Enter your name'
        onChangeText={(value) => setName(value)}
      />

      <Text>Enter your age:</Text>

      <TextInput 
        style={styles.input}
        keyboardType='numeric'
        placeholder='Enter your age'
        onChangeText={(value) => setAge(value)}
      />

      <Text>Your name is {name}</Text>
      <Text>Your age is {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 8,
    marginVertical: 5
  }
});