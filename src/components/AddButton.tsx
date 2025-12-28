import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

const AddButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} >
      <AntDesign name="plus" size={50} color="white" />
    </TouchableOpacity>
  )
}

export default AddButton

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: 80,
    backgroundColor: "#1273de",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: Platform.OS === "android" ? 30 : 0
  }
})
