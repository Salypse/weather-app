async function callWeatherApi(location) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=TMVHLLDKARVNEZXC6TYJWAM47`)

        if (!response.ok) {
            console.error(`Error Status: ${response.status}`)
            return null
        }
        return response.json()
        
    } catch (error) {
        console.error(`Error fetching weather data: ${error}`)
        return null
    }
}

export async function getLocationData(location) {
    try {
        const data = await callWeatherApi(location)

        return {
            "currentCondition": data.currentConditions.conditions || "Not available",
            "currentFeelsLike": data.currentConditions.feelslike || "Not available",
            "currentTemp": data.currentConditions.temp || "Not available",
        }
    } catch (error) {
        //If error return default values
        console.error("Error: Couldn't get weather data")
            return {
                "currentCondition": "Not available",
                "currentFeelsLike": "Not available",
                "currentTemp": "Not available",
            }
    }
}