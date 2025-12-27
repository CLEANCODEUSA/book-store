import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import BookCard from '../components/BookCard'
import { SafeAreaView } from 'react-native-safe-area-context';
import { deleteBookByID, getListOfBooks } from '../api/config';

const HomeScreen = () => {
  const [bookList, setBookList] = useState()

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
        />}
      />
    </SafeAreaView>

  )
}

export default HomeScreen