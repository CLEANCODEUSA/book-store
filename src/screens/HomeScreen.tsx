import { View, Text } from 'react-native'
import React from 'react'
import BookCard from '../components/BookCard'
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BookCard title={"Soul"} price={30.00} authorName={"Olivia wilson"} imageURL={"https://plus.unsplash.com/premium_photo-1766746551190-2f186c2f2360"} />
      <BookCard title={"Second"} price={20} authorName={"Olivia wilson"} imageURL={"https://plus.unsplash.com/premium_photo-1766746551190-2f186c2f2360"} />
      <BookCard title={"333"} price={90} authorName={"Olivia wilson"} imageURL={"https://plus.unsplash.com/premium_photo-1766746551190-2f186c2f2360"} />
    </SafeAreaView>

  )
}

export default HomeScreen