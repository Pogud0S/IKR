alert("Hello");
document.getElementById('weather-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const city = document.getElementById('city-input').value;
    getWeather(city);
});

function getWeather(city) {
    document.getElementById('loading').style.display = 'block';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=274a625250a3f8cf7344d5156cf85615&units=metric`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('loading').style.display = 'none';
            displayWeather(data);
        })
        .catch(error => {
            document.getElementById('loading').style.display = 'none';
            alert('Ошибка получения данных');
        });
}

function displayWeather(data) {
    const weatherDisplay = document.getElementById('weather-display');
    weatherDisplay.innerHTML = `
        <h2>${data.name}</h2>
        <p>Температура: ${data.main.temp} °C</p>
        <p>Погода: ${data.weather[0].description}</p>
    `;
}