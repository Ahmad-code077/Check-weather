const apiKey = '9a2a5a16832316f5d3835238ccc1f625'
const api = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

const searchInp = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const icon = document.querySelector('.icon')
const weatherImg = document.querySelector('.weather-icon')
const err = document.querySelector('.error')
async function sayWeather(place) {
  const response = await fetch(api + place + `&appid=${apiKey}`)
  if (response.status === 404) {
    err.style.display = 'block'
    icon.style.display = 'none'
  } else {
    let data = await response.json()

    // Selecting the elements
    const temperature = document.querySelector('.temp')
    const city = document.querySelector('.city')
    const humudity = document.querySelector('.humudity')
    const wind = document.querySelector('.wind')
    // Affecting the values
    temperature.innerHTML = Math.round(data.main.temp) + '°C'
    city.innerHTML = data.name
    humudity.innerHTML = data.main.humidity + '%'
    wind.innerHTML = data.wind.speed + 'Km/h'

    if (data.weather[0].main == 'cloud') {
      weatherImg.src = 'images/clouds.png'
    } else if (data.weather[0].main == 'Clouds') {
      weatherImg.src = 'images/clouds.png'
    } else if (data.weather[0].main == 'Clear') {
      weatherImg.src = 'images/clear.png'
    } else if (data.weather[0].main == 'Drizzle') {
      weatherImg.src = 'images/drizzle.png'
    } else if (data.weather[0].main == 'Mist') {
      weatherImg.src = 'images/mist.png'
    } else if (data.weather[0].main == 'Rain') {
      weatherImg.src = 'images/rain.png'
    } else if (data.weather[0].main == 'Snow') {
      weatherImg.src = 'images/snow.png'
    }

    icon.style.display = 'block'
    err.style.display = 'none'
  }
}
searchBtn.addEventListener('click', () => {
  sayWeather(searchInp.value)
})
