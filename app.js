
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (searchInput.value === "") return;
  fetchWeather(searchInput.value);
//   displayResults(fetchWeather(searchInput.value));
});

const displayResults = (data) => {
    if(!data) return;

    const searchResult = document.getElementById("searchResult");
    searchResult.classList.add("active");

    const cityName = document.getElementById("cityName");
    const temperature = document.getElementById("temperature");
    const feel = document.getElementById("feel");
    const humidity = document.getElementById("humidity");
    const wind = document.getElementById("wind");

    cityName.textContent = `${data.location?.name}`;
    temperature.textContent = `${data.current?.temp_c} °C`;
    feel.textContent = `Feels like: ${data.current?.feelslike_c} °C`;
    humidity.textContent = `Humidity: ${data.current?.humidity} %`;
    wind.textContent = `Wind: ${data.current?.wind_kph} km/h`;
}

const fetchWeather = async (city) => {
  const endpoint = `http://api.weatherapi.com/v1/current.json?key=303c4398ea96457b81f105006232907&q=${city}`;
  try {
    const response = await fetch(endpoint, { mode: "cors" });
    if (!response.ok) throw new Error(`City ${city} not found`);
    const data = await response.json();
    displayResults(data);
    console.log(data);
  } catch (error) {
    alert(error);
    return null;
  }
};



