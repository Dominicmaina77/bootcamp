const API_KEY = "";
let isFah = false;
let searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];

// load history
updateHistoryUI();

async function getWeather(city) {
  const wel = document.getElementById("weather");
  const fel = document.getElementById("forecast");
  wel.innerHTML = "<div class='loading>Loading...</div>";
  fel.innerHTML = "";

  try {
    const [curr, forecast] = await Promise.all([
      fetch().then((r) => r.json()),
      fetch().then((r) => r.json()),
    ]);

    if (curr.cod !== 200) throw new Error(curr.message);

    // save to history
    if (!searchHistory.includes(city)) {
      searchHistory.unshift(city);
      if (searchHistory.length > 5) searchHistory.pop();
      localStorage.setItem("weatherHistory", JSON.stringify(searchHistory));
      updateHistoryUI();
    }
    displayWeather(curr);
    displayForecast(forecast);
  } catch (error) {
    wel.innerHTML = `<p style="color:#ff6b6b">Error:${
      error.message || "City not found"
    }</p>`;
  }
}
function displayWeather(data) {
  const temp = isFah
    ? (data.main.temp * 9 / 5 + 32).toFixed(1)
    : data.main.temp.toFixed(1);
  const unit = isFah ? "F" : "C";
  document.getElementById("weather").innerHTML = `<h3>${data.name}</h3>
    <p>${temp}${unit}</p>
    <p>${data.weather[0].description}</p>
    `;
    document.getElementById("forecast").innerHTML = html;

}
function toggleUnit(){
    isFah = document.getElementById("unitToggle").checked;
    // refetch current city 
    const city = document.getElementById('weather').querySelector("h3").textContent;
    if(city)getWeather(city);

}

function useGeolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(async(pos)=>{
            const {latitude, longitude}= pos.coords;
            const res = await fetch();
            const data = await res.json();
            getWeather(data.name);
        }, ()=> alert("Unable to get location") );
    }else{
        alert("Geolocation not supported");
    }
}
function search(){
    const city = document.getElementById("cityInput").value.trim();
    if(city) getWeather(city);
}
function updateHistoryUi(){
    const hist = document.getElementById("history");
    hist.innerHTML= searchHistory.map(city =>`<button onclick="getWeather('${city}')">${city}</button>`).join("");
}

// enter key
document.getElementById("cityInput").addEventListener("keyup", (e) =>{
    if(e.key === "Enter") search();
});
