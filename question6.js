let start = prompt("Enter the starting number of the range:");
let end = prompt("Enter the ending number of the range:");
start = parseInt(start);
end = parseInt(end);

function averageOfEvens(start, end) {
    let sum = 0;
    let count = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            sum += i;
            count++;
        }
    }
    return count > 0 ? sum / count : 0;
}

function averageOfOdds(start, end) {

    let sum = 0;
    let count = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) {
            sum += i;
            count++;

        }
    }
    return count > 0 ? sum / count : 0;
}

let avgEvens = averageOfEvens(start, end);
let avgOdds = averageOfOdds(start, end);

console.log("Average of even numbers:", avgEvens);
console.log("Average of odd numbers:", avgOdds);
