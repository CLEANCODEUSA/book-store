import { View, Text } from 'react-native'
import React from 'react'
import BookCard from '../components/BookCard'
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <BookCard />
    </SafeAreaView>

  )
}

export default HomeScreen