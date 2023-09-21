import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  FlatList
} from 'react-native'
import Data from '../components/DataBase'

// get data from this URL!
const userID = 'pqrs'
const userPass = 's1234'
const movieURL = 'https://irflabs.in/gedl/edllogin.php?userId=pqrs&pass=s1234'

const APIComm = () => {
  // managing state with 'useState'
  const [isLoading, setLoading] = useState(true)

  const [sensorData, setSensorData] = useState([])

  // similar to 'componentDidMount', gets called once
  useEffect(() => {
    fetch(movieURL)
      .then((response) => response.json()) // get response, convert to json
      .then((json) => {
        setSensorData(json)
        // console.log(json[0].Temp)
      })
      .catch((error) => alert(error)) // display errors
      .finally(() => {
        setLoading(false)
        //console.log(json)
      }) // change loading state
  }, [])
  return sensorData

  // Also get call asynchronous function
  async function getMoviesAsync() {
    try {
      let response = await fetch(movieURL)
      let json = await response.json()
      /* setData(json.Batt)
      setTitle(json.Temp)
      setDescription(json.Rain) */
      setTemp(json.Temp)
      setLoading(false)
    } catch (error) {
      alert(error)
    }
  }
}

function GetData() {
  // Extract the specified field from sensorData and return an array of values
  const fields = ['Batt', 'Temp', 'Hum', 'Rain', 'SoilM', 'TimeS']
  const sensorData = APIComm()
  const dataObject = {}

  fields.forEach((field) => {
    dataObject[field] = APIComm().map((dataPoint) => dataPoint[field])
  })

  Object.assign(Data, dataObject)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 48
  },
  movieText: {
    fontSize: 26,
    fontWeight: '200'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  description: {
    textAlign: 'center',
    marginBottom: 18,
    fontWeight: '200',
    color: 'green'
  }
})

export default GetData
