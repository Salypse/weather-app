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
            "locationName": data.resolvedAddress || "NA",
            "currentCondition": data.currentConditions.conditions || "NA",
            "currentFeelsLike": data.currentConditions.feelslike || "NA",
            "currentTemp": data.currentConditions.temp || "NA",
        }
    } catch (error) {
        //If error return default values
        console.error("Error: Couldn't get weather data")
            return {
                "locationName": location,
                "currentCondition": "NA",
                "currentFeelsLike": "NA",
                "currentTemp": "NA",
            }
    }
}