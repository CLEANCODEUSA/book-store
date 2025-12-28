import { View, Text, FlatList, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import BookCard from '../components/BookCard'
import { SafeAreaView } from 'react-native-safe-area-context';
import { deleteBookByID, getListOfBooks } from '../api/config';
import AddButton from '../components/AddButton';
import AddBookScreen from '../components/AddBookScreen';

const HomeScreen = () => {
  const [bookList, setBookList] = useState()
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState({})

  const getListOfBooksFN = () => {
    getListOfBooks({
      onSuccess: books => setBookList(books),
      onError: err => console.log(err)
    })
  }

  useEffect(() => {
    getListOfBooksFN()
  }, [])

  const onDeleteItem = (item) => {
    deleteBookByID({
      onSuccess: () => {
        getListOfBooksFN()
      },
      onError: (error) => console.log(error),
      itemID: item.id
    })
  }

  const onEditItem = (item) => {
    setModalVisible(true)
    setSelectedItem(item)
    // console.log(item.book_title)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={bookList}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <BookCard
          authorName={item.name_of_author}
          price={item.price_of_book}
          imageURL={item.cover}
          title={item.book_title}
          onDeleteItem={() => onDeleteItem(item)}
          onEditItem={() => { onEditItem(item) }}
        />}
      />
      <AddButton onPress={() => {
        setModalVisible(true)
        setSelectedItem({})
      }} />
      <Modal visible={modalVisible} animationType="slide">
        <AddBookScreen
          onCloseIconPress={() => { setModalVisible(false) }}
          onCreateSuccess={() => getListOfBooksFN()}
          selectedItem={selectedItem}
        />
      </Modal>
    </SafeAreaView>

  )
}

export default HomeScreen