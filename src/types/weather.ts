export type Weather = {
  description: string
  icon: number
  main: {
    temp: number
  }
  country: string
  timestamp: number
  name: string
}

export type WeatherResponse = {
  weather: Array<{id: number; description: string}>
  main: {temp: number}
  name: string
  sys: {
    country: string
  }
  dt: number
}

export type WeatherSearchResponse = {
  weather: Array<{id: number; description: string}>
  main: {temp: number}
  name: string
  sys: {
    country: string
  }
  dt: number
  coord: {
    lat: number
    lon: number
  }
}
