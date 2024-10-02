function createFareMultiplier(integerValue) {
    return function(fare) {
        return fare * integerValue;
    }
}

console.log(createFareMultiplier(2));