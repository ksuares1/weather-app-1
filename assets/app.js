let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};
  // console.log(weather['paris']['temp']);



// write your code here
 
let city = prompt("Enter your city:");
// city=city.toLowerCase();
// city=city.trim();
// let humidity = weather[city].humidity;
// let temperature = weather[city].temp;
// let celsiusTemperature = Math.round(temperature);
// let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);
// || city === "Tokyo" || city === "Lisbon" || city === "San Francisco" || city === "Oslo"
function atlas(){
   if (city === city)  {
        alert(`It is currently 19°C (66°F) in ${city} with a humidity of 80% `);

    }
     else {
      alert(
        "Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+sydney");
    }
  }
  atlas();

  