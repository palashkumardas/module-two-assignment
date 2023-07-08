// exercise 11:

/* function sortNumbers(numbers) {
  return numbers.sort(function(a, b) {
    return a - b;
  });
}

const numbers = [4, 2, 8, 1, 5];
const sortedNumbers = sortNumbers(numbers);
console.log(sortedNumbers); */ // output

// exercise 10:

/* function sumArray(array) {
  return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
} */

// Example usage
/* const numbers = [1, 2, 3, 4, 5];
const sum = sumArray(numbers);
console.log("Total:", sum); */ // output Total:15

// exercise 9:

/* function filterEvenNumbers(numbers) {
  return numbers.filter(number => number % 2 === 0);
}
 */
// Example usage
/* const numbers = [1, 2, 3, 4, 5];
const evenNumbers = filterEvenNumbers(numbers);

console.log(evenNumbers); */ //output  2,4

// exercise 8 :

/* function doubleNumbers(numbers) {
  return numbers.map((number) => number * 2);
}

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = doubleNumbers(numbers);
console.log(doubledNumbers); */ // output [2, 4, 6, 8, 10]

// exercise 7:

/* function getAddressCity(address) {
  return address?.city || "Unknown";
}

const address = { street: '123 Main St', country: 'USA' };
console.log(getAddressCity(address)); */  // Output: Unknown

// exercise 6:

/* function getLargestNumber(num1, num2) {
  return num1 && num1 > num2 ? num1 : num2;
}

// Example usage
console.log(getLargestNumber(5, 10));  */ // Output: 10

// excercise 5:

// const multiply = (a, b) => a * b;

// exercise 4 :

/* function isEven(number) {
  return number % 2 === 0 ? "Even" : "Odd";
} */

// Testing the function
/* console.log(isEven(4));  // Output: Even
console.log(isEven(7));  */ // Output: Odd

// exercise 3 :

/* function createGreeting(name) {
  return `"Hello, ${name}! Welcome to our website."`;
}

const userName = "Alice";
const greeting = createGreeting(userName);
console.log(greeting);  */ // "Hello, Alice! Welcome to our website."

// exercise 2:

/* function sumNumbers(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// Example usage
const result = sumNumbers(1, 2, 3, 4, 5);
console.log(result); */ // output: 15

// exercise 1 :

function destructureExample(obj, arr) {
  const { name, age } = obj;

  return { name, age };
}

// Example usage
const exampleObj = {
  name: 'John',
  age: 30,
  city: 'New York'
};

const exampleArr = [10, 20, 30, 40];

const result = destructureExample(exampleObj, exampleArr);
console.log(result); // output : { name: 'John', age: 30 }

