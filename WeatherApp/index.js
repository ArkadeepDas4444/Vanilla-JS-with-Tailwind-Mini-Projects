const apiKey = 'e86f89e93e7e4cd9a04229822c649d2a';

function getWeather(city) {
    // fetch(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(city)}&key=${apiKey}`)
    //     .then(response => {
    //         if (!response.ok)
    //             throw new Error(`HTTP error! status: ${response.status}`);
    //         return response.json();
    //     })
    //     .then(data => {
    //         const result = data.results[0];
    //         const { lat, lng } = result.geometry;
    //         console.log(`Latitude: ${lat}, Longitude: ${lng}`);
    //         return fetch('https://api.api-ninjas.com/v1/weather?lat='+lat+'&lon='+lng, {
    //             method: 'GET',
    //             headers: {
    //                 'X-Api-Key': '+fzAmJTHa2G+q4VrAkJw7g==8HadK0oKnnFWQZ0I'
    //             }
    //         });
    //     })
    //     .then(response => {
    //         if (!response.ok)
    //             throw new Error(`HTTP error! status: ${response.status}`);
    //         return response.json();
    //     })
    //     .then(data => console.log(`Weather data for ${city}:`, data))
    //     .catch(error => console.error(error));

    const data = {
        "cloud_pct": 75,
        "temp": 29,
        "feels_like": 36,
        "humidity": 94,
        "min_temp": 29,
        "max_temp": 29,
        "wind_speed": 0,
        "wind_degrees": 0,
        "sunrise": 1752362986,
        "sunset": 1752411261
    };
    console.log(`Weather data for ${city}:`, data);
    document.getElementById("cityName").textContent = city;
    // document.getElementById("cloud_pct").textContent = data.cloud_pct;
    document.getElementById("temp").textContent = data.temp;
    // document.getElementById("feels_like").textContent = data.feels_like;
    // document.getElementById("humidity").textContent = data.humidity;
    // document.getElementById("min_temp").textContent = data.min_temp;
    // document.getElementById("max_temp").textContent = data.max_temp;

    // const cityArr = ["Delhi", "Mumbai", "Kolkata", "Chennai", "Bengaluru", "Ahmedabad"];
    // cityArr.filter(item => item != city).map(item => {
    //     fetch(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(item)}&key=${apiKey}`)
    //         .then(response => {
    //             if (!response.ok)
    //                 throw new Error(`HTTP error! status: ${response.status}`);
    //             return response.json();
    //         })
    //         .then(itemData => {
    //             const result = itemData.results[0];
    //             const { lat, lng } = result.geometry;
    //             console.log(`Latitude: ${lat}, Longitude: ${lng}`);
    //             return fetch('https://api.api-ninjas.com/v1/weather?lat=' + lat + '&lon=' + lng, {
    //                 method: 'GET',
    //                 headers: {
    //                     'X-Api-Key': '+fzAmJTHa2G+q4VrAkJw7g==8HadK0oKnnFWQZ0I'
    //                 }
    //             });
    //         })
    //         .then(response => {
    //             if (!response.ok)
    //                 throw new Error(`HTTP error! status: ${response.status}`);
    //             return response.json();
    //         })
    //         .then(itemData => {
    //             console.log(`Weather data for ${item}:`, itemData);
    //             document.getElementById("cityList").innerHTML += `<tr>
    //               <th scope="row" class="text-start">${item}</th>
    //               <td>${itemData.temp}&deg;C</td>
    //               <td>${itemData.humidity}%</td>
    //               <td>${itemData.wind_speed} km/h</td>
    //             </tr>`
    //         })
    //         .catch(error => console.error(error));
    // })
}

const search = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
search.addEventListener("click", e => getWeather(cityInput.value));

getWeather("Kolkata");