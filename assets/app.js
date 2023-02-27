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

function atlas(){
  let temperature=weather[city].temp;

      if (city === "Paris" ) {
      // alert(`It is currently weather[city].temp in  +city with a humdity of .`);
      console.log(weather[city].temp);
    }
     else {
      alert(
        "Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+sydney");
    }

  }
  atlas();

  // || city === "Tokyo" || city === "Lisbon" || city === "San Francisco" || city === "Oslo"