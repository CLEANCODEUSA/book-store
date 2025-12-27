import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import BookCard from '../components/BookCard'
import { SafeAreaView } from 'react-native-safe-area-context';
import { getListOfBooks } from '../api/config';

const HomeScreen = () => {
  const [bookList, setBookList] = useState()

  useEffect(() => {
    getListOfBooks({
      onSuccess: books => setBookList(books),
      onError: err => console.log(err)
    })
  }, [])

  console.log(bookList);

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
        />}
      />
    </SafeAreaView>

  )
}

export default HomeScreen