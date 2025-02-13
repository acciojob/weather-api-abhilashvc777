//your JS code here. If required.
const btn = document.querySelector("button")
const div = document.querySelector("#weatherData")
const getCurrentWeather = async()=>{
	let city = `London`
   let key = `1dea75705ad20bcb9e87f9e6d630d89a`
	const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
	const data = await res.json() 
	return data;
}
getCurrentWeather()
let getWeather = async()=>{
	  let weatherData = await getCurrentWeather()
	 div.textContent = `Current weather in ${weatherData.name} : ${weatherData.weather[0].description}`
}
btn.addEventListener("click",getWeather)
// document.getElementById('getWeatherBtn').addEventListener('click', getWeather);
// function getWeather() {
// 	const apiKey = '1dea75705ad20bcb9e87f9e6d630d89a'; // Replace 'YOUR_API_KEY' with your actual API key from OpenWeatherMap
//     const city = 'London';
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

//     axios.get(apiUrl)
//         .then(response => {
//             const weatherDescription = response.data.weather[0].description;
//             document.getElementById('weatherData').innerText = `Current weather in ${city}: ${weatherDescription}`;
//         })
//         .catch(error => {
//             console.error('There was a problem fetching the weather data:', error);
//         });
// }