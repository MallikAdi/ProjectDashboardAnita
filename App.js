import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DataFetchingComponent from './src/components/GetDatav2/DataFetch'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './src/components/LoginScreen'
import HomeScreen from './src/screens/HomeScreen'
import TempScreen2 from './src/screens/parameters/TempScreenv2'
import SoilMScreen2 from './src/screens/parameters/SoilMv2'
import HumidityScreen2 from './src/screens/parameters/HumidityScreenv2'
import RainScreen2 from './src/screens/parameters/RainScreenv2'

const Stack = createNativeStackNavigator()

const App = () => {
  DataFetchingComponent()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Temp" component={TempScreen2} />
        <Stack.Screen name="Rain" component={RainScreen2} />
        <Stack.Screen name="Humidity" component={HumidityScreen2} />
        <Stack.Screen name="Soil Moisture" component={SoilMScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App
