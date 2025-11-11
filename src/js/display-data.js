export const displayData = function(data) {
    clearData()
    
    const locationData = document.getElementById("location-data")
    locationData.style.display = "grid";

    /* Location Data Header */
    const dataHeader = document.createElement("h1")
    dataHeader.id = "location-name"
    dataHeader.textContent = data.locationName

    /* Location Condition */
    const locationCondition = document.createElement("p")
    locationCondition.id = "location-condition"
    locationCondition.textContent = `Condition: ${data.currentCondition}`

    /* Location Feels Like */
    const locationFeelsLike = document.createElement("p")
    locationFeelsLike.id = "location-feels-like"
    locationFeelsLike.textContent = `Feels Like: °${data.currentFeelsLike}`

    /* Location Current Temp */
    const locationTemp = document.createElement("p")
    locationTemp.id = "location-temp"
    locationTemp.textContent = `Temp: °${data.currentTemp}`

    locationData.append(
        dataHeader,
        locationCondition,
        locationFeelsLike,
        locationTemp,
    )
}


function clearData() {
    const defaultText = document.getElementById("default-text")
    const locationData = document.getElementById("location-data")
    const locationInput = document.getElementById("location-input")

    if (defaultText) {
        defaultText.remove()
    }
    locationData.innerHTML = ""
    locationInput.value = ""
}

/* TODO
    input validation
    Style Data Card
*/