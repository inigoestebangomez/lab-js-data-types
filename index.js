/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string

let togueTwister = s1 + " " + s2 + " "+ s3 + " " + s4 + " "+ s5 + " " + s3 + " "+ s2 + " " + s1 + " "+ s4


// Print out the concatenated string

console.log(togueTwister)


/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

let lastChar1 = part1[3].toUpperCase()
let restOfChars1 = part1.slice(0, 3)

console.log(restOfChars1 + lastChar1)

let lastChar2 = part2[5].toUpperCase()
let restOfChars2 = part2.slice(0, 5)



// Print the cameLtaiL-formatted string


console.log(restOfChars1 + lastChar1 + restOfChars2 + lastChar2)

/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const tip = billTotal * 0.15;

const tipAmount = billTotal + tip;

// Print out the tipAmount

console.log(tipAmount)


/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

let randomNumber = Math.random()*10;
let roundNumberRandom = Math.round(randomNumber);

// Print the generated random number

console.log(roundNumberRandom)


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; // false
console.log(expression1)
const expression2 = a || b; // true
console.log(expression2)
const expression3 = !a && b; // false
console.log(expression3)
const expression4 = !(a && b); // true
console.log(expression4)
const expression5 = !a || !b; // true
console.log(expression5)
const expression6 = !(a || b); // false
console.log(expression6)
const expression7 = a && a; // true
console.log(expression7)