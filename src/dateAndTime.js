function dateParser() {
    let newDate = new Date().toLocaleDateString("en-EN", {
        month: "2-digit",
        day: "2-digit",
    });
    return newDate;
}

function getSunsetAndSunriseTime(input) { 
    let date = new Date(input * 1000);
    let hhmm = date.toLocaleTimeString().slice(0, 5);
    return hhmm
};

function getLocalTime(input) { 
    let localTime = new Date().toLocaleString().slice(11, 17);
    return localTime
}
export {dateParser, getSunsetAndSunriseTime, getLocalTime}