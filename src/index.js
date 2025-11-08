import "./styles.css"
import { getLocationData } from "../src/js/weather-data"
import { displayData } from "./js/display-data";

async function contentHandler() {
    const locationForm = document.getElementById("location-form")
    const locationInput = document.getElementById("location-input")

    locationForm.addEventListener("submit", async event => {
        event.preventDefault()

        try {
            const response = await getLocationData(locationInput.value)
            displayData(response)
        } catch (error) {
            console.error(`Error submitting form: ${error}`)
        }
        
    })
};


contentHandler()