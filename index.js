
// index.js
const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss')
const { fetchISSFlyOverTimes } = require('./iss');


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP("74.12.71.28", (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned coordinates:' , coordinates);
// });



////
const exampleCoords = { latitude: 43.653226, longitude: -79.3831843 };

fetchISSFlyOverTimes(exampleCoords, (error, passtimes) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned flyover times: ', passtimes)
})