const API_KEY = "aba03038da3b1e408f712213fa47f572";
let isFahrenheit = false;
let searchHistory = JSON.parse(localStorage.getItem("weatherHistory")) || [];

// Load history on start
updateHistoryUI();

async function getWeather(city) {
  const wEl = document.getElementById("weather");
  const fEl = document.getElementById("forecast");
  wEl.innerHTML = "<div class='loading'>Loading...</div>";
  fEl.innerHTML = "";

  try {
    const [curr, forecast] = await Promise.all([
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      ).then((r) => r.json()),
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      ).then((r) => r.json()),
    ]);

    if (curr.cod !== 200) throw new Error(curr.message);

    // Save to history
    if (!searchHistory.includes(city)) {
      searchHistory.unshift(city);
      if (searchHistory.length > 5) searchHistory.pop();
      localStorage.setItem("weatherHistory", JSON.stringify(searchHistory));
      updateHistoryUI();
    }

    displayWeather(curr);
    displayForecast(forecast);
  } catch (err) {
    wEl.innerHTML = `<p style="color:#ff6b6b">Error: ${
      err.message || "City not found"
    }</p>`;
  }
}

function displayWeather(data) {
  const temp = isFahrenheit
    ? ((data.main.temp * 9) / 5 + 32).toFixed(1)
    : data.main.temp.toFixed(1);
  const unit = isFahrenheit ? "°F" : "°C";
  document.getElementById("weather").innerHTML = `
        <h3>${data.name}</h3>
        <p>${temp}${unit}</p>
        <p>${data.weather[0].description}</p>
      `;
}

function displayForecast(data) {
  // Get one forecast per day (at 12:00)
  const daily = data.list
    .filter((item) => item.dt_txt.includes("12:00:00"))
    .slice(0, 5);
  let html = "<h4>5-Day Forecast</h4>";
  daily.forEach((day) => {
    const temp = isFahrenheit
      ? ((day.main.temp * 9) / 5 + 32).toFixed(0)
      : day.main.temp.toFixed(0);
    const date = new Date(day.dt_txt).toLocaleDateString();
    html += `<p>${date}: ${temp}°${isFahrenheit ? "F" : "C"}</p>`;
  });
  document.getElementById("forecast").innerHTML = html;
}

function toggleUnit() {
  isFahrenheit = document.getElementById("unitToggle").checked;
  // Re-fetch current city if already displayed
  const city = document
    .getElementById("weather")
    .querySelector("h3")?.textContent;
  if (city) getWeather(city);
}

function useGeolocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
        );
        const data = await res.json();
        getWeather(data.name);
      },
      () => alert("Unable to get location")
    );
  } else {
    alert("Geolocation not supported");
  }
}

function search() {
  const city = document.getElementById("cityInput").value.trim();
  if (city) getWeather(city);
}

function updateHistoryUI() {
  const hist = document.getElementById("history");
  hist.innerHTML = searchHistory
    .map((city) => `<button onclick="getWeather('${city}')">${city}</button>`)
    .join(" ");
}

// Allow Enter key
document.getElementById("cityInput").addEventListener("keyup", (e) => {
  if (e.key === "Enter") search();
});
