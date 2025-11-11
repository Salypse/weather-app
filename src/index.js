import "./styles.css"
import { getLocationData } from "../src/js/weather-data"
import { displayData } from "./js/display-data";

async function contentHandler() {
    const locationForm = document.getElementById("location-form")
    const locationInput = document.getElementById("location-input")
    const inputError = document.querySelector(".error")

    locationInput.addEventListener("input", () => {
        if (locationInput.validity.valid) {
            inputError.textContent = ""
            inputError.className = "error"
        } else {
            displayError()
        }
    })

    locationForm.addEventListener("submit", async event => {
        event.preventDefault()

        if (!locationInput.validity.valid) {
            displayError()
        } else {
            try {
                const response = await getLocationData(locationInput.value)
                displayData(response)
            } catch (error) {
                console.error(`Error submitting form: ${error}`)
            }
        }
    })
};

function displayError() {
    const locationInput = document.getElementById("location-input")
    const inputError = document.querySelector(".error")

    if (locationInput.validity.valueMissing) {
        inputError.textContent = "Please enter a Location Name."
    }
    inputError.classList.add("active")
}


contentHandler()