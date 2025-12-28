import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const AppButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>Save</Text>
    </TouchableOpacity>
  )
}

export default AppButton

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1273de",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  }
})