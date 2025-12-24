import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, FlatList } from 'react-native';
import axios from 'axios'
import { useState } from 'react';

export default function App() {

  const [bookList, setBookList] = useState([])

  const endpointURL = "https://694b54ac26e870772067d39d.mockapi.io/books"

  const getListOfBooks = async () => {
    const response = await axios.get(endpointURL);
    // console.log(JSON.stringify(response.data, null, 3))
    setBookList(response.data)
  }

  const getBookByID = async () => {
    const response = await axios.get(`${endpointURL}/4`);
    console.log(JSON.stringify(response.data, null, 3))
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Button title="Get List of Books" onPress={getListOfBooks} />
        <Button title="Get Book by ID" onPress={getBookByID} />
        <FlatList
          data={bookList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) =>
            <View>
              <Text>{item.name_of_author}</Text>
              <Text>{item.price_of_book}</Text>
              <Image
                style={{
                  height: 150,
                  width: 150
                }}
                source={{ uri: item.cover }} />
            </View>
          }
        />
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
