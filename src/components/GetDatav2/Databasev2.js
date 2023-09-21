const Database = {
  Rain: [],
  Temp: [],
  Hum: [],
  SoilM: [],
  TimeS: []
  // Add more fields as needed
}

export function updateDatabase(data) {
  data.forEach((entry) => {
    for (const key in Database) {
      if (key in entry) {
        Database[key].push(entry[key])
      }
    }
  })
  console.log(Database)
}

export default Database
