function convertTemperature() {
    let temperature = document.getElementById("temperature").value;
    let unit = document.getElementById("unit").value;
    let result = document.getElementById("result");

 
    if (isNaN(temperature) || temperature === "") {
        result.innerHTML = "Please enter a valid number.";
        return;
    }

    temperature = parseFloat(temperature);
    let convertedTemp;

    if (unit === "celsius") {
        convertedTemp = `${(temperature * 9/5) + 32} °F (Fahrenheit), ${(temperature + 273.15)} K (Kelvin)`;
    } else if (unit === "fahrenheit") {
        convertedTemp = `${(temperature - 32) * 5/9} °C (Celsius), ${((temperature - 32) * 5/9 + 273.15)} K (Kelvin)`;
    } else if (unit === "kelvin") {
        convertedTemp = `${temperature - 273.15} °C (Celsius), ${((temperature - 273.15) * 9/5) + 32} °F (Fahrenheit)`;
    }

    result.innerHTML = `Converted Temperature: ${convertedTemp}`;
}
