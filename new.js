async function fetchWeather() {  // Ensure function is async
    try {
        const city = document.getElementById("cityInput").value;
        if (!city) {
            alert("Please enter a city name.");
            return;
        }

        const apiKey = "3ec8faaea289e8806e410505ae78f3d8"; // Replace with your API key
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`City not found. Status: ${response.status}`);
        }

        const data = await response.json();

        document.getElementById("cityName").innerText = `${data.name}, ${data.sys.country}`;
        document.getElementById("temperature").innerText = `🌡 Temperature: ${data.main.temp}°C`;
        document.getElementById("humidity").innerText = `💧 Humidity: ${data.main.humidity}%`;
        document.getElementById("weatherCondition").innerText = `🌤 Condition: ${data.weather[0].description}`;

    } catch (error) {
        console.error("Error fetching weather:", error);
        document.getElementById("weatherInfo").innerHTML = "<p style='color: red;'>City not found or network issue. Try again.</p>";
    }
}

// Attach event listener correctly
document.getElementById("getWeather").addEventListener("click", fetchWeather);
