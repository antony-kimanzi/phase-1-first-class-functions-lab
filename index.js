//return the first two drivers
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
}

console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));


//returns the last two drivers
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2, 4);
}

console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));


// seletingDrivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

console.log(selectingDrivers[0](['Antonia', 'Nuru', 'Amari', 'Mo']));


//creates fare multiplier function
function createFareMultiplier(integerValue) {
    return function(fare) {
        return fare * integerValue;
    }
}


//fareDoubler and fareTripler functions
const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
}
console.log(fareDoubler(20));

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
}
console.log(fareTripler(20));


//select different drivers function
function selectDifferentDrivers(drivers, driverSelector) {
    return driverSelector(drivers);
}

console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers));

