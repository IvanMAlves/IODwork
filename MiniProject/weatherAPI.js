let citiesSelectedlist = [];
const cityselect = document.getElementById('citySelect');

for (i = 0; i < cities.length; i++) {
    cityselect.options[cityselect.options.length] = new Option(cities[i].city, cities[i].id);
}

function removeCard(button, event) {
    event.preventDefault()
    citiesSelectedlist.splice(button.getAttribute('data-city'), 1); //removes from internal array via city index
    document.getElementById('city'+button.getAttribute('data-city')).remove() //removes from HTML document via element id
}

function addCard(card, cityId) {
    console.log("test message start of addcard");

    const template = document
        .getElementById("card-template")
        .content.cloneNode(true);

    template.querySelector('.frontContent-col').setAttribute('id', 'city' + cityId)

    let city = card.city;
    let weather = card.current.weather; //
    let description = weather[0].description; //this is taking the description of the first object of the array
    let temp = (card.current.temp - 273.15).toFixed(1);
    let windSpeed = (card.current.wind_speed * 1.6093440).toFixed(2);
    template.querySelector(".card-title").innerText = "City: " + card.city;
    template.querySelector(".close-button").setAttribute('data-city', cityId)

    template.querySelector(".card-text").innerText = "\nTemp:" + temp + "C" + "\nConditions:" + description + "\nWind Speed:" + windSpeed + "km/h";

    document.querySelector("#card-list").appendChild(template);
    console.log(card);
}

function show(response) {
    let temp = (response.current.temp - 273.15).toFixed(1);
    let city = response.city;
    let weather = response.current.weather; //
    let description = weather[0].description; //this is taking the description of the first object of the array
    let windSpeed = (response.current.wind_speed * 1.6093440).toFixed(2);
    document.getElementById("resultsP").innerText = "City: " + city + "\nTemp:" + temp + "C" + "\nConditions:" + description + "\nWind Speed:" + windSpeed + "km/h";
    document.getElementById("resultsDiv").style.display = "inline";
    document.getElementById("weatherDisplay").style.display = "inline";
}

function test(e) {
    e.preventDefault();
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': 'weather-with-ai.p.rapidapi.com'
        }
    };
    let lat = cities[cityselect.value].lat;
    let lng = cities[cityselect.value].long;
    console.log(lat + ', ' + lng);
    if (!citiesSelectedlist.includes(cities[cityselect.value])) {//checking to see if the city is selected twice
        fetch("https://weather-with-ai.p.rapidapi.com/get_weather/v1?lat=" + lat + "&lng=" + lng, options)
            .then(response => response.json())
            .then(response => {
                show(response);
                addCard(response, cityselect.value);
                citiesSelectedlist.push(cities[cityselect.value]);
                console.log(citiesSelectedlist);
            })
            
            .catch(err => { console.error(err) });
    }
}
//edit making changes