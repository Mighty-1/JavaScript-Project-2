// String Manipulation Functions

// Function to reverse a given string 
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Function to count the number of characters in a string
function countString(str) { 
    return str.length;
}

// Function to capitalize the first letter of each word in a sentence
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Function to find the maximum value in an array
function findMaxValue(arr) {
    return Math.max(...arr)
}

// Function to find the minimum value in an array
function findMinValue(arr) {
    return Math.min(...arr)
}

// Function to calculate the sum of all elements in an array
function sumArray(arr) {
    return arr.reduce((sum, current) => sum + current, 0);
}

// Function to filter elements from an array based on a given condition
function filterArray(arr, condition) {
    return arr.filter(condition);
}

// Function to calculate the factorial of a given number
function factorial(num) {
    if (num < 0) return 'Invalid input';
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Function to generate the Fibonacci sequence up to a given number of terms
function generateFibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

// Example usage
const exampleString = "hello world"
const exampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("Reversed String:", reverseString(exampleString));
console.log("Character Count:", countString(exampleString));
console.log("Capitalized String:", capitalizeWords(exampleString));
console.log("Maximum Value:", findMaxValue(exampleArray));
console.log("Minimum Value:", findMinValue(exampleArray));
console.log("Sum of Array:", sumArray(exampleArray));
console.log("Filtered Array (even numbers):", filterArray(exampleArray, num => num % 2 === 0));

console.log("Factorial of 5:", factorial(5));
console.log("Is 7 Prime?:", isPrime(7));
console.log("Fibonacci Sequence (first 10 terms):", generateFibonacci(10));