import { fetch } from "./callMock.js";
import axios from "axios";

import { BASE_URL } from "./baseUrl.js";

function cityWeather(city) {
  // Use console.log within the cityWeather function for debugging.
  // Use the &q= prefix with the city parameter at the end of the URL in order to mock the data correctly.

  return new Promise((resolve, reject) => {
    // Implement the function - call http request
    resolve(object_to_be_returned);
    // Implement the function
  });
}

export { cityWeather };