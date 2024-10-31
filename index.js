function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInputElement.value;

  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInputElement.value}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

let city = "Paris";
let apiKey = "33711ce45d3fc0cdf694db1ee9oaeaat";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=33711ce45d3fc0cdf694db1ee9oaeaat&units=metric`;

function displayTemperature(response) {
  let temperature = response.data.temperature.current;
  let city = response.data.city;

  let currentTemperatureValue = document.querySelector(
    ".current-temperature-value"
  );
  currentTemperatureValue.innerHTML = `${temperature}`;
}

axios.get(apiUrl).then(displayTemperature);
