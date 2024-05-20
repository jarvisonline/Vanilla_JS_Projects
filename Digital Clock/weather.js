// Function to handle geolocation success
function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // API call
  const apiKey = "ec300da21315ba94ebda4ef81d7639f7";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // City name
      let cityName = data.name;

      // Update HTML element with city name
      document.getElementById("city-name").innerHTML = cityName;

      // Update other HTML elements with fetched data
      let description = data.weather[0].description;
      let temp = Math.round(data.main.temp - 273.15); // Convert temperature from Kelvin to Celsius
      let feelsLike = Math.round(data.main.feels_like - 273.15); // Convert feels_like from Kelvin to Celsius

      document.getElementById("weather-description").innerHTML = description;
      document.getElementById("temperature").innerHTML = temp + "°C";
      document.getElementById("feels-like").innerHTML =
        "Feels Like: <strong>" + feelsLike + "°C</strong>";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Function to handle geolocation error
function error() {
  console.error("Unable to retrieve your location");
}

// Check if geolocation is supported
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, error);
} else {
  console.error("Geolocation is not supported by your browser");
}
