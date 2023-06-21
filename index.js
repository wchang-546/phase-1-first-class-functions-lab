const returnFirstTwoDrivers = function(array){
    return array.slice(0,2)
};


const returnLastTwoDrivers = function(array){
    return array.slice(-2)
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare){
    return function(integer){
        return fare *integer 
    }
};

function fareDoubler(fare){
    return fare*2
};

function fareTripler(fare){
    return fare*3
};

const selectDifferentDrivers = function (array, drivers){
    return drivers(array)
};

/** Alternate, chunkier, solution:  
function selectDifferentDrivers(arrayOfDrivers, f){
    if (f === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(arrayOfDrivers)
    } else if (f === returnLastTwoDrivers){
        return returnLastTwoDrivers(arrayOfDrivers)
    }
};

 */

