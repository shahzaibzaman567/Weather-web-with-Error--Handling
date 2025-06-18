let spinner = document.querySelector(".spinner")
let butt = document.querySelector(".butt")
// The data of this city pass in array. 
const weatherdata = {
    karachi: {},
    lahore: {},
    peshawar: {},
    islamabad: {},
    quetta: {},
}

spinner.classList.add("spinner")

//city 1 Lahore
// api of this city wheather

const Lahore = "https://api.open-meteo.com/v1/forecast?latitude=31.52&longitude=74.35&current_weather=true";

fetch(Lahore)
    .then(res => res.json())
    .then(data => {
        let div = document.querySelector(".card")
        weatherdata.lahore = data.current_weather;
        console.log("Temperature:", weatherdata.lahore.temperature + "°C");

        spinner.classList.remove("spinner")
        butt.classList.remove("butt")
        // div.innerHTML="say hay";
    })
    .catch((err) => {

        console.error("API Error:", err);
        spinner.classList.remove("spinner");
        butt.classList.remove("butt");
        div.classList.add("div-bg");
        div.innerHTML = "Network Error Please check your network?"
        document.body.removeChild(spinner)
    });

//city 2 Lahore

let karachi = "https://api.open-meteo.com/v1/forecast?latitude=24.86&longitude=67.01&current_weather=true";

fetch(karachi)
    .then(res => res.json())
    .then(data => {
        weatherdata.karachi = data.current_weather;
    })
    .catch(err => console.error("API Error:", err));

//city 3 Lahore

const islamabad = "https://api.open-meteo.com/v1/forecast?latitude=33.69&longitude=73.05&current_weather=true"
fetch(islamabad)
    .then(res => res.json())
    .then(data => {
        weatherdata.islamabad = data.current_weather;

    })
    .catch(err => console.error("API Error:", err));

//city 4 Lahore

const peshawar = "https://api.open-meteo.com/v1/forecast?latitude=34.01&longitude=71.58&current_weather=true";

fetch(peshawar)
    .then(res => res.json())
    .then(data => {
        weatherdata.peshawar = data.current_weather;

    })
    .catch(err => console.error("API Error:", err));

//city 5 Lahore

const quetta = "https://api.open-meteo.com/v1/forecast?latitude=30.18&longitude=66.97&current_weather=true";
fetch(quetta)
    .then(res => res.json())
    .then(data => {
        weatherdata.quetta = data.current_weather;

    })
    .catch(err => console.error("API Error:", err));
