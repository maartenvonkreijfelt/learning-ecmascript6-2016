
var vacation = {
    destination: "Chile",
    travelers: 2,
    activity: "skiing",
    cost: 4000
};

function vacationMarketing({destination, activity}) {
    return `Come to ${destination} and do some ${activity}`
}

console.log(vacationMarketing(vacation));
