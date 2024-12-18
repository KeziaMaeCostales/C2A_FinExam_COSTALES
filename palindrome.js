// Declare two variables and use the prompt() function to get inputs
let word1 = prompt("Enter the first word: "); // Example: RACEACAR
let word2 = prompt("Enter the second word: "); // Example: RECORDER

// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join(""); // Splits, reverses, and joins back
}

// Reverse the two strings
let reversedWord1 = reverseString(word1);
let reversedWord2 = reverseString(word2);

// Log the original and reversed strings
console.log("Original Word 1:", word1);
console.log("Reversed Word 1:", reversedWord1);
console.log("Original Word 2:", word2);
console.log("Reversed Word 2:", reversedWord2);

// Check if the original strings are palindromes
let isPalindrome1 = word1 === reversedWord1; // Compare word1 and its reverse
let isPalindrome2 = word2 === reversedWord2; // Compare word2 and its reverse

// Log the results
console.log("Is Word 1 a palindrome?", isPalindrome1);
console.log("Is Word 2 a palindrome?", isPalindrome2);
