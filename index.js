function saturdayFun(activity = 'roller-skate') {
    return (`This Saturday, I want to ${activity}!`);
    
}

function mondayWork(activity = 'go to the office') {
    return (`This Monday, I will ${activity}.`); 
}

let wrapAdjective = function(flair = "*") {
    return function (special = "a hard worker") {
        return `You are ${flair}${special}${flair}!`; 
    }
}

