import React, { useEffect } from 'react'
import { updateDatabase } from './Databasev2'

function DataFetchingComponent() {
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://irflabs.in/gedl/edllogin.php?userId=pqrs&pass=s1234'
        )
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        updateDatabase(data) // Update the Database with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return null // This component doesn't render anything visible
}

export default DataFetchingComponent
