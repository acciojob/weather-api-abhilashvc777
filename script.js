//your JS code here. If required.
const btn = document.querySelector("button")
const div = document.querySelector("#weatherData")
const weatherData = async()=>{
	const res = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London?unitGroup=metric&key=8NBU7YB4UXCK38TRLYL7WT8Z3&contentType=json")
	const data = await res.json()
	btn.addEventListener("click",()=>{
		div.textContent = `Current weather in London:${data.currentConditions.conditions}`
	})
}
weatherData()