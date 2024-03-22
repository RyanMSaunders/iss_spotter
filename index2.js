
// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss_promised');
const { nextISSTimesForMyLocation } = require('./iss_promised');


// fetchMyIP()
//   .then(fetchCoordsByIP)   // body will now be the response body (JSON string) returned from our second API call, to ipwho.is, containing geographical information for the given IP address.
//   .then(fetchISSFlyOverTimes) // The JSON response (string) as returned by our https://iss-flyover.herokuapp.com API call.
//   .then(body => console.log(body));

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};
  // Call 
nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });
