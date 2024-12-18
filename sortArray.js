// Create two arrays using prompt for input
let numbers = prompt("Enter numbers separated by commas (e.g., 24, 65, 21, 5):");
let names = prompt("Enter names separated by commas (e.g., Zenvo, Erica):");

// Convert input strings into arrays
let numbersArray = numbers.split(",").map(Number); // Convert to numbers
let namesArray = names.split(",").map(name => name.trim()); // Remove spaces

// Log the original arrays
console.log("Original Numbers Array:", numbersArray);
console.log("Original Names Array:", namesArray);

// Merge both arrays into a single array
let mergedArray = numbersArray.concat(namesArray);
console.log("Merged Array:", mergedArray);

// Sort numbers in reverse order (numerically)
let sortedNumbers = [...numbersArray].sort((a, b) => b - a); // Sort descending
console.log("Numbers Sorted in Reverse:", sortedNumbers);

// Sort names alphabetically
let sortedNames = [...namesArray].sort(); // Sort ascending alphabetically
console.log("Names Sorted Alphabetically:", sortedNames);
