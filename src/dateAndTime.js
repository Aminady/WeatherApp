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
    let s= new Date().toLocaleString().slice(11, 16);
    return s
}
export {dateParser, getSunsetAndSunriseTime, getLocalTime}