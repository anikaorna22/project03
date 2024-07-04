let startYear = prompt("Enter the starting year of the range:");
let endYear = prompt("Enter the ending year of the range:");
startYear = parseInt(startYear);
endYear = parseInt(endYear);

let leapYearCount = 0;
for (let year = startYear; year <= endYear; year++) {
    if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        leapYearCount++;
    }
}

console.log("Total number of leap years in the range:", leapYearCount);
