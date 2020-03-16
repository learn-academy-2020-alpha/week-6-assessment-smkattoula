// ASSESSMENT 6: Coding Practical Questions


// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [{name: "ford prefect", occupation: "hitchhiker"}, {name: "zaphod beeblebrox", occupation: "president of the galaxy"}, {name: "arthur dent", occupation: "radio employee"}]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is the president of the galaxy." "Arthus Dent is a radio employee."


// I created a function that takes array as the argument and returns the expected output using string interpolation. I know this code doesn't look so pretty but it's the best I could come up with on my own without much googling. 
// Essentially, I used .replace on all of the array names along with regex. In regex, the \b asserts a position at the beginning of all word boundries and \w selects the first word character (\w is used in conjunction with \b, otherwise, without \b, the \w would select all word characters instead of the first word character of each word).
// The /g is a global search which means it will match all word occurrences within a string. After the regex, I set a variable c to equal .toUpperCase which is what uppercases all of the first characters of each first and last name in the array.


const namesCapitalized = (array) => {
        return (`${array[0].name.replace(/\b\w/g, c => c.toUpperCase())} is a ${array[0].occupation}.\n${array[1].name.replace(/\b\w/g, c => c.toUpperCase())} is the ${array[1].occupation}.\n${array[2].name.replace(/\b\w/g, c => c.toUpperCase())} is a ${array[2].occupation}.`) 
    
}
console.log(namesCapitalized(people))


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the remainder of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// I created a function called onlyNum which is supposed to take in a mixed data array and return a new array with only the remainder of the numbers when divided by 3.
// Passed in "array" as the argument and I returned array using .filter in which I set the .typeof method to "number" and used .map after that to set the value to itself and used the modulus operator (%) which divided each number in the array by 3 and returned the remainders. 

const onlyNum = (array) => {
  return array.filter(value => typeof value === "number").map(value => value % 3)
}

console.log(onlyNum(testingArray1))
console.log(onlyNum(testingArray2))

// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]

// For this one I created a function that takes 2 arrays as arguments and return one array with no duplicate values.
// I passed in "array1" and "array2" as the arguments and then I returned array1.concat(array2) which merges the 2 arrays together. Then I had to google "how to remove duplicates from an array javascript" 
// in order to complete this problem. I do believe that I understand the logic behind it though. If I'm correct, I'm setting .filter to the items of the array and their index in conjunction with the .indexOf method to return 
// the first item of a given element in the array and set that equal to the index so it returns an array with no duplicates. Bleh.. that was my best attempt at explaining this logic haha. Please let me know how I can improve my explanation of this logic! :)

const noDuplicates = (array1, array2) => {
    return (array1.concat(array2)).filter((item, index) => array1.indexOf(item) === index)
}

console.log(noDuplicates(testingArray3, testingArray4))