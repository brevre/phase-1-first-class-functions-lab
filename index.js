// Code your solution in this file!
// Return the first two drivers from an array
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // Return the last two drivers from an array
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // Array containing the two functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Higher-order function to create a fare multiplier
  const createFareMultiplier = function(integer) {
    return function(fare) {
      return fare * integer;
    };
  };
  
  // Doubles the fare
  const fareDoubler = createFareMultiplier(2);
  
  // Triples the fare
  const fareTripler = createFareMultiplier(3);
  
  // Select drivers based on a given function
  const selectDifferentDrivers = function(drivers, driverFunction) {
    return driverFunction(drivers);
  };
  