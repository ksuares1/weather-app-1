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
//  console.log(weather);



// write your code here
 function atlas(){
   let city = prompt("Enter your city:");
  //  for(let i=0;i<weather.length;i++){
  //   console.log(weather[i]);
    if(city == weather.paris) {
    alert("It is currently 19°C (66°F) in Paris with a humidity of 80%");
     }
     else{
      alert("What country are you from?");
     }
 }

 atlas();