import axios from "../../node_modules/axios/index";
import { Alert } from 'react-native';

const endpointURL = "https://694b54ac26e870772067d39d.mockapi.io/books"

const getListOfBooks = async () => {
  try {
    const response = await axios.get(endpointURL);
    console.log(JSON.stringify(response.data, null, 3))
    setBookList(response.data)
  } catch (error) {
    console.log("An Error occured" + error)
  }
}

const getBookByID = async () => {
  try {
    const response = await axios.get(`${endpointURL}/4`);
    console.log(JSON.stringify(response.data, null, 3))
  }
  catch (error) {
    console.log("An Error occured: " + error)
  }
}

const deleteBookByID = async () => {
  try {
    const response = await axios.delete(`${endpointURL}/3`)
    Alert.alert("Book has been deleted successfully.")
  } catch (error) {
    console.log(error)
  }
}

const body = {
  name_of_author: "Accessing APIs with React Native",
  cover: "https://images.unsplash.com/photo-1551721434-8b94ddff0e6d",
  price_of_book: "50.00",
  email_of_seller: "cynthiap@gmail.com"
}

const createBook = async () => {
  try {
    const response = await axios.post(endpointURL, body)
    Alert.alert("Book has been created.")
    getListOfBooks();
  } catch (error) {
    console.log(error)
  }
}

const updateBook = async () => {
  try {
    const response = await axios.put(`${endpointURL}/8`, body)
    Alert.alert("Book has been updated.")
    getListOfBooks()
  } catch (error) {
    console.log(error)
  }
}
