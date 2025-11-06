export async function callWeatherApi(location) {
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