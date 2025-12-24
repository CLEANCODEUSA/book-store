import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, FlatList, Alert } from 'react-native';
import axios from 'axios'
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  const [bookList, setBookList] = useState([])

  const endpointURL = "https://694b54ac26e870772067d39d.mockapi.io/books"

  const getListOfBooks = async () => {
    try {
      const response = await axios.get(endpointURL);
      console.log(JSON.stringify(response.data, null, 3))
      setBookList(response.data)
    } catch (error) {
      console.log("An Error occured" + error)
    }
  }

  const getBookByID = async () => {
    try {
      const response = await axios.get(`${endpointURL}/4`);
      console.log(JSON.stringify(response.data, null, 3))
    }
    catch (error) {
      console.log("An Error occured: " + error)
    }
  }

  const deleteBookByID = async () => {
    try {
      const response = await axios.delete(`${endpointURL}/3`)
      Alert.alert("Book has been deleted successfully.")
    } catch (error) {
      console.log(error)
    }
  }

  const body = {
    name_of_author: "Last Book",
    cover: "https://images.unsplash.com/photo-1580008006944-bb3b7e890d5d",
    price_of_book: "500",
    email_of_seller: "emma@gmail.com"
  }

  const createBook = async () => {
    try {
      const response = await axios.post(endpointURL, body)
      Alert.alert("Book has been created.")
      getListOfBooks();
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Button title="Get List of Books" onPress={getListOfBooks} />
        <Button title="Get Book by ID" onPress={getBookByID} />
        <Button title="Delete Book by ID" onPress={deleteBookByID} />
        <Button title="Create Book" onPress={createBook} />
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
