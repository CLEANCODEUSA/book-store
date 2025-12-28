import { StyleSheet, Text, View, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import AddTextInput from './AddTextInput';
import AppButton from './AppButton';
import { createBook, updateBook } from '../api/config';

const AddBookScreen = ({ onCloseIconPress, onCreateSuccess, selectedItem }) => {
  const [bookName, setBookName] = useState(selectedItem?.book_title ?? "")
  const [authorName, setAuthorName] = useState(selectedItem?.name_of_author ?? "")
  const [coverURL, setCoverURL] = useState(selectedItem?.cover ?? "")
  const [price, setPrice] = useState(selectedItem?.price_of_book ?? "")

  // console.log(bookName, authorName, coverURL, price);
  console.log(!!selectedItem)

  const CreateNewBook = () => {
    createBook({
      body: {
        book_title: bookName,
        name_of_author: authorName,
        price_of_book: price,
        cover: coverURL
      },
      onSuccess: () => {
        onCloseIconPress()
        onCreateSuccess()
      },
      onError: (error) => { Alert.alert("Error hapened.") }
    })
  }

  const editBook = () => {
    updateBook({
      ID: selectedItem?.id,
      body: {
        book_title: bookName,
        name_of_author: authorName,
        price_of_book: price,
        cover: coverURL
      },
      onSuccess: () => {
        onCloseIconPress()
        onCreateSuccess()
      },
      onError: (error) => { Alert.alert("Error hapened.") }
    })
  }

  return (
    <SafeAreaView>
      <Ionicons name="close-circle" size={80} color="#e81d1d" onPress={onCloseIconPress} />
      <View style={styles.body}>
        <Text style={styles.title}>Book Details</Text>
        <AddTextInput value={bookName} onChangeText={setBookName} placeholder={"Book Name"} />
        <AddTextInput value={authorName} onChangeText={setAuthorName} placeholder={"Author Name"} />
        <AddTextInput value={coverURL} onChangeText={setCoverURL} placeholder={"Cover Image"} />
        <AddTextInput value={price} onChangeText={setPrice} placeholder={"Book Price"} keyboardType={"numeric"} />
        <AppButton onPress={!!selectedItem ? editBook : CreateNewBook} />
      </View>
    </SafeAreaView>
  )
}

export default AddBookScreen

const styles = StyleSheet.create({
  body: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 15,
    paddingTop: 30
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 20
  }
})