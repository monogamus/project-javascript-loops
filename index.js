/* JavaScript do...while loop
let iteration = 1

do {
    console.log(iteration)
    iteration += 5
} while (iteration < 250)



// JavaScript for loop
for (let index = 0; index <= 100; index += 10) {
    console.log(index)
}


const number = [2, 3, 5, 7, 11, 13, 17, 19, 23]

for (let index = 0; index < number.length; index++) {
    const element = numbers[index]
    Console.log(element)
}
*/


// Challenge Factorial Number
let iteration = 1

do {
    console.log(iteration)
    iteration += 5
}
while (iteration < 100)

for(let i = 0; i <= 100; i++){
    console.log(i)
}

const numbers = [2,3,5,7,11,13,17,19,23]

for(let i = 0; i < numbers.length; i++) {
    const element = numbers[i]
    console.log(element)
}

let a = 4
let result = 1;

for(let i = 0; i < a; i++){
    result = result * (a-i);
}

console.log(`Hasil faktorial ${a} adalah ${result}`);



// Challenge Reverse Name
let input = "BagusSuryadi";
let reverseName = "idayruSsugaB";

let output = input
.split("")
.reverse()
.join("");
console.log(output);

let output1 = reverseName
.split("")
.reverse()
.join("");
console.log(output1);