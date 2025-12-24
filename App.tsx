import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import axios from 'axios'

export default function App() {

  const endpointURL = "https://694b54ac26e870772067d39d.mockapi.io/books"

  const getListOfBooks = async () => {
    const response = await axios.get(endpointURL);
    console.log(JSON.stringify(response.data, null, 3))
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Button title="Get List of Books" onPress={getListOfBooks} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
