const form = document.querySelector("form");


//form on submiting
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const div = document.querySelector(".card");
    const city = document.querySelector(".form-control").value.trim().toLowerCase();
    const cities = ["peshawar", "islamabad", "karachi", "lahore", "quetta"]
    const mached = cities.includes(city)

    //add a new class 
    div.classList.add("div-bg");

    if (mached && weatherdata[city]) {
        let data = weatherdata[city];
        div.innerHTML = `
Name  : ${city}
<br>
Temperature   :    ${data.temperature}  °C
<br>
Wind Speed    :    ${data.windspeed}  km/h
<br>
Weather Code  :    ${data.weathercode}
`;

    } else {
        div.innerHTML = `<P class="text-danger">Please enter a vailed name?? </p>`
    }

    //"", lahore.temperature + ""
    //"", lahore.windspeed + " "
    //"", lahore.weathercode);


})
