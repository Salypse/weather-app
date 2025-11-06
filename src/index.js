import "./styles.css"
import { getLocationData } from "../src/js/weather-data"

const data = await getLocationData("Chicago")
console.log(data)