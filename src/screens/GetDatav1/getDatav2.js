import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  FlatList
} from 'react-native'

// get data from this URL!
const userID = 'pqrs'
const userPass = 's1234'
const movieURL = 'https://irflabs.in/gedl/edllogin.php?userId=pqrs&pass=s1234'

const GetData = () => {
  // managing state with 'useState'
  const [isLoading, setLoading] = useState(true)

  const [sensorData, setSensorData] = useState([])

  // similar to 'componentDidMount', gets called once
  useEffect(() => {
    fetch(movieURL)
      .then((response) => response.json()) // get response, convert to json
      .then((json) => {
        setSensorData(json)
        console.log(json[0].Temp)
      })
      .catch((error) => alert(error)) // display errors
      .finally(() => {
        setLoading(false)
        //console.log(json)
      }) // change loading state
  }, [])

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

  const getData = (field) => sensorData.map((dataPoint) => dataPoint[field])

  // Example usage:
  const temperatureValues = getData('Temp')
  const humidityValues = getData('Hum')
  const rainfallValues = getData('Rain')

  console.log('Temperature Values:', temperatureValues)
  console.log('Humidity Values:', humidityValues)
  console.log('Rainfall Values:', rainfallValues)

  return (
    <SafeAreaView style={styles.container}>
      {/* While fetching show the indicator, else show response*/}
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <Text>Hi</Text>
        </View>
      )}
    </SafeAreaView>
  )
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
