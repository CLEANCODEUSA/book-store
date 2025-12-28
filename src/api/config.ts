import axios from "../../node_modules/axios/index";
import { Alert } from 'react-native';

const endpointURL = "https://694b54ac26e870772067d39d.mockapi.io/books"

export const getListOfBooks = async ({onSuccess, onError}) => {
  try {
    const response = await axios.get(endpointURL);
    console.log(JSON.stringify(response.data, null, 3))
    onSuccess && onSuccess(response.data)
  } catch (error) {
    onError && onError(error)
    console.log("An Error occured" + error)
  }
}

export const getBookByID = async ({onSuccess, onError}) => {
  try {
    const response = await axios.get(`${endpointURL}/4`);
    console.log(JSON.stringify(response.data, null, 3))
    onSuccess && onSuccess(response.data)
  }
  catch (error) {
    onError && onError(error)
    console.log("An Error occured: " + error)
  }
}

export const deleteBookByID = async ({onSuccess, onError, itemID}) => {
  try {
    const response = await axios.delete(`${endpointURL}/${itemID}`)
    Alert.alert("Book has been deleted successfully.")
    onSuccess && onSuccess(response.data)
  } catch (error) {
    onError && onError(error)
    console.log(error)
  }
}

export const createBook = async ({onSuccess, onError, body}) => {
  try {
    const response = await axios.post(endpointURL, body)
    Alert.alert("Book has been created.")
    onSuccess && onSuccess(response.data)
  } catch (error) {
    onError && onError(error)
    console.log(error)
  }
}

export const updateBook = async ({onSuccess, onError, body, ID}) => {
  try {
    const response = await axios.put(`${endpointURL}/${ID}`, body)
    Alert.alert("Book has been updated.")
    onSuccess && onSuccess(response.data)
  } catch (error) {
    onError && onError(error)
    console.log(error)
  }
}
