// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
const returnFirstTwoDrivers = function() { return drivers.slice(0,2);}
const returnLastTwoDrivers = function() {return drivers.slice(2,4);}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = function(fareMultiplier) {
    return function(fare){ return fareMultiplier * fare;}
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers(drivers, fun){
    return fun(drivers);
}
