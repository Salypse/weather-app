export async function callWeatherApi(location) {
    await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=TMVHLLDKARVNEZXC6TYJWAM47`)
    .then(function(response) {
        return response.json()
    })
}
