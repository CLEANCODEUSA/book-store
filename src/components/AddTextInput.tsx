import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const AddTextInput = ({ value, onChangeText, placeholder, keyboardType, ...otherProps }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        {...otherProps}
      />
    </View>
  )
}

export default AddTextInput

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#F1F1F1",
    width: "100%",
    height: 48,
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 8,
    marginBottom: 20
  }
})