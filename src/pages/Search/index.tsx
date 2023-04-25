import React, { useState, useEffect } from "react";
// @ts-ignore
import { Wrapper } from "./styles";
import { Weather, WeatherSearchResponse } from "../../types/weather";
import { Forecast, ForecastResponse } from "../../types/forecast";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import Card from "../../components/Card";

const Search: React.FC = () => {
	const [weather, setWeather] = useState<Weather | null>(null);
	const [forecast, setForecast] = useState<Forecast | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string>("");
	const { query } = useParams<{ query: string }>();

	useEffect(() => {
		(async () => {
			try {
				let weatherRes: Response = await fetch(
					`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
				);
				let weatherResBody: WeatherSearchResponse = await weatherRes.json();
				setWeather({
					description: weatherResBody.weather[0].description,
					icon: weatherResBody.weather[0].id,
					main: weatherResBody.main,
					name: weatherResBody.name,
					country: weatherResBody.sys.country,
					timestamp: weatherResBody.dt,
				});
				let coords = weatherResBody.coord;
				let forecastRes: Response = await fetch(
					`https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&exclude=minutely&units=metric`
				);
				let forecastResBody: ForecastResponse = await forecastRes.json();
				setForecast({
					daily: forecastResBody.daily,
				});
				setLoading(false);
			} catch (err) {
				setLoading(false);
				setError("Could not find any weather data! Try again later");
			}
		})();

		return () => {
			setError("");
			setLoading(true);
		};
	}, [query]);

	return !loading ? (
		<Wrapper>
			{weather && forecast && !error ? (
				<>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}}>
						<p id="daily-forecast">Current Weather</p>
						<div className="main">
							<h2>
								{weather.name}, {weather.country}
							</h2>
							<Card
								date={new Date(weather.timestamp * 1000)}
								time={false}
								data={weather.main.temp + "°C"}
								description={weather.description}
							/>
						</div>
					</div>
					<div>
						<p id="daily-forecast">Daily Forecast</p>
						<div>
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									justifyContent: "center",
									flexWrap: "wrap",
									alignItems: "center",
									alignContent: "center",
								}}>
								{forecast.daily.map((day) => (
									<Card
										key={day.dt}
										date={new Date(day.dt * 1000)}
										time={false}
										data={day.temp.min + "°C/" + day.temp.max + "°C"}
										description={day.weather[0].description}
									/>
								))}
							</div>
						</div>
					</div>
				</>
			) : (
				<div className="error">
					<h2>{error}</h2>
				</div>
			)}
		</Wrapper>
	) : (
		<Wrapper>
			<Loader />
		</Wrapper>
	);
};

export default Search;
