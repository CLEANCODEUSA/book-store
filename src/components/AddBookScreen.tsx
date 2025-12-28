import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';

const AddBookScreen = ({ onCloseIconPress }) => {
  return (
    <SafeAreaView>
      <Ionicons name="close-circle" size={80} color="#e81d1d" onPress={onCloseIconPress} />
    </SafeAreaView>
  )
}

export default AddBookScreen

const styles = StyleSheet.create({})