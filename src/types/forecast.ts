export type Forecast = {
  daily: Array<{
    dt: number
    temp: {min: number; max: number}
    weather: Array<{id: number; description: string}>
  }>
}

export type ForecastResponse = {
  daily: Array<{
    dt: number
    temp: {min: number; max: number}
    weather: Array<{id: number; description: string}>
  }>
}
