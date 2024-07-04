let start = prompt("Enter the starting number of the range:");
let end = prompt("Enter the ending number of the range:");
start = parseInt(start);
end = parseInt(end);

let sum = 0;
for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
        sum += i;

    }
}

console.log("Sum of all the even numbers in the range:", sum);
