//your JS code here. If required.
const btn = document.querySelector("button")
const div = document.querySelector("#weatherData")
const getCurrentWeather = async()=>{
	const res = await fetch("https://api.openweathermap.org/data/2.5/weather?q=london&appid=1dea75705ad20bcb9e87f9e6d630d89a")
	const data = await res.json()
	return data;
}
btn.addEventListener("click",async()=>{
	  const weatherData = await getCurrentWeather();
		div.textContent = `Current weather in London : ${weatherData.weather[0].main}`
	})