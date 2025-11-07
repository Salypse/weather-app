import "./styles.css"
import { getLocationData } from "../src/js/weather-data"

async function contentHandler() {
    const locationForm = document.getElementById("location-form")
    const locationInput = document.getElementById("location-input")

    locationForm.addEventListener("submit", async event => {
        event.preventDefault()

        try {
            const response = await getLocationData(locationInput.value)
            console.log(response)
        } catch (error) {
            console.error(`Error submitting form: ${error}`)
        }
        
    })
};


contentHandler()